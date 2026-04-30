# Repo Sync Review - 2026-04-30

- 工作区: `E:\phase1`
- 巡检仓库数: `15`
- ★ 评审后可推: `6`
- 需先同步远端: `0`
- 需先修 fetch: `0`
- 无需推送: `8`

## ★ 待评审推送仓库

- ★ `bootloader`
- ★ `green-lcd-5key`
- ★ `J2N4C-150L`
- ★ `medical_review_platform`
- ★ `project-management`
- ★ `laser_factory_platform`

## 建议清单

### skills
- 建议：`先同步运行目录`
- 原因：git 仓缺少运行目录对应项 1 项；同名文件内容不一致 24 项；样本：green-c-code-guardrails/SKILL.md，greenlaser-debug-automation/SKILL.md，README.md
- 记忆：状态未变化，沿用 2026-04-30 17:09:22 的结论：先同步运行目录
- 下一步：先把 C:\Users\Administrator\.codex\skills 的变更同步回 skills-cloud，再评审提交。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：git-only 1, runtime-drift 24
- 最近提交：`33904c3a` 2026-04-29 19:16:16 feat: sync local codex skills
- 改动样本：无

### ★ bootloader
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 6 条，且已有 1 条待推送；样本里含疑似构建/产物文件
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：评审后补提交并推送
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1, dirty 6
- 最近提交：`afc3a923` 2026-04-29 18:21:37 feat: update UART boot validation flow
- 改动样本：
  - ` M GD32_Bootloader.uvguix.Administrator`
  - ` M GD32_Bootloader.uvoptx`
  - ` M JLinkLog.txt`
  - ` M Objects/GD32_Bootloader.axf`
  - ` M Objects/GD32_Bootloader.hex`
  - ` M build_log.txt`

### ★ green-lcd-5key
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 17 条，且已有 1 条待推送
- 记忆：状态未变化，沿用 2026-04-30 17:09:22 的结论：评审后补提交并推送
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1, dirty 17
- 最近提交：`771814f1` 2026-04-29 18:21:37 feat: add DAC and calibration command routes
- 改动样本：
  - ` M PROJECT_TRACKER.md`
  - ` M app/app_init.c`
  - ` M board/board_gd303_lcd_single.h`
  - ` M build_log.txt`
  - ` M cmd/cmd_debug_shared.c`
  - ` M drivers/key/drv_key.c`
  - ` M drivers/key/drv_key.h`
  - ` M drivers/lcd/algorithm.h`

### ★ J2N4C-150L
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 23 条，且已有 2 条待推送；样本里含疑似构建/产物文件
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：评审后补提交并推送
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 2, dirty 23
- 最近提交：`e411ffbf` 2026-04-29 18:26:48 build: fix J2N4C-150L scatter file path
- 改动样本：
  - ` M project/JLinkLog.txt`
  - ` M project/gd103.uvguix.Administrator`
  - ` M project/gd103.uvoptx`
  - ` M project/output/app_upgrade.crf`
  - ` M project/output/gd32f30x_adc.crf`
  - ` M project/output/gd32f30x_dma.crf`
  - ` M project/output/gd32f30x_exti.crf`
  - ` M project/output/gd32f30x_fmc.crf`

### ★ medical_review_platform
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 15 条，且已有 2 条待推送
- 记忆：发现新变化：ahead 2；dirty 15；样本文件  M app.py,  M repository.py,  M scripts/refine_bat_rules_pass3.py
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 2, dirty 15
- 最近提交：`d779c2c7` 2026-04-29 18:26:48 feat: add AE/CM linkage check
- 改动样本：
  - ` M app.py`
  - ` M repository.py`
  - ` M scripts/refine_bat_rules_pass3.py`
  - ` M static/app.js`
  - ` M static/index.html`
  - ` M static/style.css`
  - `?? bat_refined_pass3_output.json`
  - `?? docs/`

### ★ project-management
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 216 条，且已有 1 条待推送
- 记忆：发现新变化：ahead 1；dirty 216；样本文件  M assets/index.js,  M assets/pm.css,  M assets/project-shell.js
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：ahead 1, dirty 216
- 最近提交：`33921e9f` 2026-04-29 18:17:25 feat: add repo maintenance tracking projects
- 改动样本：
  - ` M assets/index.js`
  - ` M assets/pm.css`
  - ` M assets/project-shell.js`
  - ` M data/data.js`
  - ` M data/projects.json`
  - ` M data/runs.json`
  - ` M docs/index.html`
  - ` M docs/platform-alignment-log.md`

### ★ laser_factory_platform
- 建议：`★ 建议直接推送`
- 原因：本地领先远端 1 提交
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：建议直接推送
- 下一步：确认分支无误后可直接推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1
- 最近提交：`c1485c1d` 2026-04-29 18:21:37 feat: add device trace workflow
- 改动样本：无

### code-map-workbench
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`5e561780` 2026-04-29 10:46:02 Initial import
- 改动样本：无

### green_updater
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`9e7fb092` 2026-04-29 10:41:09 Initial import
- 改动样本：无

### html-debug
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`d3a35732` 2026-04-29 10:50:14 Initial import: html-debug
- 改动样本：无

### phaseplatform
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`c476f17a` 2026-04-29 10:50:13 Initial import: phaseplatform
- 改动样本：无

### project-archives
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`a842d25f` 2026-04-29 11:26:36 Archive complete packaged runtimes for 2026-04
- 改动样本：无

### serial_web_upper_desktop
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`ed864968` 2026-04-29 10:50:13 Initial import: serial_web_upper_desktop
- 改动样本：无

### sim_tool
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`44e95617` 2026-04-29 10:50:14 Initial import: sim_tool
- 改动样本：无

### unified-tool
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-04-29 18:34:46 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`7a12ed52` 2026-04-29 10:35:58 Initial import
- 改动样本：无

