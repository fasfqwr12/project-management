# Repo Sync Review - 2026-05-13

- 工作区: `E:\phase1`
- 巡检仓库数: `15`
- ★ 评审后可推: `6`
- 需先同步远端: `0`
- 需先修 fetch: `0`
- 无需推送: `8`

## ★ 待评审推送仓库

- ★ `green-lcd-5key`
- ★ `medical_review_platform`
- ★ `bootloader`
- ★ `J2N4C-150L`
- ★ `project-management`
- ★ `unified-tool`

## 建议清单

### skills
- 建议：`先同步运行目录`
- 原因：运行目录新增未回仓 1 项；git 仓缺少运行目录对应项 1 项；同名文件内容不一致 24 项；样本：keil-uvprojx-plaintext-edit/SKILL.md，green-c-code-guardrails/SKILL.md，greenlaser-debug-automation/SKILL.md，README.md
- 记忆：状态未变化，沿用 2026-05-13 20:02:17 的结论：先同步运行目录
- 下一步：先把 C:\Users\Administrator\.codex\skills 的变更同步回 skills-cloud，再评审提交。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：runtime-only 1, git-only 1, runtime-drift 24
- 最近提交：`33904c3a` 2026-04-29 19:16:16 feat: sync local codex skills
- 改动样本：无

### ★ green-lcd-5key
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 3 条，且已有 1 条待推送
- 记忆：发现新变化：ahead 1；dirty 3；样本文件  M build_log.txt, ?? build_log.htm, ?? build_log_text.txt
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1, dirty 3
- 最近提交：`4b9314bd` 2026-05-13 20:15:22 refactor: streamline range timing and apd flow
- 改动样本：
  - ` M build_log.txt`
  - `?? build_log.htm`
  - `?? build_log_text.txt`

### ★ medical_review_platform
- 建议：`★ 评审后补提交并推送`
- 原因：本地未提交 1 条，且已有 1 条待推送
- 记忆：发现新变化：ahead 1；dirty 1；样本文件 ?? (3
- 下一步：看完差异后补提交，再统一推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1, dirty 1
- 最近提交：`fa469bdc` 2026-05-13 20:14:06 docs: add operator guide and harden startup scripts
- 改动样本：
  - `?? (3`

### ★ bootloader
- 建议：`★ 评审后提交推送`
- 原因：本地改动 6 条；样本里含疑似构建/产物文件
- 记忆：状态未变化，沿用 2026-05-13 20:02:17 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 6
- 最近提交：`afc3a923` 2026-04-29 18:21:37 feat: update UART boot validation flow
- 改动样本：
  - ` M GD32_Bootloader.uvguix.Administrator`
  - ` M GD32_Bootloader.uvoptx`
  - ` M JLinkLog.txt`
  - ` M Objects/GD32_Bootloader.axf`
  - ` M Objects/GD32_Bootloader.hex`
  - ` M build_log.txt`

### ★ J2N4C-150L
- 建议：`★ 评审后提交推送`
- 原因：本地改动 23 条；样本里含疑似构建/产物文件
- 记忆：状态未变化，沿用 2026-05-13 20:02:17 的结论：评审后提交推送
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：dirty 23
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

### ★ project-management
- 建议：`★ 评审后提交推送`
- 原因：本地改动 201 条
- 记忆：发现新变化：dirty 201；样本文件  M data/data.js,  M data/projects.json,  M data/repo_scan_cache.json
- 下一步：评审差异，确认提交信息后再推送。
- 当前分支：`main` -> `origin/main`
- 巡检状态：`info` | 关注点：dirty 201
- 最近提交：`8e49006d` 2026-04-30 17:21:03 feat: refresh repo maintenance tracking
- 改动样本：
  - ` M data/data.js`
  - ` M data/projects.json`
  - ` M data/repo_scan_cache.json`
  - ` M data/runs.json`
  - ` M projects/repo-bootloader/data/project.json`
  - ` M projects/repo-code-map-workbench/data/project.json`
  - ` M projects/repo-green-lcd-5key/data/project.json`
  - ` M projects/repo-green_updater/data/project.json`

### ★ unified-tool
- 建议：`★ 建议直接推送`
- 原因：本地领先远端 1 提交
- 记忆：发现新变化：ahead 1
- 下一步：确认分支无误后可直接推送。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`info` | 关注点：ahead 1
- 最近提交：`8caa1f8c` 2026-05-13 20:14:46 feat: add weiying i2 debug workspace
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

### laser_factory_platform
- 建议：`无需推送`
- 原因：当前本地与远端一致
- 记忆：状态未变化，沿用 2026-05-13 20:02:17 的结论：无需推送
- 下一步：保持观察即可。
- 当前分支：`master` -> `origin/master`
- 巡检状态：`pass` | 关注点：-
- 最近提交：`c1485c1d` 2026-04-29 18:21:37 feat: add device trace workflow
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

