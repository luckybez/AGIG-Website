/* Avant Garde — production JS (candidate v1.4.9)
   Minimal, dependency-free. No credentials or secrets belong in this file. */
(function () {
  "use strict";

  // ---- Analytics (event names only) ----------------------------------------
  function track(event, detail) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: event, detail: detail || null, ts: Date.now() });
    } catch (e) { /* analytics must never break the page */ }
  }

  document.querySelectorAll("[data-event]").forEach(function (el) {
    el.addEventListener("click", function () { track(el.getAttribute("data-event")); });
  });

  // ---- Trust dialog ---------------------------------------------------------
  var dialog = document.getElementById("trust-dialog");
  var openBtn = document.getElementById("open-trust");
  var closeBtn = document.getElementById("close-trust");
  if (dialog && openBtn) {
    openBtn.addEventListener("click", function () { dialog.showModal(); });
    closeBtn.addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) {
      var r = dialog.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  }
})();
