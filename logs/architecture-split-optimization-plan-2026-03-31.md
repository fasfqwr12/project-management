# Green 工程抽象统一与拆分优化评估（2026-03-31）

## 1. 结论（先说结果）

你判断是对的：不仅 `drv_laser`，整个工程里还有多个“多职责大文件”。

按“行数 + 依赖密度 + 入口混杂度”评估，优先拆分目标：

1. `ranging/range_engine.c`（2919 行）
2. `core/measure_core.c`（2719 行）
3. `core/apd_manager.c`（2026 行）
4. `calibration/cal_engine.c`（1165 行）
5. `hw_system/hw_system.c`（888 行）
6. `drivers/drv_laser.c`（521 行）
7. `cmd/cmd_debug_basic.c`（457 行）
8. `cmd/cmd_debug_capture.c`（292 行）

## 2. 统一接口口径（必须先定）

- L1：`drv_interface_t` 统一单驱动契约
- L2：`hw_system_request(START/CONFIG/STOP)` 统一跨驱动会话
- L3/L4：业务层只通过 L2 控硬件，不直接拼装底层驱动调用

目标：入口唯一，策略可替换，硬件行为可追踪。

## 3. 最优拆分方案（不改行为优先）

### 3.1 L3 核心链路

#### A. `ranging/range_engine.c`

建议拆分为：
- `range_engine_s1.c`：S1 搜索策略/APD决策
- `range_engine_s2.c`：S2 频点采样与相位计算
- `range_engine_s3s4.c`：组合解算与后处理
- `range_engine_flow.c`：总流程编排与状态切换

收益：S1/S2/S3/S4 各自职责清晰，调试定位直接。

#### B. `core/measure_core.c`

建议拆分为：
- `measure_core_session.c`：会话管理与 hw 请求
- `measure_core_capture.c`：采样与缓冲读取
- `measure_core_analyze.c`：幅值/相位分析
- `measure_core_api.c`：对外统一接口

收益：把“会话控制”和“算法处理”分离，减少耦合。

#### C. `core/apd_manager.c`

建议拆分为：
- `apd_cache.c`：缓存与状态读写
- `apd_search_adc.c`：ADC 窗口搜索
- `apd_search_vbr.c`：VBR 扫描
- `apd_debug.c`：调试扩展接口
- `apd_manager.c`：统一调度门面

收益：搜索策略可独立演进，不影响缓存/门面接口。

#### D. `calibration/cal_engine.c`

建议拆分为：
- `cal_flow.c`：F4/F1/FB 流程编排
- `cal_apd_workpoint.c`：F4 工作点逻辑
- `cal_phase.c`：F1 相位校准
- `cal_verify.c`：FB 验证与结果判定

收益：校准职责边界固定，避免策略串扰。

### 3.2 L2/L1 驱动与会话层

#### E. `hw_system/hw_system.c`

建议拆分为：
- `hw_system_session.c`：START/CONFIG/STOP + ref_count
- `hw_system_apply.c`：rule/path/power/apd/adc 按需应用
- `hw_system_debug.c`：reconfig reason / snapshot /日志

收益：会话语义与资源应用解耦，注释更可维护。

#### F. `drivers/drv_laser.c`

建议拆分为：
- `drv_laser_iface.c`：drv_interface_t 适配
- `drv_laser_hw.c`：GPIO/DAC 后端
- `drv_laser_policy.c`：单双发功率策略
- `drv_laser_cfg.c`：KV 配置读写

收益：你说的“套层感”会明显降低，定位问题更快。

### 3.3 L4 命令层

#### G. `cmd/cmd_debug_basic.c` / `cmd/cmd_debug_capture.c`

建议拆分为：
- `cmd_debug_diag.c`：E6/驱动状态诊断
- `cmd_debug_wave.c`：A3/波形采样类
- `cmd_debug_apd.c`：APD 相关调试命令
- `cmd_debug_power.c`：激光功率/电流调试

收益：协议命令按功能域聚合，查命令更直观。

## 4. 注释补齐标准（全工程统一）

每个 `.c/.h` 最少补齐：

1. 文件头（模块职责）
- 这个文件“负责什么，不负责什么”
- 输入/输出
- 副作用（会动哪些硬件/全局状态）
- 依赖（上游/下游）

2. 关键函数头
- 前置条件
- 参数语义
- 成功/失败行为
- 与 `hw_system_request` 的关系

3. 关键流程块注释
- “为什么这么做”而不是“做了什么”

## 5. 分阶段执行（推荐）

### Phase-1（低风险，先做）
- 只补注释，不拆文件，不改行为。
- 覆盖 P0：`range_engine.c`, `measure_core.c`, `apd_manager.c`, `cal_engine.c`, `drv_laser.c`。

### Phase-2（中风险）
- 按上面的拆分方案做“文件拆分但不改接口”。
- 编译 + 指令链回归：`E6/A3/AC/BA/F4/F1/FB`。

### Phase-3（高收益）
- 清理业务层直调底层调用，收敛到单入口口径。
- 增加静态检查：业务层禁止新增长期直调驱动调用。

## 6. 约束

- 第三方目录（`CMSIS/lib/usb/boot_sdk/RTE`）不做源码重写。
- 只做边界文档和本地适配层注释，避免污染上游代码。
