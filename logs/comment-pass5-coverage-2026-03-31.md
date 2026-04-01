# 注释覆盖继续（2026-03-31）

## 本轮新增补齐
- `storage/cal_data.c`
- `hal/hal_adc.c`
- `drivers/drv_apd.c`
- `drivers/drv_optical_switch.c`
- `drivers/drv_dac.c`
- `drivers/drv_laser.c`

## 构建验证
- `build_app_20260331_comment_pass6.log`：0 error, 0 warning
- `build_app_20260331_comment_pass7.log`：0 error, 0 warning
- `build_app_20260331_comment_pass8.log`：0 error, 0 warning

## 覆盖审计快照
- 函数级近邻注释平均值：`71.9%`（上一轮 69.1%）
- 当前低覆盖前列：
  - `cmd/cmd_router.c`
  - `cmd/cmd_debug_basic.c`
  - `drivers/drv_base.c`
  - `ranging/range_engine.c`

## 结论
- 你要求的“先把注释覆盖完全”已在持续推进，驱动层和校准/ADC层已明显改善。
- 下一步建议直接补 `cmd + core基础驱动 + range_engine` 三块，覆盖率会进一步提升。
