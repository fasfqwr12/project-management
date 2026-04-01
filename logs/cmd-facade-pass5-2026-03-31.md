# CMD Facade Pass5（2026-03-31）

## 本轮目标
- 继续推进 L4（cmd 层）硬件访问入口统一，减少 `cmd/*.c` 对底层驱动的直接依赖。

## 本轮改动
- 新增 facade 包装：
  - `E:\相位\program\green\cmd\debug_hw_facade.h`
  - 新增 `dbg_hw_adc_is_complete()`，封装 `drv_adc_is_complete()`
- 替换 cmd 层直调：
  - `E:\相位\program\green\cmd\cmd_debug_shared.c`
  - `drv_adc_is_complete()` -> `dbg_hw_adc_is_complete()`
- 去除遗留 Si5351 直调：
  - `E:\相位\program\green\cmd\cmd_debug_basic.c`
  - `si5351_readonebyte(0x00)` -> `dbg_hw_pll_read_status()`

## 编译验证
- 命令：`python D:/GreenLaser-Organized/debug-tool/keil-cli/build.py --kind app --log E:/相位/progress/project-management/logs/build_app_20260331_facade_step4.log`
- 结果：`0 error(s), 0 warning(s)`

## 现状结论
- `cmd_calibration.c` 当前仅使用 `apd_manager_*`（管理器层），不属于“底层硬件直调”，本轮不做 facade 化。
- cmd 层硬件直调入口进一步收敛，结构稳定且可编译。

## 下一步（建议）
- 把 `cmd_debug_basic.c` 内 GPIO/DMA 标志位读写整理为“debug_obs_facade”（观测类例外入口），并明确标记为 L4 调试观测白名单。
- 对 `cmd` 层做一次“硬件调用白名单扫描脚本”，防止后续回归引入新直调。
