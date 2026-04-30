# 项目调试自动总结

- 更新时间: 2026-04-30 17:19:00
- 记录总数: 349
- 失败次数: 44

## 项目概览

- Unified 平台单发调试 | 最近状态: pass | 最近阶段: f4-f1-fb-keepoff-verify | 更新时间: 2026-04-08 13:34:15
- 双发参考工程核对 | 最近状态: info | 最近阶段: alignment-baseline | 更新时间: 2026-03-30 14:52:17
- Bootloader 管理 | 最近状态: info | 最近阶段: docs-linked | 更新时间: 2026-03-30 15:03:50
- 仓库维护巡检 | 最近状态: info | 最近阶段: daily-repo-maintenance | 更新时间: 2026-04-30 17:19:00
- project-management | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- project-archives | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- html-debug | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- sim_tool | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- serial_web_upper_desktop | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- phaseplatform | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- laser_factory_platform | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- green_updater | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- medical_review_platform | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- code-map-workbench | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- unified-tool | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- J2N4C-150L | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- bootloader | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- green-lcd-5key | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00
- skills | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-30 17:19:00

## 最近问题

- [green-unified-single] ST-LINK仅识别到探针，未识别目标MCU（供电/接线/复位/SWD信号链需排查） (2026-03-30 18:23:04)
- [green-unified-single] 通信链路未建立。结合工程配置可确认APP走USART0(PA9/PA10,115200)，优先排查线序/地线/上电与是否进入APP。 (2026-03-30 18:20:53)
- [green-unified-single] 工程当前为UART模式(MODE_WITH_BOOT=1, USART0 PA9/PA10)。需确认实际接线口、设备上电与是否进入APP态 (2026-03-30 18:18:05)
- [single-ref-project] command exit code: 2 (2026-03-30 13:58:28)
- [repo-maintenance] project-management: ahead 1, dirty 216 (2026-04-30 17:19:00)
- [repo-maintenance] laser_factory_platform: ahead 1 (2026-04-30 17:19:00)
- [repo-maintenance] medical_review_platform: ahead 2, dirty 15 (2026-04-30 17:19:00)
- [repo-project-management] project-management: ahead 1, dirty 216 (2026-04-30 17:19:00)
- [repo-laser_factory_platform] laser_factory_platform: ahead 1 (2026-04-30 17:19:00)
- [repo-medical_review_platform] medical_review_platform: ahead 2, dirty 15 (2026-04-30 17:19:00)
- [repo-j2n4c-150l] J2N4C-150L: ahead 2, dirty 23 (2026-04-30 17:19:00)
- [repo-bootloader] bootloader: ahead 1, dirty 6 (2026-04-30 17:19:00)
- [repo-green-lcd-5key] green-lcd-5key: ahead 1, dirty 17 (2026-04-30 17:19:00)
- [repo-skills] skills: git-only 1, runtime-drift 24 (2026-04-30 17:19:00)

## 最近进展

- [repo-maintenance] 2026-04-30 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 0 (daily-repo-maintenance / info)
- [repo-skills] 2026-04-30 skills：分支 main，最近提交 33904c3a feat: sync local codex skills (repo-daily-scan / info)
- [repo-green-lcd-5key] 2026-04-30 green-lcd-5key：分支 master，最近提交 771814f1 feat: add DAC and calibration command routes (repo-daily-scan / info)
- [repo-bootloader] 2026-04-30 bootloader：分支 master，最近提交 afc3a923 feat: update UART boot validation flow (repo-daily-scan / info)
- [repo-j2n4c-150l] 2026-04-30 J2N4C-150L：分支 master，最近提交 e411ffbf build: fix J2N4C-150L scatter file path (repo-daily-scan / info)
- [repo-unified-tool] 2026-04-30 unified-tool：分支 master，最近提交 7a12ed52 Initial import (repo-daily-scan / pass)
- [repo-code-map-workbench] 2026-04-30 code-map-workbench：分支 master，最近提交 5e561780 Initial import (repo-daily-scan / pass)
- [repo-medical_review_platform] 2026-04-30 medical_review_platform：分支 master，最近提交 d779c2c7 feat: add AE/CM linkage check (repo-daily-scan / info)
- [repo-green_updater] 2026-04-30 green_updater：分支 master，最近提交 9e7fb092 Initial import (repo-daily-scan / pass)
- [repo-laser_factory_platform] 2026-04-30 laser_factory_platform：分支 master，最近提交 c1485c1d feat: add device trace workflow (repo-daily-scan / info)
- [repo-phaseplatform] 2026-04-30 phaseplatform：分支 master，最近提交 c476f17a Initial import: phaseplatform (repo-daily-scan / pass)
- [repo-serial_web_upper_desktop] 2026-04-30 serial_web_upper_desktop：分支 master，最近提交 ed864968 Initial import: serial_web_upper_desktop (repo-daily-scan / pass)
- [repo-sim_tool] 2026-04-30 sim_tool：分支 master，最近提交 44e95617 Initial import: sim_tool (repo-daily-scan / pass)
- [repo-html-debug] 2026-04-30 html-debug：分支 master，最近提交 d3a35732 Initial import: html-debug (repo-daily-scan / pass)
- [repo-project-archives] 2026-04-30 project-archives：分支 master，最近提交 a842d25f Archive complete packaged runtimes for 2026-04 (repo-daily-scan / pass)
- [repo-project-management] 2026-04-30 project-management：分支 main，最近提交 33921e9f feat: add repo maintenance tracking projects (repo-daily-scan / info)
- [repo-maintenance] 2026-04-30 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 0 (daily-repo-maintenance / info)
- [repo-skills] 2026-04-30 skills：分支 main，最近提交 33904c3a feat: sync local codex skills (repo-daily-scan / info)
- [repo-green-lcd-5key] 2026-04-30 green-lcd-5key：分支 master，最近提交 771814f1 feat: add DAC and calibration command routes (repo-daily-scan / info)
- [repo-bootloader] 2026-04-30 bootloader：分支 master，最近提交 afc3a923 feat: update UART boot validation flow (repo-daily-scan / info)
