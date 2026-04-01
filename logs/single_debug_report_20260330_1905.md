# 单发调试详细报告（2026-03-30 19:05）

## 1) 本轮固件改动（已核对）

### A. Bootloader 串口升级口径对齐
- 文件：`E:\相位\program\bootloader\bootloader\Core\Inc\config.h`
  - `BOOT_USE_USB` 注释掉，启用 `BOOT_USE_UART`
  - 固件元数据结构注释与字段说明对齐 APP 侧 `firmware_meta_t`
- 文件：`E:\相位\program\bootloader\bootloader\Core\Src\main.c`
  - 启动日志改为按编译开关打印：`USB CDC Ready` / `UART Ready`

### B. 单发 BA/AC 长链路看门狗补丁
- 文件：`E:\相位\program\green\core\measure_core.c`
  - 在 `measure_phase_test_impl` shot 循环内补 `fwdgt_counter_reload()`
  - 在 `measure_phase_test_path_current_session` 循环内补 `fwdgt_counter_reload()`
  - 当前可见关键行：1540、1618（另有其他原有喂狗点如 829）

## 2) 自检与激光开关结果（COM3@115200）

### 2.1 激光与自检命令（最新实测）
- 日志：`E:\相位\progress\project-management\logs\single_laser_selfcheck_latest.json`
- 结果：
  - `F7` PASS
  - `F0` PASS（回包 `AA FE F0 ...`）
  - `F6` PASS（回包 `AA FE F6 ...`）
  - `AD` PASS
  - `AE` PASS
  - `E6` PASS（回包 `AA FE E6 ...`）

### 2.2 命令链回归（同端口同波特率）
- 日志：`E:\相位\progress\project-management\logs\single_debug_check_retry_after_kill.json`
- 结果：`3/5`
  - PASS：`F7` / `FB` / `AC`
  - FAIL：`BA` / `A3`（窗口内无 `AA FE` 回包）

### 2.3 历史对比（隔离策略）
- 日志：`E:\相位\progress\project-management\logs\single_debug_check_20260330_1908_isolated.json`
- 结果：`F7/FB/BA/AC/A3` 全部 PASS（BA 回包存在）
- 结论：当前“顺序串测”与“隔离重启测”表现不一致，仍有会话/时序相关波动。

## 3) 现场阻塞与定位
- 19:03 前串口被占用，`COM3` 打开失败（拒绝访问）
- 发现占用进程：`serial_debug_backend.exe`（两个实例）
- 释放后可正常执行串口命令

## 4) 当前结论（不是全绿）
- 激光开关命令链 **当前可回包**（F0/F6/AD/AE）
- 自检命令 `E6` **当前可回包**
- 但 BA/A3 在顺序压测下仍会失效，闭环状态为：**部分恢复，未彻底稳定**

## 5) 下一步闭环动作（按现场顺序）
1. 自检模块加载：重复 `E6` + 上电日志记录（3轮）
2. 驱动检查：固定会话前置动作，检查 BA/A3 前后 `HW START/STOP` 状态
3. 信号链：抓 BA 失败时前后 2s 原始串口流，确认是否复位或卡在会话
4. AC/命令链：区分“隔离验证”与“顺序验证”两条标准，分别判定通过条件

## 6) 台账同步
- 已写入：`E:\相位\progress\project-management\data\runs.json`
  - `laser-switch-selfcheck` = pass
  - `f7-fb-ba-ac-a3-regression-retry` = fail
