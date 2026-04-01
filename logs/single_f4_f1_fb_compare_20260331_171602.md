# 单发校准/FB 对照报告（2026-03-31 17:17:04）

- 串口: `COM3` @ `115200`
- 流程: `F4 -> F1(5000mm) -> FB(00) -> FB(01)`

## 核心对照

| 项目 | 校准链路 (F4/F1) | 运行链路 (FB) | 结论 |
|---|---|---|---|
| APD工作点 | F4 work_apd=900, bestapd=-- | FB final_apd=901 (pwr=HH) | 不一致 |
| F1 verify APD | force_apd=900, skip_s1=1 | FB start_apd=0, final_apd=901 | 口径漂移 |
| 校准距离 | std=5.000m, dist=5.000m, err=0.298mm | FB dist_mm=5002 (--m) | Δ=2 mm |

## 关键日志摘录

- F4: `[F4] work_apd=900`
- F1 verify cfg: `VERIFY cfg mode=0 force_apd=900 skip_s1=1`
- F1 verify dist: `VERIFY std=5.000m dist=5.000m err=0.298mm`
- FB S1 plan: `[S1] plan pwr=HH(1) search=inner start_apd=0 final_apd=901`
- FB result: `--`

## FB(00/01) 明细

| 命令 | cal标记 | pwr | start_apd | final_apd | dist_mm | dist_m |
|---|---:|---|---:|---:|---:|---:|
| FB(00) | 1 | HH | 0 | 901 | 5002 | -- |
| FB(01) | 1 | LL | 0 | 901 | 5001 | -- |
