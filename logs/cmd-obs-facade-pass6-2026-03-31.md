# CMD Observation Facade Pass6（2026-03-31）

## 目标
- 继续落实 L4 唯一入口：把 cmd 层的 GPIO/DMA 观测类直调统一收口，避免命令实现散落寄存器接口。

## 本轮改动
- 新增观测 facade：
  - `E:\相位\program\green\cmd\debug_obs_facade.h`
  - 封装 `gpio_input_bit_get / dma_flag_get / dma_flag_clear`
- 替换调用点：
  - `E:\相位\program\green\cmd\cmd_debug_basic.c`
    - `gpio_input_bit_get(...)` -> `dbg_obs_gpio_input_bit(...)`
    - `dma_flag_clear(...)` -> `dbg_obs_dma_flag_clear(...)`
  - `E:\相位\program\green\cmd\cmd_debug_shared.c`
    - `dma_flag_get(...)` -> `dbg_obs_dma_flag_get(...)`

## 编译结果
- 日志：`E:\相位\progress\project-management\logs\build_app_20260331_obs_facade_step1.log`
- 结论：`0 error(s), 0 warning(s)`

## 扫描结果（cmd 目录）
- 原始 `gpio_input_bit_get/dma_flag_get/dma_flag_clear` 已不再出现在 `cmd/*.c` 业务实现中，仅保留在 `debug_obs_facade.h` 统一出口。

## 后续建议
- 对 `cmd` 层新增约束注释：硬件驱动类调用必须经 `debug_hw_facade`，寄存器观测类调用必须经 `debug_obs_facade`。
- 后续若新增 debug 命令，按该规则做 code review gate，避免回归为散点直调。
