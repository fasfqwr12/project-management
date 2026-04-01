# 注释与守门继续推进（2026-03-31）

## 1) 函数级注释补齐（本轮）
- `ranging/range_quality.c`：核心评分/一致性函数补齐注释。
- `drivers/drv_manager.c`：全部公共 API 补齐注释。
- `cmd/cmd_debug_capture.c`：A3/E9/AB/B9 入口注释补齐。
- `cmd/cmd_debug_phase_vbr.c`：B6/F9 helper 区补齐注释。

## 2) 构建结果
- `build_app_20260331_comment_pass3.log`
- 结果：`0 error(s), 2 warning(s)`（可构建成功）

## 3) 守门脚本修复
问题：中文路径 `E:\相位` 在子 PowerShell 调用时被编码成乱码路径。
修复：
- `tools/check-*.ps1` 默认 Root 改为空，运行时用 `$PSScriptRoot` 推导项目根目录。
- `tools/check-all-guards.ps1` 改为当前进程 `& script.ps1` 调用，不再起子进程。

复测：
- `tools/check-all-guards.ps1` 全 PASS（L1/L2/L3/CMD）。
