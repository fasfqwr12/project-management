# 单发 F4 系数运行态接入 + 波形页下拉修复（2026-03-31）

## 本次改动

- 固件 `apd_manager`：
  - 单发 `inner` APD 计算从“固定 `vbr*0.83`”改为“优先 `g_cal_data.coeff.apdwork`，无效再回落 profile(0.83)”。
  - 增加监控日志：`[APD] REQ inner-vbr ratio=... (cal_loaded=... coeff=... profile=...)`.
- 上位机 `waveform` 页：
  - 增加本地交互保护窗口（`waveUiDirtyUntil`），避免 `configUpdate` 在用户刚改下拉时立即覆盖。
  - 对 `wavePower/apdSource/waveApd` 交互增加本地脏标记，提升下拉可用性与稳定性。

## 关键验证

- 编译：`build.py --kind app` 成功。
- 串口升级：`COM3@115200` 升级 `GreenLaser_Unified.hex` 成功。
- 对照链路：`F4 -> F1(5000) -> FB(00/01)` 已实跑，报告：
  - `E:\相位\progress\project-management\logs\single_f4_f1_fb_compare_20260331_171602.md`
  - 原始日志：`...single_f4_f1_fb_compare_20260331_171602.log`

## 证据（运行态已用 F4 系数）

原始日志中出现：

- `[APD] REQ inner-vbr ratio=0.9073 (cal_loaded=1 coeff=0.9073 profile=0.8300) vbr=994 -> apd=901`

说明运行态 inner APD 已按 F4 系数（0.9073）计算，不再走固定 0.83 主路径。

