# 项目调试自动总结

- 更新时间: 2026-04-29 18:01:05
- 记录总数: 269
- 失败次数: 44

## 项目概览

- Unified 平台单发调试 | 最近状态: pass | 最近阶段: f4-f1-fb-keepoff-verify | 更新时间: 2026-04-08 13:34:15
- 双发参考工程核对 | 最近状态: info | 最近阶段: alignment-baseline | 更新时间: 2026-03-30 14:52:17
- Bootloader 管理 | 最近状态: info | 最近阶段: docs-linked | 更新时间: 2026-03-30 15:03:50
- 仓库维护巡检 | 最近状态: info | 最近阶段: daily-repo-maintenance | 更新时间: 2026-04-29 18:01:05
- project-management | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- project-archives | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- html-debug | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- sim_tool | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- serial_web_upper_desktop | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- phaseplatform | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- laser_factory_platform | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- green_updater | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- medical_review_platform | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- code-map-workbench | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- unified-tool | 最近状态: pass | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- J2N4C-150L | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- bootloader | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- green-lcd-5key | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05
- skills | 最近状态: info | 最近阶段: repo-daily-scan | 更新时间: 2026-04-29 18:01:05

## 最近问题

- [green-unified-single] ST-LINK仅识别到探针，未识别目标MCU（供电/接线/复位/SWD信号链需排查） (2026-03-30 18:23:04)
- [green-unified-single] 通信链路未建立。结合工程配置可确认APP走USART0(PA9/PA10,115200)，优先排查线序/地线/上电与是否进入APP。 (2026-03-30 18:20:53)
- [green-unified-single] 工程当前为UART模式(MODE_WITH_BOOT=1, USART0 PA9/PA10)。需确认实际接线口、设备上电与是否进入APP态 (2026-03-30 18:18:05)
- [single-ref-project] command exit code: 2 (2026-03-30 13:58:28)
- [repo-maintenance] project-management: dirty 210 (2026-04-29 18:01:05)
- [repo-maintenance] laser_factory_platform: dirty 13 (2026-04-29 18:01:05)
- [repo-maintenance] medical_review_platform: dirty 7 (2026-04-29 18:01:05)
- [repo-project-management] project-management: dirty 210 (2026-04-29 18:01:05)
- [repo-laser_factory_platform] laser_factory_platform: dirty 13 (2026-04-29 18:01:05)
- [repo-medical_review_platform] medical_review_platform: dirty 7 (2026-04-29 18:01:05)
- [repo-j2n4c-150l] J2N4C-150L: dirty 41 (2026-04-29 18:01:05)
- [repo-bootloader] bootloader: dirty 11 (2026-04-29 18:01:05)
- [repo-green-lcd-5key] green-lcd-5key: dirty 2 (2026-04-29 18:01:05)
- [repo-skills] skills: behind 30, dirty 8 (2026-04-29 18:01:05)

## 最近进展

- [repo-maintenance] 2026-04-29 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 1 (daily-repo-maintenance / info)
- [repo-skills] 2026-04-29 skills：分支 main，最近提交 3a4b348d chore: sync local codex skills (repo-daily-scan / info)
- [repo-green-lcd-5key] 2026-04-29 green-lcd-5key：分支 master，最近提交 58f22762 Initial import (repo-daily-scan / info)
- [repo-bootloader] 2026-04-29 bootloader：分支 master，最近提交 86ae6a2e 初次提交 (repo-daily-scan / info)
- [repo-j2n4c-150l] 2026-04-29 J2N4C-150L：分支 master，最近提交 7fb752d7 初次提交 (repo-daily-scan / info)
- [repo-unified-tool] 2026-04-29 unified-tool：分支 master，最近提交 7a12ed52 Initial import (repo-daily-scan / pass)
- [repo-code-map-workbench] 2026-04-29 code-map-workbench：分支 master，最近提交 5e561780 Initial import (repo-daily-scan / pass)
- [repo-medical_review_platform] 2026-04-29 medical_review_platform：分支 master，最近提交 8eaabcb6 Initial import (repo-daily-scan / info)
- [repo-green_updater] 2026-04-29 green_updater：分支 master，最近提交 9e7fb092 Initial import (repo-daily-scan / pass)
- [repo-laser_factory_platform] 2026-04-29 laser_factory_platform：分支 master，最近提交 6ca6edce Initial import: laser_factory_platform (repo-daily-scan / info)
- [repo-phaseplatform] 2026-04-29 phaseplatform：分支 master，最近提交 c476f17a Initial import: phaseplatform (repo-daily-scan / pass)
- [repo-serial_web_upper_desktop] 2026-04-29 serial_web_upper_desktop：分支 master，最近提交 ed864968 Initial import: serial_web_upper_desktop (repo-daily-scan / pass)
- [repo-sim_tool] 2026-04-29 sim_tool：分支 master，最近提交 44e95617 Initial import: sim_tool (repo-daily-scan / pass)
- [repo-html-debug] 2026-04-29 html-debug：分支 master，最近提交 d3a35732 Initial import: html-debug (repo-daily-scan / pass)
- [repo-project-archives] 2026-04-29 project-archives：分支 master，最近提交 a842d25f Archive complete packaged runtimes for 2026-04 (repo-daily-scan / pass)
- [repo-project-management] 2026-04-29 project-management：分支 main，最近提交 bec80c48 Initialize project management workspace (repo-daily-scan / info)
- [repo-maintenance] 2026-04-29 巡检 15 仓：干净 8，需关注 7，fetch失败 0，待评审推送 6，先同步远端 1 (daily-repo-maintenance / info)
- [repo-skills] 2026-04-29 skills：分支 main，最近提交 3a4b348d chore: sync local codex skills (repo-daily-scan / info)
- [repo-green-lcd-5key] 2026-04-29 green-lcd-5key：分支 master，最近提交 58f22762 Initial import (repo-daily-scan / info)
- [repo-bootloader] 2026-04-29 bootloader：分支 master，最近提交 86ae6a2e 初次提交 (repo-daily-scan / info)
