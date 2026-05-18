# 项目调试自动总结

- 更新时间: 2026-05-17 17:10:38
- 记录总数: 390
- 失败次数: 44

## 项目概览

- Unified 平台单发调试 | 最近状态: pass | 最近阶段: f4-f1-fb-keepoff-verify | 更新时间: 2026-04-08 13:34:15
- 双发参考工程核对 | 最近状态: info | 最近阶段: alignment-baseline | 更新时间: 2026-03-30 14:52:17
- Bootloader 管理 | 最近状态: info | 最近阶段: docs-linked | 更新时间: 2026-03-30 15:03:50
- 仓库维护巡检 | 最近状态: info | 最近阶段: pm-weekly-summary | 更新时间: 2026-05-17 17:10:38
- project-management | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- project-archives | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- html-debug | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- sim_tool | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- serial_web_upper_desktop | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- phaseplatform | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- laser_factory_platform | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- green_updater | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- medical_review_platform | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- code-map-workbench | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- unified-tool | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- J2N4C-150L | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- bootloader | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- green-lcd-5key | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12
- skills | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-05-13 20:17:12

## 最近问题

- [green-unified-single] ST-LINK仅识别到探针，未识别目标MCU（供电/接线/复位/SWD信号链需排查） (2026-03-30 18:23:04)
- [green-unified-single] 通信链路未建立。结合工程配置可确认APP走USART0(PA9/PA10,115200)，优先排查线序/地线/上电与是否进入APP。 (2026-03-30 18:20:53)
- [green-unified-single] 工程当前为UART模式(MODE_WITH_BOOT=1, USART0 PA9/PA10)。需确认实际接线口、设备上电与是否进入APP态 (2026-03-30 18:18:05)
- [single-ref-project] command exit code: 2 (2026-03-30 13:58:28)
- [repo-maintenance] 待确认提交 6 仓；构建产物待筛：bootloader、J2N4C-150L；skills 需先同步运行目录 (2026-05-17 17:10:38)
- [repo-project-management] project-management: dirty 201 (2026-05-13 20:17:12)
- [repo-medical_review_platform] medical_review_platform: ahead 1, dirty 1 (2026-05-13 20:17:12)
- [repo-unified-tool] unified-tool: ahead 1 (2026-05-13 20:17:12)
- [repo-j2n4c-150l] J2N4C-150L: dirty 23 (2026-05-13 20:17:12)
- [repo-bootloader] bootloader: dirty 6 (2026-05-13 20:17:12)
- [repo-green-lcd-5key] green-lcd-5key: ahead 1, dirty 3 (2026-05-13 20:17:12)
- [repo-skills] skills: runtime-only 1, git-only 1, runtime-drift 24 (2026-05-13 20:17:12)

## 最近进展

- [repo-maintenance] 2026-W20 项目跟踪周报已生成：重点推进 6 项，待确认提交 6 仓 (pm-weekly-summary / info)
- [repo-maintenance] 2026-05-14 周报跳过：本周后面仍有工作日，尚未到周报触发日；预计触发日 2026-05-15 (pm-weekly-summary-skip / info)
- [repo-maintenance] 2026-05-13 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 0 (daily-repo-maintenance / info)
- [repo-skills] 2026-05-13 skills：分支 main，最近提交 33904c3a feat: sync local codex skills (repo-daily-scan / info)
- [repo-green-lcd-5key] 2026-05-13 green-lcd-5key：分支 master，最近提交 4b9314bd refactor: streamline range timing and apd flow (repo-daily-scan / info)
- [repo-bootloader] 2026-05-13 bootloader：分支 master，最近提交 afc3a923 feat: update UART boot validation flow (repo-daily-scan / info)
- [repo-j2n4c-150l] 2026-05-13 J2N4C-150L：分支 master，最近提交 e411ffbf build: fix J2N4C-150L scatter file path (repo-daily-scan / info)
- [repo-unified-tool] 2026-05-13 unified-tool：分支 master，最近提交 8caa1f8c feat: add weiying i2 debug workspace (repo-daily-scan / info)
- [repo-code-map-workbench] 2026-05-13 code-map-workbench：分支 master，最近提交 5e561780 Initial import (repo-daily-scan / pass)
- [repo-medical_review_platform] 2026-05-13 medical_review_platform：分支 master，最近提交 fa469bdc docs: add operator guide and harden startup scripts (repo-daily-scan / info)
- [repo-green_updater] 2026-05-13 green_updater：分支 master，最近提交 9e7fb092 Initial import (repo-daily-scan / pass)
- [repo-laser_factory_platform] 2026-05-13 laser_factory_platform：分支 master，最近提交 c1485c1d feat: add device trace workflow (repo-daily-scan / pass)
- [repo-phaseplatform] 2026-05-13 phaseplatform：分支 master，最近提交 c476f17a Initial import: phaseplatform (repo-daily-scan / pass)
- [repo-serial_web_upper_desktop] 2026-05-13 serial_web_upper_desktop：分支 master，最近提交 ed864968 Initial import: serial_web_upper_desktop (repo-daily-scan / pass)
- [repo-sim_tool] 2026-05-13 sim_tool：分支 master，最近提交 44e95617 Initial import: sim_tool (repo-daily-scan / pass)
- [repo-html-debug] 2026-05-13 html-debug：分支 master，最近提交 d3a35732 Initial import: html-debug (repo-daily-scan / pass)
- [repo-project-archives] 2026-05-13 project-archives：分支 master，最近提交 a842d25f Archive complete packaged runtimes for 2026-04 (repo-daily-scan / pass)
- [repo-project-management] 2026-05-13 project-management：分支 main，最近提交 8e49006d feat: refresh repo maintenance tracking (repo-daily-scan / info)
- [repo-maintenance] 2026-05-13 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 0 (daily-repo-maintenance / info)
- [repo-skills] 2026-05-13 skills：分支 main，最近提交 33904c3a feat: sync local codex skills (repo-daily-scan / info)
