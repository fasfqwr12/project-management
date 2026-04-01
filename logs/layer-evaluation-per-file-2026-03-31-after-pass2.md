# Green 分层逐文件评估（2026-03-31，Pass2）

| 层级 | 文件数 | 已覆盖 | 待收敛 | 待补注释 | 第三方边界 |
|---|---:|---:|---:|---:|---:|
| L0 | 24 | 24 | 0 | 0 | 0 |
| L1 | 25 | 25 | 0 | 0 | 0 |
| L2 | 2 | 2 | 0 | 0 | 0 |
| L3 | 22 | 16 | 6 | 0 | 0 |
| L4 | 24 | 16 | 8 | 0 | 0 |
| L5 | 15 | 14 | 1 | 0 | 0 |
| 3P | 120 | 0 | 0 | 0 | 120 |
| OTHER | 1 | 0 | 0 | 1 | 0 |

## 待收敛文件
- L3: calibration/cal_engine.c (direct=18)
- L3: core/apd_manager.h (direct=21)
- L3: core/measure_core.c (direct=7)
- L3: core/measure_core.h (direct=1)
- L3: core/vbr_runtime.h (direct=2)
- L3: ranging/range_engine.c (direct=39)
- L4: cmd/cmd_calibration.c (direct=6)
- L4: cmd/cmd_debug_basic.c (direct=27)
- L4: cmd/cmd_debug_capture.c (direct=4)
- L4: cmd/cmd_debug_phase_vbr.c (direct=13)
- L4: cmd/cmd_debug_shared.c (direct=1)
- L4: cmd/cmd_laser.c (direct=2)
- L4: cmd/cmd_ranging.c (direct=4)
- L4: public/interrupt/gd32f30x_it.c (direct=1)
- L5: config/config.h (direct=2)

