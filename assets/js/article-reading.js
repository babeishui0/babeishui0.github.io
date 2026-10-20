(function () {
  "use strict";

  function initializeReading() {
    const content = document.querySelector(".glass-detail-main .page__content");
    if (!content || content.querySelector(".article-toc, #markdown-toc, .toc")) return;

    const headings = Array.from(content.querySelectorAll("h2, h3"))
      .filter((heading) => heading.textContent.trim());
    if (headings.length < 3) return;

    const details = document.createElement("details");
    details.className = "article-toc";
    const summary = document.createElement("summary");
    summary.textContent = "On this page";
    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Table of contents");
    // Keep native fragment navigation, including history and keyboard focus.
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) event.stopPropagation();
    }, true);
    const list = document.createElement("ol");

    headings.forEach((heading, index) => {
      if (!heading.id) {
        let id = "article-section-" + (index + 1);
        while (document.getElementById(id)) id += "-heading";
        heading.id = id;
      }
      heading.setAttribute("tabindex", "-1");
      const item = document.createElement("li");
      if (heading.tagName === "H3") item.className = "article-toc__subsection";
      const link = document.createElement("a");
      link.href = "#" + encodeURIComponent(heading.id);
      link.textContent = heading.textContent.trim();
      item.appendChild(link);
      list.appendChild(item);
    });

    nav.appendChild(list);
    details.appendChild(summary);
    details.appendChild(nav);
    content.prepend(details);
  }
  initializeReading();
  document.addEventListener("site:page-ready", initializeReading);
})();
