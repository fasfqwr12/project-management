# Repo Push Queue - 2026-05-13

## 流程

1. 先看 `★ 待确认提交`。
2. 以每个仓库下面的“改了什么 / 目的”为准判断是否提交。
3. 标记为 `确认提交` / `继续开发` / `先 pull`。
4. 再逐仓执行 `git commit` 和 `git push`。

- 待确认提交仓库数: `6`
- 需先 pull 仓库数: `0`

## ★ 待确认提交

### ★ green-lcd-5key
- 改了什么：本次主要改动样本：build_log.txt, build_log.htm, build_log_text.txt。
- 目的：当前目的待人工确认。
- 当前建议：`评审后补提交并推送`
- 下一步：评审后决定是否提交推送。

### ★ medical_review_platform
- 改了什么：当前未提交改动集中在 `app.py`、`repository.py`、`static/app.js`、`static/index.html`、`static/style.css` 和 `scripts/refine_bat_rules_pass3.py`：后端新增报告模板绑定/报告运行记录/对齐记忆/EDC 提交接口，前端补了“报告”页和版本差异对照工作台，并继续推进 BAT 规则整理脚本。
- 目的：把医学审核平台从“版本与规则查看”扩到“报告生成追踪 + EDC 自动提交流程”，支撑 BAT 项目后续监察产物输出和提交闭环。
- 当前建议：`评审后补提交并推送`
- 下一步：评审后决定是否提交推送。

### ★ bootloader
- 改了什么：最近待推送提交 `afc3a923 feat: update UART boot validation flow` 主要改了 `Core/Src/bootloader.c`、`Core/Inc/config.h`、`Core/Inc/bootloader.h` 和 `.gitignore`，把启动校验切到 UART 元数据链路；当前工作区另混入 `Objects/*.axf`、`Objects/*.hex`、`JLinkLog.txt` 和 `.uvoptx`。
- 目的：让 bootloader 在跳转 APP 前按 `firmware_meta_t` 做 size/CRC 校验，并把构建产物默认排除在正式提交边界外。
- 当前建议：`评审后提交推送`
- 下一步：评审后决定是否提交推送。

### ★ J2N4C-150L
- 改了什么：最近两条待推送源码变更以 `bdd0cbc feat: refactor optical path and lcd flow` 和 `e411ffb build: fix J2N4C-150L scatter file path` 为主，涉及 `driver/lcd/control.c`、`driver/lcd/lcd.c`、`driver/key/key.c`、`user/singal_process/singnal_process.c` 与 `project/gd103.uvprojx`；当前工作区另外混入 `project/output/*`、`project/JLinkLog.txt`、`.uvoptx` 和 workspace 文件。
- 目的：把 150L 工程切到新的光路/显示/按键链路并修正 scatter 路径，保证后续编译、烧录和单双发测距联调能继续沿同一口径推进。
- 当前建议：`评审后提交推送`
- 下一步：评审后决定是否提交推送。

### ★ project-management
- 改了什么：本次同时刷新 `projects/repo-maintenance/reports/*`、`data/projects.json`、`data/runs.json`、`summary.md`，并联动调整 `assets/index.js`、`assets/project-shell.js`、`assets/pm.css`、`docs/index.html` / `index.html` 的入口与展示逻辑。
- 目的：把正式维护仓的日巡检结果按仓库回写进项目跟踪，并把“日报 / 同步建议 / 待确认提交队列”变成前端可直达的固定入口。
- 当前建议：`评审后提交推送`
- 下一步：评审后决定是否提交推送。

### ★ unified-tool
- 改了什么：本次主要改动样本：无。
- 目的：当前目的待人工确认。
- 当前建议：`建议直接推送`
- 下一步：评审后决定是否提交推送。


## 先 Pull

- 无
