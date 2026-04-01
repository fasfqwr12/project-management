# CMD Facade Guard Pass7（2026-03-31）

## 本轮新增
- 新增守门脚本：`E:\相位\program\green\tools\check-cmd-facade.ps1`
- 作用：扫描 `cmd/*.c, cmd/*.h`，拦截 PLL/APD/LASER/ADC/DAC/GPIO/DMA/Si5351 的底层直调，要求走 facade。
- 白名单：`debug_hw_facade.h`、`debug_obs_facade.h`（统一出口本身允许底层调用）。

## 执行结果
- 执行命令：
  - `powershell -ExecutionPolicy Bypass -File E:\相位\program\green\tools\check-cmd-facade.ps1 -Root E:\相位\program\green`
- 输出：`PASS: cmd layer direct-call guard clean`

## 编译回归
- 日志：`E:\相位\progress\project-management\logs\build_app_20260331_obs_facade_step2.log`
- 结果：`0 error(s), 0 warning(s)`

## 结论
- cmd 层“唯一入口”不仅完成结构收口，还增加了可自动化检查，后续改动可持续防回归。
