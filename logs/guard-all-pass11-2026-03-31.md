# Guard-All Pass11（2026-03-31）

## 本轮目标
- 提供一个可直接接管使用的“一键总检查”入口，把分层守门和编译回归串成单命令闭环。

## 新增脚本
- `E:\相位\program\green\tools\check-all-guards.ps1`

## 功能
- 依次执行：
  - `check-l1-contract.ps1`
  - `check-l2-entry.ps1`
  - `check-l3-facade.ps1`
  - `check-cmd-facade.ps1`
- 可选参数 `-WithBuild`：在守门通过后自动执行 APP 编译。
- 可选参数 `-BuildLog`：指定编译日志路径。

## 实跑验证
- 命令：
  - `powershell -ExecutionPolicy Bypass -File E:\相位\program\green\tools\check-all-guards.ps1 -Root E:\相位\program\green -WithBuild -BuildLog E:\相位\progress\project-management\logs\build_app_20260331_guard_all_step1.log`
- 结果：
  - L1/L2/L3/CMD 守门全部 PASS
  - APP 编译 `0 error(s), 0 warning(s)`

## 接管建议
- 后续每次合并前先跑 `check-all-guards.ps1 -WithBuild`，可快速验证“分层原则 + 可编译性”未被破坏。
