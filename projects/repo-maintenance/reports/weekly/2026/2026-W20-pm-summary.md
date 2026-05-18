# Project Management Weekly Summary - 2026-W20

- 统计周期: `2026-05-11 ~ 2026-05-17`
- 生成时间: `2026-05-17 17:10:38`
- 触发说明: `2026-05-16` 起进入非工作日，周报提前在 `2026-05-15` 生成
- 本周累计项目记录: `30`
- 本周有明确推进描述的项目: `7`
- 待确认提交仓库: `6` | 需先 pull: `0` | 直接推送候选: `1`

## 周结论

- 本周 `repo-maintenance` 已把日报、同步建议、待确认提交队列和周报统一回写到 `project-management`，形成周度闭环入口。
- 本周明确推进集中在 `project-management`, `green-lcd-5key`, `medical_review_platform`, `bootloader`, `J2N4C-150L`, `laser_factory_platform`。
- 当前工作重点是按项目描述完成 `6` 个待确认提交仓库的人工评审，而不是继续用纯 git 状态代替项目结论。

## 本周维护动作

- 改了什么：已刷新日报、同步建议和待确认提交队列三份正式入口。
- 支撑什么：把正式维护仓巡检结果回写到仓库级项目跟踪，作为后续评审和推送依据。
- 当前队列：今日待评审推送 6 仓，先同步远端 0 仓，无需推送 9 仓
- 待确认提交队列入口：`projects/repo-maintenance/reports/ready/2026-05-13-push-queue.md`

## 重点项目推进

### project-management
- 改了什么：本次同时刷新 `projects/repo-maintenance/reports/*`、`data/projects.json`、`data/runs.json`、`summary.md`，并联动调整 `assets/index.js`、`assets/project-shell.js`、`assets/pm.css`、`docs/index.html` / `index.html` 的入口与展示逻辑。
- 支撑什么：把正式维护仓的日巡检结果按仓库回写进项目跟踪，并把“日报 / 同步建议 / 待确认提交队列”变成前端可直达的固定入口。
- 当前建议：`评审后提交推送`；本地改动 201 条
### green-lcd-5key
- 改了什么：本次主要改动样本：build_log.txt, build_log.htm, build_log_text.txt。
- 支撑什么：当前目的待人工确认。
- 当前建议：`评审后补提交并推送`；本地未提交 3 条，且已有 1 条待推送
### medical_review_platform
- 改了什么：当前未提交改动集中在 `app.py`、`repository.py`、`static/app.js`、`static/index.html`、`static/style.css` 和 `scripts/refine_bat_rules_pass3.py`：后端新增报告模板绑定/报告运行记录/对齐记忆/EDC 提交接口，前端补了“报告”页和版本差异对照工作台，并继续推进 BAT 规则整理脚本。
- 支撑什么：把医学审核平台从“版本与规则查看”扩到“报告生成追踪 + EDC 自动提交流程”，支撑 BAT 项目后续监察产物输出和提交闭环。
- 当前建议：`评审后补提交并推送`；本地未提交 1 条，且已有 1 条待推送
### bootloader
- 改了什么：最近待推送提交 `afc3a923 feat: update UART boot validation flow` 主要改了 `Core/Src/bootloader.c`、`Core/Inc/config.h`、`Core/Inc/bootloader.h` 和 `.gitignore`，把启动校验切到 UART 元数据链路；当前工作区另混入 `Objects/*.axf`、`Objects/*.hex`、`JLinkLog.txt` 和 `.uvoptx`。
- 支撑什么：让 bootloader 在跳转 APP 前按 `firmware_meta_t` 做 size/CRC 校验，并把构建产物默认排除在正式提交边界外。
- 当前建议：`评审后提交推送`；本地改动 6 条；样本里含疑似构建/产物文件
### J2N4C-150L
- 改了什么：最近两条待推送源码变更以 `bdd0cbc feat: refactor optical path and lcd flow` 和 `e411ffb build: fix J2N4C-150L scatter file path` 为主，涉及 `driver/lcd/control.c`、`driver/lcd/lcd.c`、`driver/key/key.c`、`user/singal_process/singnal_process.c` 与 `project/gd103.uvprojx`；当前工作区另外混入 `project/output/*`、`project/JLinkLog.txt`、`.uvoptx` 和 workspace 文件。
- 支撑什么：把 150L 工程切到新的光路/显示/按键链路并修正 scatter 路径，保证后续编译、烧录和单双发测距联调能继续沿同一口径推进。
- 当前建议：`评审后提交推送`；本地改动 23 条；样本里含疑似构建/产物文件
### laser_factory_platform
- 改了什么：待推送提交 `c1485c1d` 新增 `app/storage/trace_repo.py`，扩展 `app/services/workflow_service.py` / `app/api/routes.py` 的设备追溯接口，并在 `app/static/tab5.js`、`common.js`、`index.html`、`styles.css` 补了追溯页和自检推荐高亮，连带更新 `data/factory.db`。
- 支撑什么：给工厂平台补设备追溯入口和自检定位能力。
- 当前建议：`无需推送`；当前本地与远端一致

## 待确认提交队列

- 队列来源：`projects/repo-maintenance/reports/ready/2026-05-13-push-queue.md`
- 待确认提交: `6` 仓；先 pull: `0` 仓。
- 需评审后补提交并推送：`green-lcd-5key`、`medical_review_platform`、`bootloader`、`J2N4C-150L`、`project-management`。
- 可直接推送候选：`unified-tool`。
- `green-lcd-5key`：本次主要改动样本：build_log.txt, build_log.htm, build_log_text.txt。
- `green-lcd-5key` 目的：当前目的待人工确认。
- `green-lcd-5key` 当前建议：`评审后补提交并推送`；本地未提交 3 条，且已有 1 条待推送
- `medical_review_platform`：当前未提交改动集中在 `app.py`、`repository.py`、`static/app.js`、`static/index.html`、`static/style.css` 和 `scripts/refine_bat_rules_pass3.py`：后端新增报告模板绑定/报告运行记录/对齐记忆/EDC 提交接口，前端补了“报告”页和版本差异对照工作台，并继续推进 BAT 规则整理脚本。
- `medical_review_platform` 目的：把医学审核平台从“版本与规则查看”扩到“报告生成追踪 + EDC 自动提交流程”，支撑 BAT 项目后续监察产物输出和提交闭环。
- `medical_review_platform` 当前建议：`评审后补提交并推送`；本地未提交 1 条，且已有 1 条待推送
- `bootloader`：最近待推送提交 `afc3a923 feat: update UART boot validation flow` 主要改了 `Core/Src/bootloader.c`、`Core/Inc/config.h`、`Core/Inc/bootloader.h` 和 `.gitignore`，把启动校验切到 UART 元数据链路；当前工作区另混入 `Objects/*.axf`、`Objects/*.hex`、`JLinkLog.txt` 和 `.uvoptx`。
- `bootloader` 目的：让 bootloader 在跳转 APP 前按 `firmware_meta_t` 做 size/CRC 校验，并把构建产物默认排除在正式提交边界外。
- `bootloader` 当前建议：`评审后提交推送`；本地改动 6 条；样本里含疑似构建/产物文件
- `J2N4C-150L`：最近两条待推送源码变更以 `bdd0cbc feat: refactor optical path and lcd flow` 和 `e411ffb build: fix J2N4C-150L scatter file path` 为主，涉及 `driver/lcd/control.c`、`driver/lcd/lcd.c`、`driver/key/key.c`、`user/singal_process/singnal_process.c` 与 `project/gd103.uvprojx`；当前工作区另外混入 `project/output/*`、`project/JLinkLog.txt`、`.uvoptx` 和 workspace 文件。
- `J2N4C-150L` 目的：把 150L 工程切到新的光路/显示/按键链路并修正 scatter 路径，保证后续编译、烧录和单双发测距联调能继续沿同一口径推进。
- `J2N4C-150L` 当前建议：`评审后提交推送`；本地改动 23 条；样本里含疑似构建/产物文件
- `project-management`：本次同时刷新 `projects/repo-maintenance/reports/*`、`data/projects.json`、`data/runs.json`、`summary.md`，并联动调整 `assets/index.js`、`assets/project-shell.js`、`assets/pm.css`、`docs/index.html` / `index.html` 的入口与展示逻辑。
- `project-management` 目的：把正式维护仓的日巡检结果按仓库回写进项目跟踪，并把“日报 / 同步建议 / 待确认提交队列”变成前端可直达的固定入口。
- `project-management` 当前建议：`评审后提交推送`；本地改动 201 条
- `unified-tool`：本次主要改动样本：无。
- `unified-tool` 目的：当前目的待人工确认。
- `unified-tool` 当前建议：`建议直接推送`；本地领先远端 1 提交

## 风险与下一步

- 待确认提交仓库仍需人工评审后补提交并推送：`green-lcd-5key`, `medical_review_platform`, `bootloader`, `J2N4C-150L`, `project-management`。
- `bootloader`, `J2N4C-150L` 当前样本含构建/产物文件，提交前需先筛掉生成物。
- `skills` 运行目录与 git 源仓未对齐，需先同步运行目录再决定是否提交。
