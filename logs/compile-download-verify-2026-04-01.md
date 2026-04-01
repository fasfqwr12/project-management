# 编译下载验证记录
更新时间：2026-04-01

## 1) 编译（APP）
- 命令：
  - `python D:/GreenLaser-Organized/debug-tool/keil-cli/build.py --kind app --log E:/相位/progress/project-management/logs/build_app_20260401_verify.log`
- 结果：
  - `0 error(s), 0 warning(s)`（通过）

## 2) 下载（串口升级，COM3@115200）
- Probe：
  - `python .../upgrade_serial.py --port COM3 --baud 115200 --probe-only`
  - 结果：`[link] handshake role=app magic=0xAA55AA55`

- ENC 升级尝试：
  - 文件：`E:\相位\program\green\output\GreenLaser_Unified.enc`
  - 结果：失败，原因 `不支持的ENC版本: 2`

- HEX 回退升级（按策略）：
  - 文件：`E:\相位\program\green\output\GreenLaser_Unified.hex`
  - 关键结果：
    - APP -> BOOT 重握手成功
    - erase/write/verify/reset 全通过
    - 写入大小：`72224` bytes
    - CRC：`0xCE63CF3E`

## 3) 验证
- 自动化链路（single_debug_check）：
  - 命令：
    - `python .../single_debug_check.py --port COM3 --baud 115200 --json E:/相位/progress/project-management/logs/single_debug_check_20260401.json`
  - 结果：`6/6 pass`
  - 覆盖命令：`F7, FB, A3, AC, A3, BA`

- E6 自检门禁补验（手动帧）：
  - TX：`AA EE E6 00 00 00 00 E6 BB FF`
  - RX 帧：`AA FE E6 00 00 00 00 E6 BB FF`
  - 运行日志：
    - `[E6] err=0x00000000 ... apd_set=889 ... inner_max=2280 outer_max=2071 ...`
  - 结论：`E6 gate = pass`

## 结论
- 本次固件已完成：`编译通过 + 串口升级成功 + 关键命令验证通过（含E6）`。
