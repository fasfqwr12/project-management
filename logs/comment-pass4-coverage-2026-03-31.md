# 注释覆盖推进（2026-03-31）

## 当前整体情况
- 文件头/层级契约覆盖：99.17%（120/121，唯一缺失为加密态 legacy 文件）。
- 函数级近邻注释审计平均值：62.9%（较上一轮 61.3% 提升）。

## 本轮改动
- `calibration/cal_engine.c`：补充 mode/APD/VBR/HV/映射相关函数注释。
- `drivers/chips/si5351/si5351.c`：补充 bit-bang I2C 与 fast-write 判定函数注释。
- `drivers/drv_pll.c`：补充接口转发与公共 API 函数注释。

## 编译验证
- `build_app_20260331_comment_pass5.log`
- 结果：0 error(s), 0 warning(s)

## 下一步（按你要求先注释覆盖）
1. `storage/cal_data.c`
2. `hal/hal_adc.c`
3. `drivers/drv_apd.c` + `drivers/drv_optical_switch.c`
4. `drivers/drv_laser.c` / `drivers/drv_dac.c`（再补函数级）
