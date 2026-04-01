# 项目调试自动总结

- 更新时间: 2026-03-31 13:33:37
- 记录总数: 54
- 失败次数: 10

## 项目概览

- Unified 平台单发调试 | 最近状态: pass | 最近阶段: single-vbr-coeff-a3-outer-check | 更新时间: 2026-03-31 13:33:37
- Bootloader 管理 | 最近状态: info | 最近阶段: docs-linked | 更新时间: 2026-03-30 15:03:50
- 单发参考工程核对 | 最近状态: info | 最近阶段: alignment-baseline | 更新时间: 2026-03-30 14:52:17

## 最近问题

- [green-unified-single] A3外光路存在偶发单点掉幅（建议按3次中位值判定并继续联调硬件链路） (2026-03-31 13:33:37)
- [green-unified-single] 命令已生效但信号链未起量，需查APD/ADC会话或激光模拟链 (2026-03-30 20:08:10)
- [green-unified-single] 仅协议层通过，需继续确认物理光功率变化 (2026-03-30 20:07:20)
- [green-unified-single] build.py返回码仍会误报失败，但日志为0 error (2026-03-30 20:06:30)
- [green-unified-single] 会话/时序问题仍存在（与引脚映射无直接冲突） (2026-03-30 19:57:10)
- [green-unified-single] 无编译错误，后续需继续处理BA/A3顺序链路波动 (2026-03-30 19:56:00)
- [green-unified-single] build.py当前会误判非0退出码（日志显示0 error）；后续可单独修复脚本判定逻辑 (2026-03-30 19:09:40)
- [green-unified-single] 顺序串测会受会话状态影响，建议关键命令按隔离流程验证 (2026-03-30 19:09:26)
- [green-unified-single] 早前测试受串口占用影响（serial_debug_backend占用COM3） (2026-03-30 19:04:25)
- [green-unified-single] 链路时序/会话状态相关问题仍在，需按隔离重启策略确认BA/A3稳定性 (2026-03-30 19:03:10)
- [green-unified-single] 当前板端仍未进入可响应串口升级协议状态（大概率仍是旧boot/未重启到新boot态） (2026-03-30 18:39:35)
- [green-unified-single] 需将最新boot hex下发到板卡后，串口升级链路才会生效 (2026-03-30 18:39:20)
- [green-unified-single] ST-LINK仅识别到探针，未识别目标MCU（供电/接线/复位/SWD信号链需排查） (2026-03-30 18:23:04)
- [green-unified-single] 通信链路未建立。结合工程配置可确认APP走USART0(PA9/PA10,115200)，优先排查线序/地线/上电与是否进入APP。 (2026-03-30 18:20:53)
- [green-unified-single] 工程当前为UART模式(MODE_WITH_BOOT=1, USART0 PA9/PA10)。需确认实际接线口、设备上电与是否进入APP态 (2026-03-30 18:18:05)

## 最近进展

- [green-unified-single] 单发口径对齐完成：F4按外路VBR+系数收敛；回归F7/FB/A3/AC/A3/BA=6/6通过；A3外光路峰值中位值均>2100（存在偶发单点掉幅） (single-vbr-coeff-a3-outer-check / pass)
- [green-unified-single] 同路径低/高功率切换后，FB中的S1-QS仍为outer_adc=0 inner_adc=0，未观察到采样量变化 (power-effect-probe / fail)
- [green-unified-single] F7/F0/AD/AE/F6命令回包全部通过，AD/AE状态切换可见(state=1/2) (laser-control-regression-after-dac / pass)
- [green-unified-single] 单发功率控制改为副本5语义：USE_DAC_POWER在BOARD_GD303_SINGLE_MAIN下强制启用，LD_PW走PA4 DAC (single-dac-power-align-copy5 / pass)
- [green-unified-single] 升级后激光与自检通过：F7/F0/F6/E6均回包正常 (post-align-laser-selfcheck / pass)
- [green-unified-single] 升级后顺序命令链回归3/5：F7/FB/AC通过，BA/A3仍无AA FE回包 (post-align-regression / fail)
- [green-unified-single] 已完成单发引脚显式对齐与驱动兼容映射：single_main固定PA0/PB1/PA11/PB0/PB2，并补旧宏别名 (single-pin-driver-align / pass)
- [green-unified-single] 驱动链验证通过：APP重新编译产物更新并完成串口升级，握手与命令链可闭环 (driver-health-check / pass)
- [green-unified-single] 隔离回归通过：F7/FB/AC/A3/BA均收到AA FE标准回包（BA/A3按重启后隔离方式验证） (f7-fb-ba-ac-regression / pass)
- [green-unified-single] 已修复BA链路看门狗复位：在measure_phase_test循环路径补fwdgt_counter_reload，BA从复位失败变为稳定回包 (ba-watchdog-fix / pass)
