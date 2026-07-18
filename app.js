(function () {
  "use strict";

  window.dataLayer = window.dataLayer || [];

  function track(eventName, detail) {
    var payload = { event: eventName };
    if (detail) {
      Object.keys(detail).forEach(function (key) {
        payload[key] = detail[key];
      });
    }
    window.dataLayer.push(payload);
  }

  document.addEventListener("click", function (event) {
    var eventTarget = event.target.closest("[data-event]");
    if (!eventTarget) return;
    if (eventTarget.matches(".mobile-nav summary")) return;
    track(eventTarget.getAttribute("data-event"));
  });

  document.querySelectorAll(".mobile-nav").forEach(function (menu) {
    menu.addEventListener("toggle", function () {
      if (menu.open) track("mobile_menu_opened");
    });
  });

  var storyEvents = {
    "#larry": "client_story_larry_opened",
    "#roger": "client_story_roger_opened",
    "#horacio-javier": "client_story_horacio_opened",
    "#devin": "client_story_devin_opened"
  };

  document.querySelectorAll(".story-index a").forEach(function (link) {
    link.addEventListener("click", function () {
      var eventName = storyEvents[link.getAttribute("href")];
      if (eventName) track(eventName);
    });
  });

  var trustDialog = document.querySelector("[data-trust-dialog]");
  var trustOpen = document.querySelector("[data-trust-open]");
  var trustClose = document.querySelector("[data-trust-close]");
  var trustReturnFocus = null;

  if (trustDialog && trustOpen && trustClose) {
    trustOpen.addEventListener("click", function () {
      trustReturnFocus = document.activeElement;
      trustDialog.showModal();
      trustClose.focus();
    });

    trustClose.addEventListener("click", function () {
      trustDialog.close();
    });

    trustDialog.addEventListener("click", function (event) {
      if (event.target === trustDialog) trustDialog.close();
    });

    trustDialog.addEventListener("close", function () {
      if (trustReturnFocus && typeof trustReturnFocus.focus === "function") {
        trustReturnFocus.focus();
      }
    });
  }

  var timeline = document.querySelector("[data-history-timeline]");
  if (timeline) {
    var entries = Array.prototype.slice.call(timeline.querySelectorAll("details"));
    var desktopQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    function usesDesktopInteraction() {
      return desktopQuery.matches && window.innerWidth > 640;
    }

    function closeOtherEntries(active) {
      entries.forEach(function (entry) {
        if (entry !== active) entry.open = false;
        var summary = entry.querySelector("summary");
        if (summary) summary.setAttribute("aria-expanded", entry.open ? "true" : "false");
      });
    }

    entries.forEach(function (entry, index) {
      var summary = entry.querySelector("summary");
      var body = entry.querySelector(".tl-body");
      if (!summary || !body) return;

      if (!body.id) body.id = "history-entry-" + (index + 1);
      summary.setAttribute("aria-controls", body.id);
      summary.setAttribute("aria-expanded", entry.open ? "true" : "false");

      entry.addEventListener("toggle", function () {
        if (entry.open) closeOtherEntries(entry);
        summary.setAttribute("aria-expanded", entry.open ? "true" : "false");
      });

      summary.addEventListener("mouseenter", function () {
        if (usesDesktopInteraction()) {
          entry.open = true;
          closeOtherEntries(entry);
        }
      });

      summary.addEventListener("focus", function () {
        if (usesDesktopInteraction()) {
          entry.open = true;
          closeOtherEntries(entry);
        }
      });
    });
  }
})();
