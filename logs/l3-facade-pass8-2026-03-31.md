# L3 Facade Pass8（2026-03-31）

## 目标
- 在不改变算法流程语义的前提下，继续收口 L3（`ranging/calibration`）中的底层观测/兜底关断直调。

## 本轮改动
- 新增 L3 统一入口：
  - `E:\相位\program\green\core\l3_hw_facade.h`
  - 封装：
    - `l3_hw_laser_get_state()`
    - `l3_hw_laser_get_power()`
    - `l3_hw_laser_off_only()`
    - `l3_hw_adc_get_apd_voltage_stats()`
- 替换调用点：
  - `E:\相位\program\green\ranging\range_engine.c`
    - `laser_get_state/get_power/laser_off_only` -> `l3_hw_*`
    - 更新模块注释为 `L3_HW_FACADE_NOTE`
  - `E:\相位\program\green\calibration\cal_engine.c`
    - `drv_adc_get_apd_voltage_stats` -> `l3_hw_adc_get_apd_voltage_stats`
    - 更新模块注释为 `L3_HW_FACADE_NOTE`

## 自动守门
- 新增脚本：`E:\相位\program\green\tools\check-l3-facade.ps1`
- 规则：扫描 `ranging/calibration` 中是否出现上述底层直调关键字；出现即 FAIL。
- 当前执行结果：`PASS`

## 编译回归
- 日志：`E:\相位\progress\project-management\logs\build_app_20260331_l3_facade_step2.log`
- 结果：`0 error(s), 0 warning(s)`

## 结论
- L3 当前形成了“算法流程 + 统一硬件观测入口”的结构。
- 与之前 cmd 层的 `debug_hw_facade/debug_obs_facade` 形成上下层一致的收口策略。
