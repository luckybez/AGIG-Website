/* Avant Garde production JS (launch candidate v2)
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
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && dialog.open) {
        event.preventDefault();
        dialog.close();
      }
    });
    dialog.addEventListener("click", function (e) {
      var r = dialog.getBoundingClientRect();
      var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
      if (!inside) dialog.close();
    });
  }

  // ---- Accessible accordion -------------------------------------------------
  document.querySelectorAll("[data-accordion]").forEach(function (accordion, accordionIndex) {
    var items = Array.prototype.slice.call(accordion.querySelectorAll("details"));
    items.forEach(function (item, itemIndex) {
      var summary = item.querySelector("summary");
      var panel = item.querySelector("div");
      if (!summary || !panel) return;
      panel.id = panel.id || "accordion-panel-" + accordionIndex + "-" + itemIndex;
      summary.setAttribute("aria-controls", panel.id);
      summary.setAttribute("aria-expanded", item.open ? "true" : "false");
      item.addEventListener("toggle", function () {
        if (item.open) {
          items.forEach(function (other) {
            if (other !== item) other.open = false;
          });
        }
        summary.setAttribute("aria-expanded", item.open ? "true" : "false");
      });
      summary.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          item.open = !item.open;
        }
      });
    });
  });

  // ---- Continuity Diagnostic ------------------------------------------------
  var diagnostic = document.getElementById("continuity-diagnostic");
  var diagnosticResult = document.getElementById("diagnostic-result");
  var diagnosticError = document.getElementById("diagnostic-error");
  if (diagnostic && diagnosticResult) {
    var resultTitle = document.getElementById("diagnostic-result-title");
    var resultSummary = document.getElementById("diagnostic-result-summary");
    var resultNext = document.getElementById("diagnostic-result-next");
    var printDiagnostic = document.getElementById("print-diagnostic");
    var resetDiagnostic = document.getElementById("reset-diagnostic");

    diagnostic.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(diagnostic);
      var unanswered = [];
      var score = 0;
      for (var index = 1; index <= 6; index += 1) {
        var answer = data.get("q" + index);
        if (answer === null) unanswered.push(index);
        else score += Number(answer);
      }

      if (unanswered.length) {
        diagnosticError.hidden = false;
        var firstMissing = diagnostic.querySelector('input[name="q' + unanswered[0] + '"]');
        if (firstMissing) firstMissing.focus();
        track("diagnostic_validation_error", { unanswered: unanswered.length });
        return;
      }

      diagnosticError.hidden = true;
      var profile;
      if (score <= 3) {
        profile = {
          title: "The record is largely maintained",
          summary: "This domain appears to have a dependable operating record. The principal risk is not fragmentation itself, but whether the record remains current as facts, people, and responsibilities change.",
          next: "Select one upcoming review and test whether its sources, rationale, commitments, changes, and affected people can be inspected without reconstruction."
        };
      } else if (score <= 7) {
        profile = {
          title: "The record is uneven",
          summary: "Important context exists, but parts of the domain still depend on manual assembly or individual memory. This is where plans become stale and handoffs become fragile.",
          next: "Map one recurring review: its approved sources, owner, commitments, changed facts, people affected, and acceptance checks."
        };
      } else {
        profile = {
          title: "The record depends heavily on you",
          summary: "This domain carries material reconstruction risk. Sources, rationale, commitments, changes, or responsibilities may not reliably return together when attention is required.",
          next: "Begin with the highest-consequence recurring review. Bound the source set and define what a current, traceable, reviewable brief must contain."
        };
      }

      resultTitle.textContent = profile.title;
      resultSummary.textContent = profile.summary;
      resultNext.textContent = profile.next;
      diagnostic.hidden = true;
      diagnosticResult.hidden = false;
      diagnosticResult.focus();
      track("diagnostic_completed", { band: score <= 3 ? "maintained" : score <= 7 ? "uneven" : "person_dependent" });
    });

    if (printDiagnostic) {
      printDiagnostic.addEventListener("click", function () { window.print(); });
    }
    if (resetDiagnostic) {
      resetDiagnostic.addEventListener("click", function () {
        diagnostic.reset();
        diagnosticResult.hidden = true;
        diagnostic.hidden = false;
        diagnosticError.hidden = true;
        diagnostic.querySelector("input").focus();
        track("diagnostic_reset");
      });
    }
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
