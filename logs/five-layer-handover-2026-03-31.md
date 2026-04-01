# 五层覆盖交接单（2026-03-31）

## 交接结论

- 按 L0 -> L5 顺序完成了注释契约覆盖。
- 当前剩余“入口收敛”项为 `0`（已通过例外标记归档）。
- 第三方目录按约束仅做边界管理，不改核心逻辑。

## 最新评估

见：
- `logs/layer-evaluation-per-file-2026-03-31-after-pass4.md`

关键统计：

- L0: 24/24 已覆盖
- L1: 25/25 已覆盖
- L2: 2/2 已覆盖
- L3: 17 已覆盖 + 5 已覆盖(例外)
- L4: 18 已覆盖 + 6 已覆盖(例外)
- L5: 15/15 已覆盖
- 3P: 120 文件第三方边界

## 例外口径（已标注 DIRECT_CALL_EXCEPTION_OK）

- 诊断/调试命令允许少量直调观测接口：
  - `cmd/cmd_debug_basic.c`
  - `cmd/cmd_debug_capture.c`
  - `cmd/cmd_debug_phase_vbr.c`
  - `cmd/cmd_debug_shared.c`
  - `cmd/cmd_laser.c`
  - `cmd/cmd_ranging.c`
- 核心内核允许少量直调观测接口：
  - `core/apd_manager.c`
  - `core/measure_session.h`
  - `core/measure_core.c`
  - `calibration/cal_engine.c`
  - `ranging/range_engine.c`

说明：以上例外均已在文件头部/契约区写明“仅诊断或内核闭环用途，不作为业务入口”。

## 你接管后建议顺序

1. 先用 `layer-evaluation-per-file-2026-03-31-after-pass4.md` 做基线。
2. 如要继续“硬收敛”例外，先从 `cmd_debug_basic.c` 与 `range_engine.c` 下手。
3. 每改一批跑一次 `E6 -> 驱动 -> A3 -> AC -> A3 -> BA` 与 `F4 -> F1 -> FB` 回归。
