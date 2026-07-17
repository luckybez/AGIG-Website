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

  // ---- Recovered IA history timeline ---------------------------------------
  // Content and chronology were recovered from 97da36e and its immediate
  // parent. This enhancement preserves the original disclosure model while
  // providing hover/focus on pointer devices and controlled tap disclosure.
  var timeline = document.querySelector("[data-history-timeline]");
  if (timeline) {
    var entries = Array.prototype.slice.call(timeline.querySelectorAll("details"));
    var desktopQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    function usesDesktopInteraction() {
      return desktopQuery.matches && window.innerWidth > 640;
    }

    function syncTimeline(active) {
      entries.forEach(function (entry, index) {
        var summary = entry.querySelector("summary");
        var body = entry.querySelector(".tl-body");
        if (!summary || !body) return;
        if (!body.id) body.id = "history-entry-" + (index + 1);
        summary.setAttribute("role", "button");
        summary.setAttribute("aria-controls", body.id);
        summary.setAttribute("aria-expanded", entry.open ? "true" : "false");
        if (active && entry !== active) entry.open = false;
      });
    }

    entries.forEach(function (entry) {
      var summary = entry.querySelector("summary");
      entry.addEventListener("toggle", function () { syncTimeline(entry.open ? entry : null); });
      if (summary) {
        summary.addEventListener("mouseenter", function () {
          if (usesDesktopInteraction()) {
            entry.open = true;
            syncTimeline(entry);
          }
        });
        summary.addEventListener("focus", function () {
          if (usesDesktopInteraction()) {
            entry.open = true;
            syncTimeline(entry);
          }
        });
        summary.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            entry.open = !entry.open;
            syncTimeline(entry.open ? entry : null);
          }
        });
      }
    });
    syncTimeline(null);
  }
})();
