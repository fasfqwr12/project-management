# Repo Sync Review - 2026-04-29

- 工作区: `E:\phase1`
- 巡检仓库数: `15`
- ★ 评审后可推: `6`
- 需先同步远端: `1`
- 需先修 fetch: `0`
- 无需推送: `8`

## ★ 待评审推送仓库

- ★ `bootloader`
- ★ `green-lcd-5key`
- ★ `J2N4C-150L`
- ★ `laser_factory_platform`
- ★ `medical_review_platform`
- ★ `project-management`

## 建议清单

### skills
- 建议：`先 pull 再评审`
- 原因：落后 30 提交，且本地还有改动/待推送内容
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：先 pull 再评审
- 下一步：先拉齐远端，再决定如何拆分本地提交。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：behind 30, dirty 8
- 最近提交：`3a4b348d` 2026-03-30 18:09:27 chore: sync local codex skills
- 改动样本：
  - ` M README.md`
  - `?? green-c-code-guardrails/`
  - `?? greenlaser-firmware-debug/scripts/`
  - `?? j2n4c-150l-firmware/`
  - `?? laser-rangefinder-analysis/`
  - `?? lcd-porting-bridge/`
  - `?? medical-review-workbench/`
  - `?? ui-competitor-guardrails/`

### ★ bootloader
- 建议：`★ 评审后提交推送`
- 原因：本地改动 11 条；样本里含疑似构建/产物文件
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 11
- 最近提交：`86ae6a2e` 2025-12-22 17:44:04 初次提交
- 改动样本：
  - ` M .gitignore`
  - ` M Core/Inc/bootloader.h`
  - ` M Core/Inc/config.h`
  - ` M Core/Src/bootloader.c`
  - ` M Core/Src/main.c`
  - ` M GD32_Bootloader.uvguix.Administrator`
  - ` M GD32_Bootloader.uvoptx`
  - ` M JLinkLog.txt`

### ★ green-lcd-5key
- 建议：`★ 评审后提交推送`
- 原因：本地改动 2 条
- 记忆：状态未变化，沿用 2026-04-29 17:36:14 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 2
- 最近提交：`58f22762` 2026-04-29 10:16:07 Initial import
- 改动样本：
  - ` M cmd/cmd_calibration.c`
  - ` M cmd/cmd_router.c`

### ★ J2N4C-150L
- 建议：`★ 评审后提交推送`
- 原因：本地改动 41 条
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 41
- 最近提交：`7fb752d7` 2026-02-02 12:25:52 初次提交
- 改动样本：
  - ` M .gitignore`
  - ` M config/board.h`
  - ` M config/config.h`
  - ` M driver/gpio/gpio_init.c`
  - ` M driver/gpio/gpio_init.h`
  - ` M driver/key/exti.c`
  - ` M driver/key/key.c`
  - ` M driver/lcd/control.c`

### ★ laser_factory_platform
- 建议：`★ 评审后提交推送`
- 原因：本地改动 13 条
- 记忆：状态未变化，沿用 2026-04-29 17:36:14 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 13
- 最近提交：`6ca6edce` 2026-04-29 10:50:12 Initial import: laser_factory_platform
- 改动样本：
  - ` M app/api/routes.py`
  - ` M app/services/device_handle.py`
  - ` M app/services/selftest_recommendation.py`
  - ` M app/services/workflow_service.py`
  - ` M app/static/app.js`
  - ` M app/static/common.js`
  - ` M app/static/index.html`
  - ` M app/static/styles.css`

### ★ medical_review_platform
- 建议：`★ 评审后提交推送`
- 原因：本地改动 7 条
- 记忆：状态未变化，沿用 2026-04-29 17:36:14 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 7
- 最近提交：`8eaabcb6` 2026-04-29 10:41:09 Initial import
- 改动样本：
  - ` M repository.py`
  - ` M static/app.js`
  - ` M static/index.html`
  - ` M static/style.css`
  - ` M tests/test_api.py`
  - `?? datasource/`
  - `?? scripts/check_review_ids.ps1`

### ★ project-management
- 建议：`★ 评审后提交推送`
- 原因：本地改动 210 条
- 记忆：状态未变化，沿用 2026-04-29 17:36:14 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：dirty 210
- 最近提交：`bec80c48` 2026-04-01 15:56:21 Initialize project management workspace
- 改动样本：
  - ` M assets/index.js`
  - ` M assets/pm.css`
  - ` M assets/project-shell.js`
  - ` M data/data.js`
  - ` M data/projects.json`
  - ` M data/runs.json`
  - ` M docs/index.html`
  - ` M docs/platform-alignment-log.md`

### code-map-workbench
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`5e561780` 2026-04-29 10:46:02 Initial import
- 改动样本：无

### green_updater
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`9e7fb092` 2026-04-29 10:41:09 Initial import
- 改动样本：无

### html-debug
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`d3a35732` 2026-04-29 10:50:14 Initial import: html-debug
- 改动样本：无

### phaseplatform
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`c476f17a` 2026-04-29 10:50:13 Initial import: phaseplatform
- 改动样本：无

### project-archives
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`a842d25f` 2026-04-29 11:26:36 Archive complete packaged runtimes for 2026-04
- 改动样本：无

### serial_web_upper_desktop
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`ed864968` 2026-04-29 10:50:13 Initial import: serial_web_upper_desktop
- 改动样本：无

### sim_tool
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`44e95617` 2026-04-29 10:50:14 Initial import: sim_tool
- 改动样本：无

### unified-tool
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 14:32:12 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`7a12ed52` 2026-04-29 10:35:58 Initial import
- 改动样本：无

