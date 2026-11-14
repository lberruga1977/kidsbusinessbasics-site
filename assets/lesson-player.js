/* Click-to-load lesson player. No third-party request is made until a grown-up chooses to play. */
(function () {
  function play(btn) {
    var id = btn.getAttribute("data-youtube-id");
    var title = btn.getAttribute("data-title") || "Kids Business Basics lesson";
    var wrap = btn.closest(".embed-wrap");
    if (!id || !wrap) return;
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1";
    iframe.title = title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    wrap.textContent = "";
    wrap.appendChild(iframe);
    iframe.focus();
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".video-facade");
    if (btn) play(btn);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var btn = e.target.closest(".video-facade");
    if (!btn) return;
    e.preventDefault();
    play(btn);
  });
})();
