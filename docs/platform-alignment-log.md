# 统一平台对齐台账

更新时间：2026-03-31

## 已对齐

- 项目管理索引改为“项目 + 地址(path)”主键。
- 管理目录从固件工程迁移到 `E:\相位\progress\project-management`。
- 管理页面分层为：
  - 总览：`index.html`
  - 单项目详情：`projects/project1/index.html`
- 已建立核心项目索引：
  - `Unified 平台单发调试` -> `E:\相位\program\green`
  - `单发参考工程核对` -> `E:\相位\program\gd303_refactor 双发 - 副本 (5)\gd303_refactor 双发 - 副本 (5)`
  - `Bootloader 管理` -> `E:\相位\program\bootloader`

## 统一原理口径

- 单发 / 双发 / 双收采用统一语义框架。
- 双发、双收已接入 unified 可编译切换。
- 当前主线推进：统一平台对单发能力口径对齐与调试闭环。

## 统一执行原则（2026-03-31）

- 入口唯一原则：
  - 业务层统一通过 `hw_system_request(START/CONFIG/STOP)` 控制硬件会话。
  - 禁止业务层多入口直接拼装底层驱动启停流程。
- 调试顺序原则：
  - `E6 -> 驱动检查 -> A3(默认APD) -> AC -> A3(最佳APD) -> BA`。
- 校准顺序原则：
  - `F4 -> F1(5000mm) -> FB`。
  - `F4` 只负责工作点，`F1` 只负责相位校准，`FB` 只负责运行验证。

## 分层对齐总表（L0-L5）

| 层级 | 目录 | 需要对齐的内容 | 验收标准 |
|---|---|---|---|
| L0 硬件/芯片底层 | drivers/chips, hal, board | 引脚真值、寄存器语义、时序/延时、状态机注释 | 每个驱动文件头有“职责+输入输出+副作用+依赖” |
| L1 驱动接口层 | drivers/*.h/*.c | 统一接口契约（init/enable/disable/force_off）与 ref_count 规则 | 所有驱动接口注释口径一致，无冲突描述 |
| L2 管理器层 | drv_manager, hw_system | 单入口 START/CONFIG/STOP 语义、启停顺序、异常恢复 | 业务层不再靠猜测调用，注释能直接指导调用 |
| L3 采样与算法内核 | core, ranging, calibration | 调用链、APD/PLL/ADC职责边界、缓存来源、阈值来源 | 每条主流程有“拿什么数据→怎么用→输出什么” |
| L4 协议与命令层 | cmd, protocol, public | 命令输入输出、前置条件、失败码、调试日志字段 | 每个命令函数有最小协议说明与关键判定 |
| L5 配置与持久化 | config, storage, app, user | 宏配置来源、板型/profile映射、校准数据读写口径 | 配置改动影响路径可追踪 |
| 第三方/中间件边界 | CMSIS, usb, lib, boot_sdk, RTE | 标记“外部/移植层”，只补边界注释，不改核心逻辑 | 不污染第三方逻辑，边界清晰 |

## 待继续

- 把“平台对齐项”持续按阶段写入 runs：
  - `差异确认`
  - `配置对齐`
  - `指令链回归(F7/FB/BA/AC)`
  - `问题闭环`
- 将旧 tracker 日志路径逐步统一到 `E:\相位\progress\project-management\logs`。

## 调试流程对齐（2026-03-31）

- 单发调试顺序口径统一为：
  - `E6 自检`（协议回包 + 运行日志双证据）
  - `驱动检查`（F0/F6/AD/AE/A6/E7）
  - `信号链检查`：`A3(默认APD)` -> `AC(找最佳APD)` -> `A3(最佳APD)` -> `BA(稳定性)`
- 调试过程中明确：
  - `F4` 统一职责仅为“确定 APD 工作点”，不再混入测距判定。
  - 单发为电混路径，不做反光塞调节；双发/双收允许该动作，但输出口径仍为工作点结果。
- 当前问题闭环定位：
  - `FB dist=0` 主因定位到 `S3 zero_boundary` 命中后进入 `S4 blind_zero` 清零路径，不是“无信号”。

## 校准流程对齐（2026-03-31）

- 校准主流程口径统一为：`F4 -> F1(5000mm) -> FB`。
- `F1` 参数口径确认：
  - 5000mm 使用大端参数 `00 00 13 88`。
- `F1` 提交规则确认：
  - 仅 `verify pass` 才允许持久化；`verify fail` 不写入新相位校准数据。
- 工作系数口径确认：
  - `F4` 成功后写入 `coeff` 与 `dual_vbr/work_apd` 相关数据。
  - 运行测距链路主要使用 `APD/VBR` 比值系数与运行态 VBR/工作点，不以 `coeff.apdwork` 单字段作为唯一判据。
- 当前单发结论（当日）：
  - 已明确“F4 只负责工作点，F1 只负责相位校准，FB 只负责测距验证”的职责边界。

## E6 自检协议对齐（2026-04-22）

### 协议解析验证

- F7 设备信息: 48B变长帧, LE序, ✅ 与固件 `cmd_system.c::cmd_device_info()` 完全对齐
- E6 自检bitmap: 固定帧, BE序, ✅ 与固件 `cmd_debug_shared.c::cmd_selftest()` 完全对齐
- EA 状态快照: 8B变长帧, ✅ 与固件 `cmd_debug_basic.c::cmd_status_snapshot()` 完全对齐
- 实测 COM23 bitmap=0x00000300 → bit8 PLL通信 + bit9 PLL锁定

### E6 PLL误报根因

- 单发模式 `cmd_debug_start_session` 用 `INTERNAL_RAW` 跳过了 `pll_enable()`
- 但 E6 仍无条件 `pll_read_status()` → 读到未配置的 Si5351 → 误报 PLL 错误
- gd303双发版正确做法: `pll_request_on(0)` → 等50ms → 读状态 → `pll_release()`

### E6 缺失检查项（对比 gd303双发版 diagnostic.c）

| 检查项 | bit位 | gd303双发 | green-lcd | 改动方案 |
|---|---|---|---|---|
| MC3416 ID | bit4 | ✅ WHO_AM_I | ❌ 缺失 | `drv_mc3416_get_error()` |
| PLL开启后检查 | bit8-10 | ✅ 先开再测再关 | ❌ 未开就测 | `pll_enable()+50ms+read+disable` |
| PLL输出 | bit10 | ✅ 读reg3 | ❌ 缺失 | `si5351_readonebyte(0x03)` |
| APD寻优 | bit13 | ✅ find_apd_vbr | ❌ 缺失 | `apd_manager_quick_check_and_set_apd()` |
| 相位校准 | bit27 | ✅ ±360范围 | ❌ 缺失 | `g_cal_data.phase[m].valid` |
| 系数 | bit29 | ✅ apdwork范围 | ❌ 缺失 | `g_cal_data.coeff.apdwork` |
| 光速校准 | bit28 | ✅ num=2 | ❌ 缺失 | `g_cal_data.speed_cal.point_count` |
| LD发射 | bit17 | ❌ | ❌ | 暂不加 |
| 相位稳定性 | bit24 | ✅ shake>5 | ❌ | 不加(BA/AB独立命令) |

### 开机耗时分析

- 现有E6: ~75ms
- 新增PLL开/测/关: ~60ms
- 新增MC3416: ~1ms
- 新增APD寻优(force_refind): ~500ms-2s (先全功能, 后续优化)
- 新增校准3项: ~1ms
- 合计: ~135ms(不含APD寻优) / ~1-2s(含APD寻优)
- 开机2s限制: 无日志时够用, 后续可优化开机轻量版

### 遗留问题

- [ ] APD寻优开机耗时优化: 开机只查 bestapd 范围, 命令触发才做完整寻优
- [ ] 上位机前端 E6 bitmap 显示需增加新 bit 项中文标签
- [ ] 上位机扫描后自动连接(identified→auto activate)
- [ ] 上位机操作结果回填设备卡片(F7→信息, E6→自检, EA→APD)
- [ ] 上位机详情在日志区切换显示

## 运行偏差复盘（2026-03-31）

- 现象：
  - `F1(5000mm)` 在 verify 阶段可达到 `dist=5000mm`（误差 < 1mm）。
  - 独立 `FB` 连测出现 `dist≈5030mm`（偏差约 +30mm），该结果判定为异常，不视为校准通过后的稳定状态。
- 已确认根因链路（阶段性）：
  - `F1 verify` 走强制参数（`force_apd + skip_s1`），可复用 F4 工作点。
  - 独立 `FB` 走运行态 `S1` 自动链路，会再次做 APD/功率策略，导致 APD 可能从 `F4` 工作点漂移到其他值（例如 818）。
  - 因此 `F1 verify` 与 `FB runtime` 不是同一路径口径，出现 5000 与 5030 不一致。
- 结论：
  - 当前问题不是“校准距离参数错”，而是“运行态 S1 对 F4 结果复用不闭环”。
  - 需要将 S1 起点与 F4 产出的 `work_apd/coeff` 强绑定，并限制自动搜索的回退范围。
