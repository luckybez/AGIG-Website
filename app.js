/* Avant Garde — production JS (candidate v1.4.9)
   Minimal, dependency-free. Form delivery requires FORM_ENDPOINT to be set
   to the secure server-side processor URL (see FORM-DELIVERY-PLAN.md).
   No credentials or secrets belong in this file. */
(function () {
  "use strict";

  // ---- Configuration -------------------------------------------------------
  // Set to the managed form endpoint before launch, e.g. "https://forms.avantgarde-internationalgroup.com/inquiry"
  var FORM_ENDPOINT = "";

  // ---- Analytics (event names only; never form content) --------------------
  function track(event, detail) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: event, detail: detail || null, ts: Date.now() });
    } catch (e) { /* analytics must never break the page */ }
  }

  document.querySelectorAll("[data-event]").forEach(function (el) {
    el.addEventListener("click", function () { track(el.getAttribute("data-event")); });
  });

  // Graceful degradation: hide images that fail to load so the figure's navy
  // field shows instead of a broken-image glyph (also covers pre-asset review).
  document.querySelectorAll(".scene-media img, .still img").forEach(function (img) {
    img.addEventListener("error", function () { img.style.visibility = "hidden"; });
    if (img.complete && img.naturalWidth === 0) img.style.visibility = "hidden";
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

  // ---- Inquiry form ---------------------------------------------------------
  var form = document.getElementById("inquiry-form");
  var statusEl = document.getElementById("form-status");
  var successEl = document.getElementById("form-success");
  var submitBtn = document.getElementById("form-submit");
  if (!form) return;

  var started = false;
  var pending = false;

  var io = ("IntersectionObserver" in window)
    ? new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { track("form_viewed"); io.disconnect(); } });
      })
    : null;
  if (io) io.observe(form); else track("form_viewed");

  form.addEventListener("focusin", function () {
    if (!started) { started = true; track("form_started"); }
  });

  function setStatus(msg, ok) {
    statusEl.textContent = msg;
    statusEl.classList.toggle("ok", !!ok);
  }

  function params() {
    var out = {};
    try {
      new URLSearchParams(location.search).forEach(function (v, k) {
        if (/^(utm_|ref|source|campaign)/i.test(k)) out[k] = v;
      });
    } catch (e) {}
    return out;
  }

  form.addEventListener("submit", function (e) {
    if (pending) { e.preventDefault(); return; } // duplicate-submission prevention

    // Honeypot + spam checks (server must re-validate everything)
    if (form.elements.company.value) { e.preventDefault(); setStatus("Something went wrong. Please email us directly."); return; }

    var required = ["name", "email", "role", "context", "nextStep"];
    for (var i = 0; i < required.length; i++) {
      var el = form.elements[required[i]];
      if (!el.value.trim()) {
        e.preventDefault();
        track("form_error", "missing_required");
        setStatus("Please complete the required fields before sending.");
        el.focus();
        return;
      }
    }
    var emailEl = form.elements.email;
    if (!emailEl.checkValidity()) {
      e.preventDefault();
      track("form_error", "invalid_email");
      setStatus("Please enter a valid email address.");
      emailEl.focus();
      return;
    }

    if (!FORM_ENDPOINT) {
      // FORM_ENDPOINT not configured: do NOT preventDefault — let the browser
      // submit natively to the form's action="/inquiry" (server endpoint).
      track("form_submitted", form.elements.nextStep.value);
      pending = true;               // duplicate prevention while the native POST navigates
      submitBtn.disabled = true;
      setStatus("Sending your inquiry…", true);
      return;
    }

    // FORM_ENDPOINT configured: enhanced fetch workflow.
    e.preventDefault();

    var payload = {
      submittedAt: new Date().toISOString(),
      name: form.elements.name.value.trim(),
      email: emailEl.value.trim(),
      role: form.elements.role.value.trim(),
      context: form.elements.context.value.trim(),
      nextStep: form.elements.nextStep.value,
      phone: form.elements.phone.value.trim() || null,
      sourcePage: location.origin + location.pathname,
      campaign: params()
    };

    pending = true;
    submitBtn.disabled = true;
    setStatus("Sending your inquiry…", true);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error("delivery_failed_" + res.status);
      // Success state ONLY after confirmed server delivery.
      track("form_submitted", payload.nextStep);
      if (payload.nextStep === "Send me the private overview") track("private_overview_selected");
      if (payload.nextStep === "I would like a private conversation") track("private_conversation_selected");
      form.hidden = true;
      document.querySelector(".inquiry h2").hidden = true;
      document.querySelector(".inquiry .sub").hidden = true;
      successEl.hidden = false;
      successEl.querySelector("h2").focus && successEl.setAttribute("tabindex", "-1");
      successEl.focus();
    }).catch(function (err) {
      track("form_error", String(err && err.message || "network"));
      // Values are preserved; nothing is cleared on failure.
      setStatus("Your inquiry could not be sent. Your answers are still here — please try again, or email travis@avantgarde-internationalgroup.com.");
    }).finally(function () {
      pending = false;
      submitBtn.disabled = false;
    });
  });
})();
