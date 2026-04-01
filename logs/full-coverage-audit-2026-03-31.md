# Green 全量注释与抽象对齐审计（2026-03-31）

## 范围

- 根目录：`E:/相位/program/green`
- 文件类型：全部 `.c/.h`
- 总数：`233`

## 原则同步（已纳入本次审计口径）

1. 统一抽象原则
- 业务层统一走 `hw_system_request(START/CONFIG/STOP)`。
- 驱动实现与会话编排分层，禁止多入口并行控硬件。

2. 统一调试原则
- 顺序固定：`E6 -> 驱动检查 -> A3(默认) -> AC -> A3(最佳) -> BA`。
- `E6` 必须“协议回包 + 运行日志”双证据通过后再进入后续链路。

3. 统一校准原则
- 顺序固定：`F4 -> F1(5000mm) -> FB`。
- `F4` 只负责 APD 工作点；`F1` 只负责相位校准；`FB` 只负责测距验证。

4. 统一边界原则
- 第三方目录（`CMSIS/lib/usb`）只做边界说明，不做大面积注释重写。
- 可维护性改造优先聚焦“业务层 + 自研驱动层 + 会话编排层”。

## 分层对齐需求（底层 -> 上层）

| 层级 | 目录 | 需要对齐的内容 | 验收标准 |
|---|---|---|---|
| L0 硬件/芯片底层 | drivers/chips, hal, board | 引脚真值、寄存器语义、时序/延时、状态机注释 | 每个驱动文件头有“职责+输入输出+副作用+依赖” |
| L1 驱动接口层 | drivers/*.h/*.c | 统一接口契约（init/enable/disable/force_off）与 ref_count 规则 | 所有驱动接口注释口径一致，无冲突描述 |
| L2 管理器层 | drv_manager, hw_system | 单入口 START/CONFIG/STOP 语义、启停顺序、异常恢复 | 业务层不再靠猜测调用，注释能直接指导调用 |
| L3 采样与算法内核 | core, ranging, calibration | 调用链、APD/PLL/ADC职责边界、缓存来源、阈值来源 | 每条主流程有“拿什么数据→怎么用→输出什么” |
| L4 协议与命令层 | cmd, protocol, public | 命令输入输出、前置条件、失败码、调试日志字段 | 每个命令函数有最小协议说明与关键判定 |
| L5 配置与持久化 | config, storage, app, user | 宏配置来源、板型/profile映射、校准数据读写口径 | 配置改动影响路径可追踪 |
| 第三方/中间件边界 | CMSIS, usb, lib, boot_sdk, RTE | 标记“外部/移植层”，只补边界注释，不改核心逻辑 | 不污染第三方逻辑，边界清晰 |

1. L0 底层硬件实现层（`board/`, `hal/`, `drivers/chips/`）
- 对齐内容：引脚真值、寄存器副作用、时序前置条件、硬件约束。
- 验收：每个文件具备“职责 + 输入 + 输出 + 副作用”文件头注释。

2. L1 驱动接口层（`drivers/*.h/*.c`）
- 对齐内容：`init/enable/disable/force_off/idle_tick` 统一语义。
- 验收：接口口径一致，无“同名不同义”。

3. L2 会话编排层（`hw_system/`, `drv_manager`）
- 对齐内容：`START/CONFIG/STOP` 契约、ref_count、启停顺序、异常恢复。
- 验收：业务层唯一入口明确，注释与实现一致。

4. L3 采样/测距/校准层（`core/`, `ranging/`, `calibration/`）
- 对齐内容：调用链说明、参数来源、缓存来源、判定阈值来源。
- 验收：每条主流程说明“拿什么 -> 怎么算 -> 输出给谁”。

5. L4 协议/命令层（`cmd/`, `protocol/`, `public/`）
- 对齐内容：命令前置条件、失败码、关键日志字段。
- 验收：调试命令与业务命令的入口边界明确。

6. 配置/存储层（`config/`, `storage/`, `app/`, `user/`）
- 对齐内容：配置项影响路径、校准数据读写口径。
- 验收：改一处配置能追踪到受影响链路。

7. 第三方边界（`CMSIS/`, `lib/`, `usb/`, `boot_sdk/`, `RTE/`）
- 对齐内容：标注“第三方/移植层边界”，不做大面积源码注释改写。
- 验收：仅补边界文档与本地 wrapper 注释，不污染上游代码。

## 审计结果摘要

- 无文件头/模块头（按自动规则）：`211`
- 业务层直调底层驱动文件数：`6`
- 业务层直调底层调用命中数：`97`

## 业务层直调底层（优先收敛）

- `ranging/range_engine.c`（39）
- `cmd/cmd_debug_basic.c`（27）
- `calibration/cal_engine.c`（18）
- `core/measure_core.c`（7）
- `cmd/cmd_debug_capture.c`（4）
- `config/config.h`（2，宏层命中，归类为配置定义）

## 处理优先级

1. P0（先做）
- `ranging/range_engine.c`
- `cmd/cmd_debug_basic.c`
- `calibration/cal_engine.c`

2. P1（随后）
- `core/measure_core.c`
- `cmd/cmd_debug_capture.c`

3. P2（边界治理）
- `config/config.h`（宏注释口径）
- 第三方目录边界注释文档化（`CMSIS/lib/usb`）

## 本次已落地（先行）

- `drivers/drv_interface.h`
- `drivers/drv_manager.h`
- `hw_system/hw_system.h`
- `hw_system/hw_system.c`
- `project_docs/DRIVER_UNIFIED_ABSTRACTION_2026-03-31.md`

## 下一步执行建议

1. 先做 P0 三文件注释与入口收敛，不改行为。
2. 再做 P1 两文件，补调用链注释和“允许直调例外”说明。
3. 最后补第三方边界文档，避免把 211 个第三方文件纳入重写。
