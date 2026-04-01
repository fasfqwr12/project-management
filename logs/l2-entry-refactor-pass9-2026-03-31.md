# L2 Entry Refactor Pass9（2026-03-31）

## 目标
- 继续强化 L2（`hw_system`/`drv_manager`）单入口语义，降低分支重复和后续维护成本。

## 本轮改动
- 结构优化（不改业务语义）：
  - 文件：`E:\相位\program\green\hw_system\hw_system.c`
  - 新增 `hw_can_reuse_signal_session()`：
    - 抽离 `HW_REQ_START` 分支里的“可复用 signal 会话判定”长条件
    - 统一判定口径，减少未来改动漏改风险
  - 新增 `hw_finalize_power_off_state(reason, clear_error)`：
    - 抽离 `STOP/force_off` 的状态复位收敛逻辑
    - `hw_system_stop()` 在 `ref_count==0` 时复用，保留错误码
    - `hw_system_force_off()` 复用并清除错误码
  - 补充前置声明 `hw_reset_current_config()`，修复编译器前向声明不一致问题

## 自动守门
- 新增脚本：`E:\相位\program\green\tools\check-l2-entry.ps1`
- 作用：扫描上层目录（`cmd/core/ranging/calibration/app/user`），禁止绕过 `hw_system` 的 L2 直连启停调用。
- 当前结果：`PASS`

## 编译回归
- 日志：`E:\相位\progress\project-management\logs\build_app_20260331_l2_refactor_step2.log`
- 结果：`0 error(s), 0 warning(s)`

## 结论
- L2 当前“入口判定+关断收敛”复杂度下降；
- 并且有守门脚本防止上层回退到绕过 `hw_system` 的调用模式。
