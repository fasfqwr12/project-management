# 昨天版本重编并复测
更新时间：2026-04-01

## 编译
- 工程：`E:\相位\program\firmware\green\GreenLaser_Unified.uvprojx`
- 命令：
  - `python D:/GreenLaser-Organized/debug-tool/keil-cli/build.py --kind app --project E:/相位/program/firmware/green/GreenLaser_Unified.uvprojx --rebuild --log E:/相位/progress/project-management/logs/build_yesterday_rebuild_20260401.log`
- 结果：
  - `0 error(s), 8 warning(s)`

## 下载
- 文件：`E:\相位\program\firmware\green\output\GreenLaser_Unified.hex`
- 串口升级结果：`erase/write/verify/reset` 全通过

## 复测（F4 -> F1(5000) -> FB）
- F4：
  - `AA FE F4 00 03 53 00 A4 BB FF`（通过）
- F1(5000)：
  - `AA FE F1 02 00 00 00 F3 BB FF`（失败）
  - 关键日志：`F1 weak mode=0 fi=0 out_amp=50 in_amp=16100 ... th=500`
- FB：
  - `AA FE FB 39 ...`（通过）
  - `dist_mm=5147, st=0`

## 结论
- 昨天版本重新编译后，当前现场复测结果与之前一致：`F1` 仍卡弱信号判定，`FB` 正常。
