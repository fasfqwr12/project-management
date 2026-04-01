# 校准链验证记录（F4 -> F1(5000mm) -> FB）
更新时间：2026-04-01

## 环境
- 串口：`COM3 @ 115200`
- 固件：当日已通过串口 HEX 升级（见 `compile-download-verify-2026-04-01.md`）

## 1) F4（APD工作点）
- TX：
  - `AA EE F4 00 00 00 00 F4 BB FF`
- RX：
  - `AA FE F4 00 03 40 00 B7 BB FF`
- 关键日志：
  - `[CAL] F4 scan ... vbr=974 ... pick_apd=832 ...`
  - `[CAL] F4 apd_work ... best=832 ... outer_ref=976 ...`
  - `[CAL-KV] save ok ...`
  - `[F4] work_apd=832 ... outer_coeff=8525 ...`
- 结论：
  - `F4 PASS`，工作点已产出并落盘。

## 2) F1（5000mm 相位校准）
- TX：
  - `AA EE F1 00 00 13 88 6A BB FF`
- RX：
  - `AA FE F1 02 00 00 00 F3 BB FF`
- 关键日志：
  - `[CAL] F1 start std=5.000m ...`
  - `[CAL] F1 apd refine done apd=832 ...`
  - `[CAL] F1 weak mode=0 fi=0 out_amp=50 in_amp=16000 ... th=500`
- 结论：
  - `F1 FAIL`，状态码 `0x02`（`CAL_ERR_SIGNAL_WEAK`），触发点为 LL 模式 `fi=0` 外路幅值不足。

## 3) FB（测距验证）
- TX：
  - `AA EE FB 01 00 00 00 FA BB FF`
- RX 前缀：
  - `AA FE FB 39 ...`
- 关键日志：
  - `[S1] ... final_apd=833 ...`
  - `[S3] raw=13.318 ...`
  - `[S4] final=13.313 ...`
  - `[FB] st=0 dist_mm=13313 ... apd=833 ...`
- 结论：
  - `FB PASS`，当前链路可测距；本次结果约 `13.313m`。

## 总结
- 当前状态：`F4 通过 / F1(5000) 失败(弱信号) / FB 通过`。
- 下一步建议：按你们流程先处理 F1 的弱信号判定（fi=0 外路门限与功率/光路策略），再重复 `F1(5000) -> FB` 闭环。
