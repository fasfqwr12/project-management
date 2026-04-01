window.PM_BOOTSTRAP = {
  projects: [
    {
      id: "green-unified-single",
      name: "Unified 平台单发调试",
      path: "E:\\相位\\program\\green",
      intro: "统一平台主工程，当前用于单发能力接入与兼容调试。",
      related_paths: [
        "E:\\相位\\program\\green",
        "E:\\相位\\program\\gd303_refactor 双发 - 副本 (5)\\gd303_refactor 双发 - 副本 (5)",
        "E:\\相位\\debug-script"
      ],
      related_docs: [
        {
          path: "projects/green-unified-single/docs/index.html",
          title: "单页总台账（可搜索/分章节）",
          intro: "一个页面查看全部内容：任务总览、三原理差异、单发引脚状态、流程边界与执行清单。"
        }
      ],
      last_stage: "content-aligned-first",
      last_status: "info",
      last_summary: "已按“已确认/待确认”对齐内容口径：双发双收已确认，单发待实机回归后再写完成项",
      last_problem: "",
      last_updated: "2026-03-30 16:31:25",
      run_count: 10,
      fail_count: 0,
      open_problems: []
    },
    {
      id: "single-ref-project",
      name: "单发参考工程核对",
      path: "E:\\相位\\program\\gd303_refactor 双发 - 副本 (5)\\gd303_refactor 双发 - 副本 (5)",
      intro: "历史参考工程，用于对照引脚、配置和行为口径。",
      related_paths: [
        "E:\\相位\\program\\gd303_refactor 双发 - 副本 (5)\\gd303_refactor 双发 - 副本 (5)",
        "E:\\相位\\program\\green"
      ],
      related_docs: [
        {
          path: "projects/single-ref-project/docs/alignment-baseline.html",
          title: "统一平台对齐台账",
          intro: "记录该参考工程与 unified 的对齐基线。"
        },
        {
          path: "projects/single-ref-project/docs/principle-diff.html",
          title: "三原理差异速览",
          intro: "用于核对当前工程口径属于哪种原理语义。"
        }
      ],
      last_stage: "pipeline-end",
      last_status: "pass",
      last_summary: "pipeline completed",
      last_problem: "",
      last_updated: "2026-03-30 14:32:45",
      run_count: 7,
      fail_count: 1,
      open_problems: [
        { timestamp: "2026-03-30 13:58:28", text: "command exit code: 2" }
      ]
    },
    {
      id: "bootloader-core",
      name: "Bootloader 管理",
      path: "E:\\相位\\program\\bootloader",
      intro: "Bootloader 协议、升级入口与应用握手管理项目。",
      related_paths: [
        "E:\\相位\\program\\bootloader",
        "E:\\相位\\program\\green\\boot_sdk"
      ],
      related_docs: [
        {
          path: "projects/bootloader-core/docs/overview.html",
          title: "Bootloader 项目介绍",
          intro: "介绍 Bootloader 项目目标、范围和跟踪建议。"
        },
        {
          path: "projects/bootloader-core/docs/alignment-link.html",
          title: "统一平台对齐台账",
          intro: "记录与主平台关联的对齐项。"
        }
      ],
      last_stage: "project-created",
      last_status: "info",
      last_summary: "已建立 bootloader 项目索引与介绍",
      last_problem: "",
      last_updated: "2026-03-30 14:44:00",
      run_count: 1,
      fail_count: 0,
      open_problems: []
    }
  ],
  runs: [
    {
      timestamp: "2026-03-30 16:31:25",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "content-aligned-first",
      status: "info",
      summary: "台账改为已确认/待确认口径：双发双收已确认，单发待实机回归后再写完成项",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\progress\\project-management\\projects\\green-unified-single\\docs"
    },
    {
      timestamp: "2026-03-30 16:13:20",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "process-unified",
      status: "info",
      summary: "已统一文件管理分层、原理切换先后顺序与调试先后顺序，进入可执行闭环",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\progress\\project-management\\projects\\green-unified-single\\docs"
    },
    {
      timestamp: "2026-03-30 16:12:40",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "single-target-switched",
      status: "info",
      summary: "已新增单发board并切换默认编译身份到BOARD_GD303_SINGLE_MAIN，进入单发回归调试",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\program\\green"
    },
    {
      timestamp: "2026-03-30 16:02:12",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "single-page-docs",
      status: "info",
      summary: "项目资料改为单页台账：分章节滚动+关键词搜索，旧分页面自动跳转到单页章节",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\progress\\project-management\\projects\\green-unified-single\\docs"
    },
    {
      timestamp: "2026-03-30 15:56:31",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "single-pin-gap-confirmed",
      status: "info",
      summary: "已更新三原理关键差异表；确认当前默认为双发归档target，单发引脚尚未完全对应",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\program\\green"
    },
    {
      timestamp: "2026-03-30 14:44:00",
      project: "bootloader-core",
      project_name: "Bootloader 管理",
      stage: "project-created",
      status: "info",
      summary: "建立项目索引：E:\\相位\\program\\bootloader；补充项目介绍与跟踪入口",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\program\\bootloader"
    },
    {
      timestamp: "2026-03-30 14:40:25",
      project: "green-unified-single",
      project_name: "Unified 平台单发调试",
      stage: "pm-filled",
      status: "info",
      summary: "已补齐项目管理总览与项目数据，支持离线兜底显示",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\program\\green"
    },
    {
      timestamp: "2026-03-30 14:32:45",
      project: "single-ref-project",
      project_name: "单发参考工程核对",
      stage: "pipeline-end",
      status: "pass",
      summary: "pipeline completed",
      problem: "",
      command: "",
      duration_ms: 0,
      cwd: "E:\\相位\\program\\gd303_refactor 双发 - 副本 (5)\\gd303_refactor 双发 - 副本 (5)"
    },
    {
      timestamp: "2026-03-30 13:58:28",
      project: "single-ref-project",
      project_name: "单发参考工程核对",
      stage: "layout-check",
      status: "fail",
      summary: "stage layout-check completed",
      problem: "command exit code: 2",
      command: "Get-ChildItem -Force project,config,tools",
      duration_ms: 115,
      cwd: "E:\\相位\\program\\gd303_refactor 双发 - 副本 (5)\\gd303_refactor 双发 - 副本 (5)"
    }
  ]
};
