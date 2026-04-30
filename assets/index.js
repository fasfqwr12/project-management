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

function statusClass(status) {
  if (status === "pass") return "status-pass";
  if (status === "fail") return "status-fail";
  return "status-info";
}

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function needsPushStar(project) {
  return project.sync_recommendation === "review-commit-push" || project.sync_recommendation === "push-ready";
}

function projectNameHtml(project) {
  const name = escapeHtml(project.name || project.id || "-");
  if (!needsPushStar(project)) return name;
  return `<span class="push-star-inline"><span class="push-star" title="建议评审后推送">★</span><span>${name}</span></span>`;
}

function renderDocLi(doc) {
  if (typeof doc === "string") {
    return `<li><a href="./${doc}">${doc}</a></li>`;
  }
  const path = doc.path || "";
  const title = doc.title || path || "资料";
  const intro = doc.intro ? `<br><small>${doc.intro}</small>` : "";
  return `<li><a href="./${path}">${title}</a>${intro}</li>`;
}

async function render() {
  const projects = await readJson("./data/projects.json");
  const runs = await readJson("./data/runs.json");

  document.getElementById("syncTime").textContent = `最近刷新: ${new Date().toLocaleString("zh-CN", { hour12: false })}`;
  document.getElementById("projectCount").textContent = String(projects.length);
  document.getElementById("runCount").textContent = String(runs.length);
  document.getElementById("failCount").textContent = String(runs.filter((r) => r.status === "fail").length);

  const menu = document.getElementById("projectMenu");
  menu.innerHTML = "";
  projects.forEach((p, idx) => {
    const a = document.createElement("a");
    a.className = `menu-item${needsPushStar(p) ? " needs-push" : ""}`;
    a.href = `./projects/${encodeURIComponent(p.id)}/index.html`;
    a.innerHTML = `<strong>${projectNameHtml(p)}</strong><br><small>${escapeHtml(p.path || "-")}</small>`;
    menu.appendChild(a);
  });

  const rows = document.getElementById("projectRows");
  rows.innerHTML = "";
  projects.forEach((p, idx) => {
    const tr = document.createElement("tr");
    const relatedPaths = (p.related_paths || []).map((x) => `<li>${x}</li>`).join("");
    const relatedDocs = (p.related_docs || []).map((x) => renderDocLi(x)).join("");
    const recommendationHtml = p.sync_recommendation_label
      ? `<strong>${escapeHtml(p.sync_recommendation_label)}</strong><br><small>${escapeHtml(p.sync_recommendation_reason || "")}</small>`
      : "-";
    const hierarchyHtml = `
      <details>
        <summary>展开</summary>
        <div>
          <strong>相关路径</strong>
          <ul>${relatedPaths || "<li>-</li>"}</ul>
          <strong>相关资料</strong>
          <ul>${relatedDocs || "<li>-</li>"}</ul>
        </div>
      </details>
    `;
    tr.innerHTML = `
      <td>${projectNameHtml(p)}</td>
      <td>${escapeHtml(p.path || "-")}</td>
      <td>${escapeHtml(p.intro || "-")}</td>
      <td>${hierarchyHtml}</td>
      <td>${escapeHtml(p.last_stage || "-")}</td>
      <td class="${statusClass(p.last_status)}">${p.last_status || "-"}</td>
      <td>${recommendationHtml}</td>
      <td>${escapeHtml(p.last_updated || "-")}</td>
      <td><a href="./projects/${encodeURIComponent(p.id)}/index.html">查看</a></td>
    `;
    rows.appendChild(tr);
  });
}

document.getElementById("refreshBtn").addEventListener("click", render);
render();
