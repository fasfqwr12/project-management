# 仓库维护巡检

## 规则

- 每天 `17:00` 触发一次日报巡检。
- 只有工作日才真正执行。
- 法定节假日和普通周末跳过。
- 调休工作日照常执行。
- 每天轮询一次周报条件。
- 如果当天是“本周最后一个工作日”，则在 `17:05` 生成周报。
- 如果周五是节假日，则会在更早的最后一个工作日触发，例如周四。

## 当前维护仓库

- `project-management`
- `project-archives`
- `html-debug`
- `sim_tool`
- `serial_web_upper_desktop`
- `phaseplatform`
- `laser_factory_platform`
- `green_updater`
- `medical_review_platform`
- `code-map-workbench`
- `unified-tool`
- `J2N4C-150L`
- `bootloader`
- `green-lcd-5key`
- `skills`

## 输出位置

- 日报：`projects/repo-maintenance/reports/daily/`
- 同步建议：`projects/repo-maintenance/reports/review/`
- 待确认提交队列：`projects/repo-maintenance/reports/ready/`
- 周报：`projects/repo-maintenance/reports/weekly/`
- 总览数据：`data/projects.json` `data/runs.json`
