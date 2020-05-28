export const PAGES = [
  {
    name: "about",
    childType: "col",
    childTemplate:
      '<a href="${url}" title="${name}" target="_blank" rel="noopener"><i class="${icon === "envelope" ? "fas" : "fab"} fa-${icon}" aria-hidden="true"></i></a>',
  },
  {
    name: "projects",
    childType: "row",
    childTemplate:
      '<td>${name}</td><td>${description}</td><td class="text-center"><a href="${url}" title="Fork ${name}" target="_blank"><i class="fas fa-code-branch"></i></a></td>',
  },
  {
    name: "speaking",
    childType: "row",
    childTemplate:
      '<td>${name}</td><td>${year}</td><td class="text-center"><div class="row">${slides ? `<div class="one-half column"><a href="${slides}" title="Slides"><i class="fas fa-file-powerpoint"></i></a></div>` : ""}${video ? `<div class="one-half column"><a href="${video}" title="Video"><i class="fas fa-video"></i></a></div>` : ""}${url ? `<div class="one-half column"><a href="${url}" title="More"><i class="fas fa-link"></i></a></div>` : ""}</div></td>',
  },
];
