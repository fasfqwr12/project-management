# 单发调试报告（2026-03-31）

## 本轮目标
- 单发口径对齐为：外路 VBR + 系数（apdwork）用于工作 APD。
- 复核 A3 外光路是否“无信号”。

## 已完成改动
- `config/profile.h`（单发覆写）
  - `PROFILE_ENABLE_VBR_SCAN = 1`
  - `PROFILE_CAL_WORK_USE_VBR = 1`
  - `PROFILE_CAL_WORK_VBR_PATH = 1`（外路）
- `calibration/cal_engine.c`
  - F4 工作点计算在 VBR 模式下以 `vbr_code` 作为系数输入源。

## 编译与升级
- 编译：`single_build_20260331_single_vbr_coeff.log`（0 error）
- 串口升级：COM3@115200，hex 升级通过（erase/write/verify/reset 全部 OK）

## 回归结果
- `single_debug_check_20260331_after_single_vbr_coeff.json`
- 命令链：`F7 -> FB -> A3 -> AC -> A3 -> BA`
- 结果：6/6 通过

## A3 外光路检查（阈值 2100）
- 按 APD 扫描 + 多次重复检查外光路峰值（abs peak）。
- 结论：
  - 主体样本均 > 2100，外光路并非持续“无信号”。
  - 存在偶发单点掉幅（例如个别样本约 249），建议使用“3次中位值”判定。

## 结论
- 单发“VBR + 系数”链路已接入并回归通过。
- 当前剩余风险主要是外光路偶发掉点，需在后续硬件/采样链路联调中继续观察。
