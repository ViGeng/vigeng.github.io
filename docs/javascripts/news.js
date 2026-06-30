/* Interactive news items (a Markdown definition list: dt = date,
   dd = body — see includes/news.md).
   A row whose body carries a figure (img.news-figure):
     - the date pill acts as a disclosure button (click / Enter / Space)
       that toggles .is-expanded on the dd, unfolding the figure;
     - the revealed figure opens a full-size lightbox (click / Enter /
       Space). The lightbox is a focus-managed dialog (Esc / backdrop
       closes, focus returns to the trigger).
   Keyboard + screen-reader operable; the mouse path is unchanged. A
   single delegated listener set, plus per-row ARIA decoration that is
   re-applied on Material's instant navigation. */
(function () {
  var lastFocus = null;

  function overlay() {
    var el = document.querySelector(".news-lightbox");
    if (!el) {
      el = document.createElement("figure");
      el.className = "news-lightbox";
      el.setAttribute("role", "dialog");
      el.setAttribute("aria-modal", "true");
      el.setAttribute("tabindex", "-1");
      el.innerHTML = '<img alt=""><figcaption></figcaption>';
      document.body.appendChild(el);
    }
    return el;
  }

  function openLightbox(fig) {
    lastFocus = document.activeElement;
    var el = overlay();
    var img = el.querySelector("img");
    img.src = fig.getAttribute("src");
    img.alt = fig.getAttribute("alt") || "";
    var cap = fig.getAttribute("data-news-cap") || "";
    el.querySelector("figcaption").textContent = cap;
    el.setAttribute("aria-label", cap || fig.getAttribute("alt") || "Image");
    el.classList.add("is-open");
    el.focus();
  }

  function closeLightbox() {
    var el = document.querySelector(".news-lightbox");
    if (!el || !el.classList.contains("is-open")) return;
    el.classList.remove("is-open");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    lastFocus = null;
  }

  // The dd (carrying a figure) for a clicked/focused date or body.
  function rowBody(node) {
    var dd = node.closest("dd");
    if (dd && dd.closest(".news-feed") && dd.querySelector(".news-figure")) return dd;
    var dt = node.closest("dt");
    if (dt && dt.closest(".news-feed")) {
      var next = dt.nextElementSibling;
      if (next && next.tagName === "DD" && next.querySelector(".news-figure")) return next;
    }
    return null;
  }

  function toggleRow(dd) {
    var open = dd.classList.toggle("is-expanded");
    var dt = dd.previousElementSibling;
    if (dt && dt.tagName === "DT") dt.setAttribute("aria-expanded", open ? "true" : "false");
    var fig = dd.querySelector(".news-figure");
    if (fig) fig.setAttribute("tabindex", open ? "0" : "-1"); // focusable only when shown
  }

  // Give figure-bearing rows button semantics so they are keyboard-operable.
  // Idempotent (guarded), so it is safe to re-run after instant navigation.
  function decorate() {
    var dts = document.querySelectorAll(".news-feed dt");
    for (var i = 0; i < dts.length; i++) {
      var dt = dts[i];
      var dd = dt.nextElementSibling;
      if (!dd || dd.tagName !== "DD" || dt.dataset.newsReady) continue;
      var fig = dd.querySelector(".news-figure");
      if (!fig) continue;
      var open = dd.classList.contains("is-expanded");
      dt.dataset.newsReady = "1";
      dt.setAttribute("role", "button");
      dt.setAttribute("tabindex", "0");
      dt.setAttribute("aria-expanded", open ? "true" : "false");
      fig.setAttribute("role", "button");
      fig.setAttribute("tabindex", open ? "0" : "-1");
      var alt = fig.getAttribute("alt");
      fig.setAttribute("aria-label", "View full image" + (alt ? ": " + alt : ""));
    }
  }

  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;

    // 1. the figure → open the full-size lightbox
    var fig = e.target.closest(".news-figure");
    if (fig) { openLightbox(fig); return; }

    // 2. lightbox backdrop → close
    if (e.target.closest(".news-lightbox")) { closeLightbox(); return; }

    // 3. other links inside the feed just navigate
    if (e.target.closest("a")) return;

    // 4. a figure-bearing row (date or body) → expand/collapse
    var dd = rowBody(e.target);
    if (dd) toggleRow(dd);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeLightbox(); return; }

    // While the lightbox is open, keep focus inside it (nothing else is
    // focusable in the dialog, so trapping is just "stay here").
    var lb = document.querySelector(".news-lightbox.is-open");
    if (lb) {
      if (e.key === "Tab") { e.preventDefault(); lb.focus(); }
      return;
    }

    if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
    if (!e.target.closest) return;

    // Enter/Space on the revealed figure → lightbox
    var fig = e.target.closest(".news-figure");
    if (fig && fig.getAttribute("tabindex") === "0") {
      e.preventDefault();
      openLightbox(fig);
      return;
    }

    // Enter/Space on the date disclosure button → expand/collapse
    var dt = e.target.closest('dt[role="button"]');
    if (dt) {
      e.preventDefault();
      var dd = dt.nextElementSibling;
      if (dd && dd.tagName === "DD") toggleRow(dd);
    }
  });

  // Decorate now, and again after each Material instant navigation.
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(decorate);
  } else if (document.readyState !== "loading") {
    decorate();
  } else {
    document.addEventListener("DOMContentLoaded", decorate);
  }
})();
