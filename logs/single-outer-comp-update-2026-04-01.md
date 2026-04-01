# 单发外光路补偿对齐更新（2026-04-01）

## 目标
- 单发运行态补偿改为仅外光路参与（inner 不参与补偿表）
- F4/VBR 元数据与系数口径对齐单发：outer-only

## 代码改动
1. `E:\相位\program\green\ranging\range_engine.c`
- `stage_apply_dual_temp_comp()` 新增单发分支：
  - 仅使用 `outer_vbr` 与 `outer` 补偿量
  - 相位更新为：`outer_phase -= outer_comp`，`phase = outer - inner`
  - 单发日志新增 `mode=single` 标识

2. `E:\相位\program\green\calibration\cal_engine.c`
- `cal_stage_apd_work_capture_dual_vbr()`：
  - 单发仅采 outer VBR
  - `inner_vbr_code` 保持 0，`common_vbr` 跟随 outer

3. `E:\相位\program\green\cmd\cmd_calibration.c`
- `0xF4` 与 `0x01` 回读中，单发下 `inner_coeff_x10000` 固定为 0
- `outer_coeff_x10000` 按 `work_apd/outer_vbr` 计算

## 编译结果
- 工程：`E:\相位\program\green\GreenLaser_Unified.uvprojx`
- 结果：`0 Error(s), 6 Warning(s)`（无新增错误）
- 日志：`E:\相位\program\green\output\GreenLaser_Unified.build_log.htm`

## 下一步验证
1. 执行 `F4`，确认日志：
   - `inner_ref=0`
   - `outer_ref` 有效
2. 执行 `FB/A3`，确认 `S2-COMP` 日志出现 `mode=single`
3. 对比改动前后：
   - 外光路稳定度（A3）
   - FB距离离散度（30次标准差）
