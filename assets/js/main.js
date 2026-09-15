(function () {
  "use strict";

  // 푸터 연도 자동 갱신
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 섹션 스크롤에 따라 현재 메뉴 강조 (스크롤스파이)
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".site-nav a[href^='#']"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return document.getElementById(id);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = navLinks.find(function (a) {
            return a.getAttribute("href") === "#" + entry.target.id;
          });
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
            link.setAttribute("aria-current", "true");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) { observer.observe(section); });
  }
})();
