function queryProject() {
  const params = new URLSearchParams(location.search);
  return params.get("project") || "green-unified-single";
}

function statusClass(status) {
  if (status === "pass") return "status-pass";
  if (status === "fail") return "status-fail";
  return "status-info";
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function linkifyText(str) {
  const text = escapeHtml(str || "");
  const pattern = /([A-Za-z]:\\[^\s<>"']+\.(?:log|txt|md|html|json))/g;
  return text.replace(pattern, (m) => {
    return `<a href="#" data-path="${m}" class="path-link">${m}</a>`;
  });
}

async function readJson(path) {
  try {
    const res = await fetch(`${path}?t=${Date.now()}`);
    if (!res.ok) throw new Error(`http ${res.status}`);
    return await res.json();
  } catch (err) {
    if (window.PM_BOOTSTRAP) {
      if (path.includes("projects")) return window.PM_BOOTSTRAP.projects || [];
      if (path.includes("runs")) return window.PM_BOOTSTRAP.runs || [];
    }
    throw err;
  }
}

async function render() {
  const projectId = queryProject();
  const [projects, runs] = await Promise.all([
    readJson("../../data/projects.json"),
    readJson("../../data/runs.json")
  ]);

  const project = projects.find((p) => p.id === projectId) || null;
  const projectRuns = runs.filter((r) => r.project === projectId).slice(0, 200);

  document.getElementById("syncTime").textContent = `最近刷新: ${new Date().toLocaleString("zh-CN", { hour12: false })}`;
  document.getElementById("title").textContent = project ? (project.name || project.id) : projectId;
  document.getElementById("projectPath").textContent = project?.path || "-";
  document.getElementById("projectIntro").textContent = project?.intro || "-";
  document.getElementById("lastStatus").textContent = project?.last_status || "-";
  document.getElementById("lastStatus").className = statusClass(project?.last_status || "info");
  document.getElementById("lastStage").textContent = project?.last_stage || "-";
  document.getElementById("failCount").textContent = String(project?.fail_count || 0);

  const problems = document.getElementById("problemList");
  problems.innerHTML = "";
  const pList = project?.open_problems || [];
  if (!pList.length) {
    problems.innerHTML = "<li>暂无未闭环问题</li>";
  } else {
    pList.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = `${p.text} (${p.timestamp})`;
      problems.appendChild(li);
    });
  }

  const rows = document.getElementById("runRows");
  rows.innerHTML = "";
  projectRuns.forEach((r) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.timestamp || ""}</td>
      <td>${r.stage || ""}</td>
      <td class="${statusClass(r.status)}">${r.status || ""}</td>
      <td>${linkifyText(r.summary || "")}</td>
      <td>${linkifyText(r.problem || "")}</td>
    `;
    rows.appendChild(tr);
  });

  const relatedPathList = document.getElementById("relatedPathList");
  relatedPathList.innerHTML = "";
  const relatedPaths = project?.related_paths || [];
  if (!relatedPaths.length) {
    relatedPathList.innerHTML = "<li>-</li>";
  } else {
    relatedPaths.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      relatedPathList.appendChild(li);
    });
  }

  const relatedDocList = document.getElementById("relatedDocList");
  relatedDocList.innerHTML = "";
  const relatedDocs = project?.related_docs || [];
  if (!relatedDocs.length) {
    relatedDocList.innerHTML = "<li>-</li>";
  } else {
    relatedDocs.forEach((d) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      if (typeof d === "string") {
        a.href = `../../${d}`;
        a.textContent = d;
        li.appendChild(a);
      } else {
        a.href = `../../${d.path || ""}`;
        a.textContent = d.title || d.path || "资料";
        li.appendChild(a);
        if (d.intro) {
          const intro = document.createElement("div");
          intro.style.color = "#5f7392";
          intro.style.fontSize = "12px";
          intro.textContent = d.intro;
          li.appendChild(intro);
        }
      }
      relatedDocList.appendChild(li);
    });
  }

  const stageGroups = document.getElementById("stageGroups");
  stageGroups.innerHTML = "";
  const grouped = {};
  projectRuns.forEach((r) => {
    const key = r.stage || "(none)";
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(r);
  });
  Object.keys(grouped).forEach((stage) => {
    const detail = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = `${stage} (${grouped[stage].length})`;
    detail.appendChild(summary);
    const ul = document.createElement("ul");
    grouped[stage].forEach((r) => {
      const li = document.createElement("li");
      li.innerHTML = `${r.timestamp} | <span class="${statusClass(r.status)}">${r.status}</span> | ${linkifyText(r.summary)}`;
      ul.appendChild(li);
    });
    detail.appendChild(ul);
    stageGroups.appendChild(detail);
  });

  document.querySelectorAll(".path-link").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`本地路径：\n${a.getAttribute("data-path")}\n\n可复制到资源管理器打开。`);
    });
  });
}

document.getElementById("refreshBtn").addEventListener("click", render);
render();
