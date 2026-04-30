async function readJson(path) {
  try {
    const res = await fetch(`${path}?t=${Date.now()}`);
    if (!res.ok) throw new Error(`http ${res.status}`);
    return await res.json();
  } catch (err) {
    return null;
  }
}

function statusClass(status) {
  if (status === "pass") return "status-pass";
  if (status === "fail") return "status-fail";
  return "status-info";
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function linkify(str) {
  const text = escapeHtml(str || "");
  const pattern = /([A-Za-z]:\\[^\s<>"']+\.(?:log|txt|md|html|json))/g;
  return text.replace(pattern, (m) => `<code>${m}</code>`);
}

function needsPushStar(project) {
  return project.sync_recommendation === "review-commit-push" || project.sync_recommendation === "push-ready";
}

function currentProjectIdFromPath() {
  const parts = location.pathname.replace(/\\/g, "/").split("/").filter(Boolean);
  const idx = parts.findIndex((p) => p === "projects");
  if (idx >= 0 && parts[idx + 1]) return decodeURIComponent(parts[idx + 1]);
  return "";
}

function normalizeDocPath(p) {
  if (!p) return "#";
  if (p.startsWith("projects/")) return `../../${p}`;
  return `./${p}`;
}

async function renderProjectPage() {
  const projectId = currentProjectIdFromPath();
  let project = await readJson("./data/project.json");
  let runs = await readJson("../../data/runs.json");

  if ((!project || !runs) && window.PM_BOOTSTRAP) {
    const projects = window.PM_BOOTSTRAP.projects || [];
    const fallbackRuns = window.PM_BOOTSTRAP.runs || [];
    project = project || projects.find((p) => p.id === projectId) || null;
    runs = runs || fallbackRuns;
  }

  if (!project) {
    throw new Error("项目数据不存在，请检查 data/project.json");
  }

  const projectRuns = (runs || []).filter((r) => r.project === project.id).slice(0, 200);

  document.getElementById("title").innerHTML = needsPushStar(project)
    ? `<span class="push-star-inline"><span class="push-star" title="建议评审后推送">★</span><span>${escapeHtml(project.name || project.id)}</span></span>`
    : escapeHtml(project.name || project.id);
  document.getElementById("projectId").textContent = project.id;
  document.getElementById("projectPath").textContent = project.path || "-";
  document.getElementById("projectIntro").textContent = project.intro || "-";
  let adviceBlock = document.getElementById("projectAdviceBlock");
  if (!adviceBlock) {
    adviceBlock = document.createElement("p");
    adviceBlock.id = "projectAdviceBlock";
    const introLine = document.getElementById("projectIntro").parentElement;
    introLine.insertAdjacentElement("afterend", adviceBlock);
  }
  if (project.sync_recommendation_label) {
    adviceBlock.innerHTML = `<strong>同步建议：</strong>${escapeHtml(project.sync_recommendation_label)}<br><small>${escapeHtml(project.sync_recommendation_reason || "")}</small>`;
  } else {
    adviceBlock.innerHTML = "<strong>同步建议：</strong>-";
  }
  let memoryBlock = document.getElementById("projectMemoryBlock");
  if (!memoryBlock) {
    memoryBlock = document.createElement("p");
    memoryBlock.id = "projectMemoryBlock";
    adviceBlock.insertAdjacentElement("afterend", memoryBlock);
  }
  if (project.scan_memory_note) {
    memoryBlock.innerHTML = `<strong>巡检记忆：</strong><small>${escapeHtml(project.scan_memory_note)}</small>`;
  } else {
    memoryBlock.innerHTML = "<strong>巡检记忆：</strong><small>-</small>";
  }
  document.getElementById("lastStage").textContent = project.last_stage || "-";
  const lastStatus = document.getElementById("lastStatus");
  lastStatus.textContent = project.last_status || "-";
  lastStatus.className = statusClass(project.last_status || "info");
  document.getElementById("runCount").textContent = String(project.run_count || 0);

  const fixed = document.getElementById("fixedStructure");
  fixed.innerHTML = "";
  ["docs", "reports", "logs", "data"].forEach((name) => {
    const li = document.createElement("li");
    li.textContent = `./${name}/`;
    fixed.appendChild(li);
  });

  const docList = document.getElementById("docList");
  docList.innerHTML = "";
  (project.related_docs || []).forEach((d) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    if (typeof d === "string") {
      a.href = normalizeDocPath(d);
      a.textContent = d;
      li.appendChild(a);
      docList.appendChild(li);
      return;
    }
    a.href = normalizeDocPath(d.path || "");
    a.textContent = d.title || d.path || "资料";
    li.appendChild(a);
    if (d.intro) {
      const intro = document.createElement("div");
      intro.style.color = "#5f7392";
      intro.style.fontSize = "12px";
      intro.textContent = d.intro;
      li.appendChild(intro);
    }
    docList.appendChild(li);
  });

  const relatedPathList = document.getElementById("relatedPathList");
  relatedPathList.innerHTML = "";
  (project.related_paths || []).forEach((p) => {
    const li = document.createElement("li");
    li.textContent = p;
    relatedPathList.appendChild(li);
  });

  const runRows = document.getElementById("runRows");
  runRows.innerHTML = "";
  projectRuns.forEach((r) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${r.timestamp || ""}</td>
      <td>${r.stage || ""}</td>
      <td class="${statusClass(r.status)}">${r.status || ""}</td>
      <td>${linkify(r.summary || "")}</td>
      <td>${linkify(r.problem || "")}</td>
    `;
    runRows.appendChild(tr);
  });
}

renderProjectPage().catch((e) => {
  const el = document.getElementById("loadError");
  if (el) el.textContent = `加载失败: ${String(e)}`;
});
