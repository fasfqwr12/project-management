# Green 分层逐文件评估（2026-03-31）

- 范围：E:/相位/program/green
- 文件：.c/.h 共 233

## 分层汇总

| 层级 | 文件数 | 已对齐 | 待收敛 | 待补注释 | 第三方边界 | 基础可用 |
|---|---:|---:|---:|---:|---:|---:|
| L0 | 24 | 0 | 0 | 17 | 0 | 7 |
| L1 | 25 | 2 | 0 | 22 | 0 | 1 |
| L2 | 2 | 2 | 0 | 0 | 0 | 0 |
| L3 | 22 | 0 | 3 | 17 | 0 | 2 |
| L4 | 24 | 0 | 2 | 22 | 0 | 0 |
| L5 | 15 | 0 | 1 | 12 | 0 | 2 |
| 3P | 120 | 0 | 0 | 0 | 120 | 0 |
| OTHER | 1 | 0 | 0 | 1 | 0 | 0 |

## L0 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| board/board_gd303_dual_rx_main.h | 173 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| board/board_gd303_dual_tx_archive.h | 185 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| board/board_gd303_dual_tx_main.h | 183 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| board/board_gd303_single_main.h | 157 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| board/board_hal_bridge.c | 53 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| board/board_hal_bridge.h | 22 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| board/board_types.h | 18 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| board/board.h | 146 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| drivers/chips/si5351/pllcig.h | 130 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| drivers/chips/si5351/si5351.c | 358 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| drivers/chips/si5351/si5351.h | 38 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_adc.c | 164 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_adc.h | 123 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_dac.c | 57 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_dac.h | 41 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_dma.c | 90 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_dma.h | 97 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_gpio.c | 38 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_gpio.h | 41 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_i2c.c | 133 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_i2c.h | 56 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_timer.c | 77 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_timer.h | 15 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| hal/hal_types.h | 37 | N | 0 | 待补注释 | 需补模块头/职责说明 |

## L1 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| drivers/drv_adc.c | 141 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_adc.h | 41 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_apd.c | 60 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_apd.h | 28 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_base.c | 31 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_base.h | 31 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_comm.c | 21 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_comm.h | 29 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_dac.c | 55 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_dac.h | 28 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_interface.h | 77 | Y | 0 | 已对齐 | 已完成统一抽象注释与契约说明 |
| drivers/drv_laser.c | 521 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| drivers/drv_laser.h | 50 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_manager.c | 40 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_manager.h | 66 | Y | 0 | 已对齐 | 已完成统一抽象注释与契约说明 |
| drivers/drv_optical_switch.c | 56 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_optical_switch.h | 31 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_pll.c | 61 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_pll.h | 49 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_uart.c | 47 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_uart.h | 19 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_usb_cdc.c | 50 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_usb_cdc.h | 47 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/drv_usb_hw.c | 6 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| drivers/systick.h | 12 | N | 0 | 待补注释 | 需补模块头/职责说明 |

## L2 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| hw_system/hw_system.c | 888 | Y | 0 | 已对齐 | 已完成统一抽象注释与契约说明 |
| hw_system/hw_system.h | 282 | Y | 0 | 已对齐 | 已完成统一抽象注释与契约说明 |

## L3 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| calibration/cal_engine.c | 1165 | Y | 18 | 待收敛 | 存在业务层直调底层(18)，需按单入口口径收敛 |
| calibration/cal_engine.h | 33 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/apd_manager.c | 2026 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| core/apd_manager.h | 108 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/measure_core.c | 2719 | Y | 7 | 待收敛 | 存在业务层直调底层(7)，需按单入口口径收敛 |
| core/measure_core.h | 160 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/measure_example.c | 27 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/measure_session.h | 353 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| core/signal_proc.c | 164 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/signal_proc.h | 72 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| core/vbr_runtime.h | 20 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/measure_config.h | 59 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_cache.c | 69 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_cache.h | 34 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_config.c | 56 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_config.h | 64 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_engine.c | 2919 | Y | 39 | 待收敛 | 存在业务层直调底层(39)，需按单入口口径收敛 |
| ranging/range_engine.h | 102 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_quality.c | 54 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_quality.h | 49 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_stable.c | 64 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| ranging/range_stable.h | 43 | N | 0 | 待补注释 | 需补模块头/职责说明 |

## L4 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| cmd/cmd_calibration.c | 100 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_calibration.h | 6 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_debug_basic.c | 457 | Y | 27 | 待收敛 | 存在业务层直调底层(27)，需按单入口口径收敛 |
| cmd/cmd_debug_capture.c | 292 | Y | 4 | 待收敛 | 存在业务层直调底层(4)，需按单入口口径收敛 |
| cmd/cmd_debug_phase_vbr.c | 298 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_debug_shared.c | 20 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_debug_shared.h | 16 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_debug.c | 6 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_debug.h | 38 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_ids.h | 23 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_laser.c | 74 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_laser.h | 3 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_ranging.c | 138 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_ranging.h | 25 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_router.c | 34 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_router.h | 9 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_system.c | 30 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| cmd/cmd_system.h | 4 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| protocol/frame.c | 89 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| protocol/frame.h | 42 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| protocol/protocol_adapter.h | 21 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| public/interrupt/gd32f30x_it.c | 20 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| public/system_delay/systick.c | 25 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| public/system_delay/systick.h | 9 | N | 0 | 待补注释 | 需补模块头/职责说明 |

## L5 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| app/app_init.c | 42 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| app/app_init.h | 5 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| config/config.h | 202 | Y | 2 | 待收敛 | 存在业务层直调底层(2)，需按单入口口径收敛 |
| config/profile_strategy.h | 587 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| config/profile.h | 499 | Y | 0 | 基础可用 | 有文件头，建议补细化调用链注释 |
| config/usbd_conf.h | 24 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| config/usbd_hw.h | 4 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/cal_data.c | 180 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/cal_data.h | 87 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/flash_hal.c | 53 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/flash_hal.h | 17 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/kv_store.c | 139 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| storage/kv_store.h | 53 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| user/firmware_meta_def.c | 26 | N | 0 | 待补注释 | 需补模块头/职责说明 |
| user/main.c | 26 | N | 0 | 待补注释 | 需补模块头/职责说明 |

## 3P 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| boot_sdk/app_upgrade/firmware_info.c | 19 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/app_upgrade/firmware_info.h | 17 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/app_upgrade/upgrade_service.c | 76 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/app_upgrade/upgrade_service.h | 10 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/shared/firmware_meta.h | 25 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/shared/flash_layout.h | 33 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/shared/upgrade_protocol_def.h | 30 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| boot_sdk/templates/product_config_template.h | 33 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_common_tables_1.h | 49 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_common_tables.h | 54 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_const_structs_1.h | 28 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_const_structs.h | 34 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_math_1.h | 2093 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/arm_math.h | 1722 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cm0.h | 207 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cm0plus.h | 338 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cm3.h | 596 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cm4.h | 809 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cm7.h | 732 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cmFunc.h | 144 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cmInstr.h | 191 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_cmSimd.h | 176 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_sc000.h | 298 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/core_sc300.h | 806 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/gd32f30x_libopt.h | 11 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/gd32f30x.h | 181 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/RTE_Components.h | 13 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/system_gd32f30x.c | 289 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| CMSIS/system_gd32f30x.h | 28 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_adc.h | 322 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_bkp.h | 97 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_can.h | 355 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_crc.h | 26 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_ctc.h | 90 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_dac.h | 157 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_dbg.h | 94 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_dma.h | 124 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_enet.h | 1338 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_exmc.h | 272 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_exti.h | 163 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_fmc.h | 169 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_fwdgt.h | 36 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_gpio.h | 437 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_i2c.h | 173 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_misc.h | 31 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_pmu.h | 80 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_rcu.h | 504 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_rtc.h | 58 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_sdio.h | 258 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_spi.h | 163 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_timer.h | 453 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_usart.h | 180 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Include/gd32f30x_wwdgt.h | 38 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_adc.c | 245 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_bkp.c | 97 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_can.c | 296 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_crc.c | 39 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_ctc.c | 103 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_dac.c | 113 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_dbg.c | 33 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_dma.c | 228 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_enet.c | 1158 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_exmc.c | 261 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_exti.c | 58 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_fmc.c | 237 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_fwdgt.c | 39 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_gpio.c | 162 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_i2c.c | 203 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_misc.c | 49 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_pmu.c | 93 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_rcu.c | 477 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_rtc.c | 72 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_sdio.c | 244 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_spi.c | 257 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_timer.c | 683 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_usart.c | 213 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| lib/Source/gd32f30x_wwdgt.c | 49 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| RTE/_GreenLaser_Unified/RTE_Components.h | 7 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/audio/Include/audio_core.h | 109 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/audio/Include/audio_out_itf.h | 24 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/audio/Source/audio_core.c | 172 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/audio/Source/audio_out_itf.c | 50 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/cdc/Include/cdc_acm_core.h | 56 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/cdc/Source/cdc_acm_core.c | 114 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/dfu/Include/dfu_core.h | 42 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/dfu/Include/dfu_mem.h | 29 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/dfu/Source/dfu_core.c | 197 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/dfu/Source/dfu_mem.c | 60 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Include/custom_hid_core.h | 17 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Include/standard_hid_core.h | 23 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Include/std_hid_mouse_core.h | 21 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Include/usb_hid.h | 45 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Source/custom_hid_core.c | 141 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Source/standard_hid_core.c | 118 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/hid/Source/std_hid_mouse_core.c | 107 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/iap/Include/usb_iap_core.h | 26 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/iap/Source/usb_iap_core.c | 171 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Include/usbd_msc_bbb.h | 28 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Include/usbd_msc_core.h | 31 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Include/usbd_msc_mem.h | 20 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Include/usbd_msc_scsi.h | 46 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Source/usbd_msc_bbb.c | 75 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Source/usbd_msc_core.c | 72 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/msc/Source/usbd_msc_scsi.c | 203 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/printer/Include/printer_core.h | 25 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/class/device/printer/Source/printer_core.c | 84 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Include/usb_ch9_std.h | 95 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Include/usbd_core.h | 95 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Include/usbd_enum.h | 34 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Include/usbd_pwr.h | 31 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Include/usbd_transc.h | 58 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Source/usbd_core.c | 30 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Source/usbd_enum.c | 165 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Source/usbd_pwr.c | 22 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/device/Source/usbd_transc.c | 42 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/usbd/Include/usbd_lld_core.h | 28 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/usbd/Include/usbd_lld_int.h | 20 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/usbd/Include/usbd_lld_regs.h | 97 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/usbd/Source/usbd_lld_core.c | 147 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |
| usb/usbd/Source/usbd_lld_int.c | 67 | N | 0 | 第三方边界 | 外部/移植层，仅做边界注释，不改核心逻辑 |

## OTHER 逐文件

| 文件 | 行数 | 文件头 | 直调命中 | 状态 | 说明 |
|---|---:|:---:|---:|---|---|
| legacy/driver_algorithm/algorithm.c | 136 | N | 0 | 待补注释 | 需补模块头/职责说明 |

