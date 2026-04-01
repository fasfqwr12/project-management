# 单发 S1 流程与 5030 偏差分析（2026-03-31）

## 问题现象

- 校准链路：`F4 -> F1(5000mm)` 可通过 verify（接近 5000mm）。
- 运行测距：独立 `FB` 出现 `5030mm`（+30mm），并非可接受稳定值。

## 当前 S1 实际流程（运行态）

1. 计算功率模式（强制或默认 LL）。
2. 若满足 `skip_s1 + force_apd` 才跳过自动找 APD。
3. 否则执行：
   - 缓存探测（cache probe）。
   - 未命中则 `apd_manager_find_apd(...)` 自动搜索。
   - 快采评估（inner/outer ADC）。
   - 若外路偏弱可切高功率（weak fallback），并可能再次搜索 APD。
4. 最终将 `ctx->result.apd_voltage` 作为本次运行 APD。

## 为什么会出现 5000 vs 5030

- `F1 verify` 使用 `force_apd + skip_s1`，APD路径可控，结果贴近 5000。
- 独立 `FB` 走自动 `S1`，APD/功率可能被重选（例如 818 + HH），等效测距口径变化。
- 所以会出现校准值和运行值不一致。

## 修正方向（待实装）

- 让 `S1` 以 `F4` 结果作为主入口，而非每次重找：
  - `apd_base = runtime_vbr * coeff.apdwork`（或 `dual_vbr.work_apd_code` 兜底）。
  - 先用 `apd_base` 快采。
  - 仅在弱/饱和时做“小范围微调”，禁止从头大范围重扫。
- 目标：`F1 verify` 与 `FB runtime` 收敛到同一 APD口径，消除 +30mm 偏差。
