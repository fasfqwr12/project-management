# 昨天原版流程复测
更新时间：2026-04-01

## 固件来源
- 使用原版目录固件：
  - `E:\相位\program\firmware\green\output\GreenLaser_Unified.hex`

## 流程
- `F4 -> F1(5000mm) -> FB`

## 结果
- `F4` 通过：
  - 回包：`AA FE F4 00 03 57 00 A0 BB FF`
- `F1(5000)` 失败：
  - 回包：`AA FE F1 02 00 00 00 F3 BB FF`
  - 日志：`F1 weak mode=0 fi=0 out_amp=50 in_amp=16200 ... th=500`
- `FB` 通过：
  - 回包前缀：`AA FE FB 39 ...`
  - 日志：`dist_mm=5145 st=0`

## 结论
- 在当前现场环境下，昨天原版同样会在 `F1` 卡在弱信号判定，不是仅优化版才出现的问题。
