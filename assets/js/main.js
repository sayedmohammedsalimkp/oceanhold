/* Oceanhold Exports — site script */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  /* ---------- Icon sprite (inlined so it also works from file://) ---------- */
  var P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    "arrow-ne": '<path d="M7 17 17 7M8 7h9v9"/>',
    drop: '<path d="M12 3s6.5 7 6.5 11.5a6.5 6.5 0 0 1-13 0C5.500 10 12 3 12 3Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    seeds: '<path d="M7.500 4c2.500 1.500 3 4.500 1 6.500C6 9.500 5 6.500 7.500 4Z"/><path d="M16.500 5c1.800 2.200 1.300 5-1.200 6.500-1.800-2.200-1.300-5 1.200-6.500Z"/><path d="M6 14c2.800-.5 5 1.200 5.200 4-2.800.5-5-1.200-5.200-4Z"/><path d="M18.500 13.500c.2 2.800-1.700 4.800-4.500 4.800-.2-2.800 1.700-4.800 4.500-4.800Z"/>',
    slices: '<circle cx="9" cy="10" r="5.500"/><circle cx="9" cy="10" r="2"/><path d="M14.500 7.500a5.500 5.500 0 1 1-4 10.200"/><path d="M17.500 10a5.500 5.500 0 0 1-2.500 9"/>',
    caret: '<path d="m7 10 5 5 5-5"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-7 10-9"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="m12 6.2.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/><path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5"/>',
    ship: '<path d="M3 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0"/><path d="M4.5 14 3.5 11h17l-1.5 3.5"/><path d="M6 11V7h12v4M9 7V4h6v3"/>',
    handshake: '<path d="m11 17 2 2a1.4 1.4 0 0 0 2-2"/><path d="m14 14 2.5 2.5a1.4 1.4 0 0 0 2-2l-3.9-3.9a2 2 0 0 0-2.8 0l-.9.9a1.4 1.4 0 0 1-2-2l2.8-2.8a3.6 3.6 0 0 1 4.6-.4l.4.3a3 3 0 0 0 2.1.6H21"/><path d="m21 15-2 0"/><path d="M3 6.5h2.5L10 11M3 15h2l4.5 4.5a1.4 1.4 0 0 0 2-2"/>',
    sprout: '<path d="M12 21v-9"/><path d="M12 12C12 8 9 5 4 5c0 4 3 7 8 7Z"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7Z"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
    box: '<path d="m12 3 8 4.5v9L12 21l-8-4.5v-9Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/>',
    doc: '<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8Z"/><path d="M14 3v5h5M8.5 13h7M8.5 16.5h4.5"/>',
    "doc-check": '<path d="M9 4H6.5A1.5 1.5 0 0 0 5 5.5v14A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 17.5 4H15"/><rect x="9" y="2.5" width="6" height="3.5" rx="1"/><path d="m9 13.5 2 2 4-4"/>',
    "doc-award": '<path d="M11 21H6.5A1.500 1.500 0 0 1 5 19.500v-15A1.500 1.500 0 0 1 6.500 3H14l5 5v3"/><path d="M14 3v5h5M8.500 10h4M8.500 13.500h3"/><circle cx="16.500" cy="15.500" r="2.800"/><path d="m14.800 17.800-.8 3.700 2.500-1.300 2.500 1.300-.8-3.700"/>',
    "clipboard-list": '<path d="M9 4.500H6.500A1.500 1.500 0 0 0 5 6v13.500A1.500 1.500 0 0 0 6.500 21h11a1.500 1.500 0 0 0 1.500-1.500V6a1.500 1.500 0 0 0-1.500-1.500H15"/><rect x="9" y="2.500" width="6" height="4" rx="1"/><path d="m8 11 1.300 1.300L11.500 10M8 16.500l1.300 1.300 2.200-2.300M14 11.500h2.500M14 17h2.500"/>',
    "doc-verified": '<path d="M11 21H6.500A1.500 1.500 0 0 1 5 19.500v-15A1.500 1.500 0 0 1 6.500 3H14l5 5v3.500"/><path d="M14 3v5h5M8.500 11h6M8.500 14.500h3"/><circle cx="17" cy="17" r="4"/><path d="m15.200 17 1.300 1.300 2.300-2.500"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/>',
    truck: '<path d="M3 6h11v10H3zM14 9.5h3.8L21 13v3h-7"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    tag: '<path d="M3 12V4.5A1.5 1.5 0 0 1 4.5 3H12l9 9-9 9Z"/><circle cx="8" cy="8" r="1.5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><path d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.8c2 .7 3.2 2.4 3.5 5.2"/>',
    network: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="18" r="2.2"/><circle cx="19" cy="18" r="2.2"/><circle cx="12" cy="13" r="2.2"/><path d="M12 7.2v3.6M10.3 14.4l-3.6 2.4M13.7 14.4l3.6 2.4"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16 9.6"/>',
    phone: '<path d="M5 3.5h3.2l1.6 4.3-2.2 1.5a10.5 10.5 0 0 0 7.1 7.1l1.5-2.2 4.3 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16.6 16.6 0 0 1 3.4 5.2 1.6 1.6 0 0 1 5 3.5Z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1.6"/><path d="m3.5 6 8.5 7 8.5-7"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
    grain: '<path d="M12 21V8"/><path d="M12 8c-1.8-.6-2.8-2.2-2.8-4.2 1.8.6 2.8 2.2 2.8 4.2ZM12 8c1.8-.6 2.8-2.2 2.8-4.2-1.8.6-2.8 2.2-2.8 4.2Z"/><path d="M12 13c-2.2-.4-3.6-2-3.8-4.3 2.2.4 3.6 2 3.8 4.3ZM12 13c2.2-.4 3.6-2 3.8-4.3-2.2.4-3.6 2-3.8 4.3ZM12 18c-2.2-.4-3.6-2-3.8-4.3 2.2.4 3.6 2 3.8 4.3ZM12 18c2.2-.4 3.6-2 3.8-4.3-2.2.4-3.6 2-3.8 4.3Z"/>',
    bowl: '<path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M8.5 8.5c.5-.8 1.5-1 2-.3M12.5 7.5c.5-.8 1.5-1 2-.3M10 5.5c.5-.8 1.5-1 2-.3"/>',
    bean: '<ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)"/><path d="M8 18c1-3 1.5-6 4.5-8.5S16.5 6.5 16 6"/>',
    pepper: '<circle cx="8" cy="9" r="2.6"/><circle cx="15.5" cy="8" r="2.6"/><circle cx="11.5" cy="15.5" r="2.6"/><circle cx="18" cy="15" r="2"/><circle cx="5.5" cy="16" r="2"/>',
    pod: '<path d="M12 3c4 3 5 7.5 4 11.5S12.5 21 12 21s-3-2.5-4-6.5S8 6 12 3Z"/><path d="M12 6v12"/>',
    spice: '<path d="M8 21h8M9 21l-1.5-9h9L15 21"/><path d="M7.5 12c0-2 1.8-3.5 4.5-3.5s4.5 1.5 4.5 3.5"/><path d="M12 8.5V6M10 4.5l2 1.5 2-1.5"/>',
    more: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    sliders: '<path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1"/><circle cx="15" cy="6" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="18" r="2"/>',
    shield: '<path d="M12 3 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6Z"/><path d="m9 12 2.2 2.2L15.5 10"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
    eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3"/>',
    factory: '<path d="M3 21V10l5 3V10l5 3V6h3l1 15"/><path d="M3 21h18M7 17h2M11 17h2"/>',
    chat: '<path d="M4 5h16v11H9l-5 4Z"/><path d="M8 9.5h8M8 12.5h5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
    scale: '<path d="M12 4v16M7 20h10M5 7h14"/><path d="m5 7-2.5 6a2.5 2.5 0 0 0 5 0Zm14 0-2.5 6a2.5 2.5 0 0 0 5 0Z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="1.6"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'
  };

  var sprite = '<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">';
  Object.keys(P).forEach(function (k) {
    sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + P[k] + "</symbol>";
  });
  sprite += "</svg>";
  document.body.insertAdjacentHTML("afterbegin", sprite);

  /* ---------- Header ---------- */
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* ---------- Product sub-navigation (products page) ---------- */
  var subLinks = document.querySelectorAll(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    var map = {};
    subLinks.forEach(function (a) {
      var t = document.querySelector(a.getAttribute("href"));
      if (t) map[t.id] = a;
    });
    var so = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && map[e.target.id]) {
            subLinks.forEach(function (l) { l.classList.remove("is-active"); });
            map[e.target.id].classList.add("is-active");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.keys(map).forEach(function (id) { so.observe(document.getElementById(id)); });
  }

  /* ---------- Category showcase (products page) ---------- */
  // The first product is selected when a category opens; selecting another swaps the details
  var showItem = function (panel, index) {
    panel.querySelectorAll(".pitem").forEach(function (b, i) {
      b.setAttribute("aria-pressed", i === index ? "true" : "false");
    });
    panel.querySelectorAll(".pabout__item").forEach(function (d, i) {
      d.classList.toggle("is-on", i === index);
    });
    var name = panel.querySelectorAll(".pitem")[index].textContent;
    panel.querySelectorAll(".btn-row a").forEach(function (a) {
      if (!a.dataset.base) a.dataset.base = a.getAttribute("href");
      a.setAttribute("href", a.dataset.base + "&item=" + encodeURIComponent(name));
    });
  };
  document.querySelectorAll(".panel").forEach(function (panel) {
    panel.querySelectorAll(".pitem").forEach(function (b, i) {
      b.addEventListener("click", function () {
        showItem(panel, i);
        if (window.matchMedia("(max-width: 960px)").matches) panel.querySelector(".pabout").scrollIntoView({ block: "nearest" });
      });
    });
  });

  document.querySelectorAll("[data-showcase]").forEach(function (box) {
    var picks = Array.prototype.slice.call(box.querySelectorAll(".pick"));
    var select = function (pick) {
      picks.forEach(function (p) {
        var on = p === pick;
        p.setAttribute("aria-expanded", on ? "true" : "false");
        var panel = document.getElementById(p.getAttribute("aria-controls"));
        panel.hidden = !on;
        if (on) showItem(panel, 0);
      });
      box.classList.toggle("is-open", !!pick);
    };
    picks.forEach(function (p) {
      p.addEventListener("click", function () {
        var open = p.getAttribute("aria-expanded") === "true";
        select(open ? null : p);
        if (!open) {
          p.scrollIntoView({ block: "nearest", inline: "center" });
          box.scrollIntoView({ block: "start" });
        }
      });
    });
    box.querySelectorAll(".panel__close").forEach(function (b) {
      b.addEventListener("click", function () {
        var opener = box.querySelector('.pick[aria-expanded="true"]');
        select(null);
        if (opener) opener.focus();
      });
    });
    // Previous / next arrows loop through the categories
    var step = function (by) {
      var current = picks.indexOf(box.querySelector('.pick[aria-expanded="true"]'));
      var next = picks[(current + by + picks.length) % picks.length];
      var strip = next.parentNode;
      select(next);
      strip.scrollLeft = next.offsetLeft - strip.offsetLeft - (strip.clientWidth - next.offsetWidth) / 2;
    };
    box.querySelector(".panel__nav--prev").addEventListener("click", function () { step(-1); });
    box.querySelector(".panel__nav--next").addEventListener("click", function () { step(1); });
    select(null);
  });

  // Homepage links such as products.html#cat-coffee open that category
  var openFromHash = function () {
    if (!/^#cat-[a-z]+$/.test(window.location.hash)) return;
    var pick = document.querySelector('.pick[aria-controls="' + window.location.hash.slice(1) + '"]');
    if (!pick) return;
    if (pick.getAttribute("aria-expanded") === "true") pick.closest("[data-showcase]").scrollIntoView({ block: "start" });
    else pick.click();
  };
  window.addEventListener("hashchange", openFromHash);
  window.addEventListener("load", openFromHash);

  /* ---------- Enquiry form ---------- */
  var form = document.getElementById("enquiry-form");
  if (form) {
    var params = new URLSearchParams(window.location.search);
    var product = params.get("product");
    var type = params.get("type");
    if (product) {
      var sel = form.querySelector("#product");
      Array.prototype.forEach.call(sel.options, function (o) {
        if (o.value === product) sel.value = product;
      });
    }

    var chosenItem = params.get("item");
    if (chosenItem) form.querySelector("#message").value = "Product: " + chosenItem + "\n";

    var typeInput = form.querySelector("#enquiry-type");
    var chips = document.querySelectorAll(".quick-ctas button");
    var setType = function (val) {
      typeInput.value = val;
      chips.forEach(function (c) { c.classList.toggle("is-active", c.dataset.type === val); });
    };
    chips.forEach(function (c) {
      c.addEventListener("click", function () { setType(c.dataset.type); });
    });
    setType(type || "Request a Quotation");

    var status = document.getElementById("form-status");

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var ok = true;
      form.querySelectorAll("[required]").forEach(function (f) {
        var bad = !f.value.trim() || (f.type === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
        f.closest(".field").classList.toggle("has-error", bad);
        if (bad && ok) { f.focus(); ok = false; }
      });
      if (!ok) {
        status.textContent = "Please complete the highlighted fields so we can respond with the right information.";
        status.classList.add("is-visible");
        return;
      }

      var d = new FormData(form);
      var lines = [
        "Enquiry type: " + d.get("type"),
        "",
        "Name: " + d.get("name"),
        "Email: " + d.get("email"),
        "Company: " + d.get("company"),
        "Country: " + d.get("country"),
        "Phone / WhatsApp: " + (d.get("phone") || "-"),
        "",
        "Product of interest: " + d.get("product"),
        "Grade / specification: " + (d.get("grade") || "-"),
        "Estimated quantity: " + (d.get("quantity") || "-"),
        "Packaging preference: " + (d.get("packaging") || "-"),
        "Destination port: " + (d.get("port") || "-"),
        "Target timeline: " + (d.get("timeline") || "-"),
        "",
        "Message:",
        d.get("message") || "-"
      ];
      var subject = d.get("type") + " – " + d.get("product") + " – " + d.get("company");

      // Bots fill the hidden honeypot field; drop those silently
      if (d.get("_honey")) return;

      var mailtoFallback = function () {
        window.location.href = "mailto:oceanholdexports@gmail.com?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(lines.join("\n"));
        status.innerHTML = "We couldn’t send the form just now, so your email app has opened with the enquiry ready to send. " +
          'You can also write to <a href="mailto:oceanholdexports@gmail.com"><strong>oceanholdexports@gmail.com</strong></a>.';
        status.classList.add("is-visible");
      };

      var payload = {
        _subject: "Website enquiry: " + subject,
        _template: "table",
        _captcha: "false",
        _replyto: d.get("email"),
        "Enquiry type": d.get("type"),
        "Name": d.get("name"),
        "Email": d.get("email"),
        "Company": d.get("company"),
        "Country": d.get("country"),
        "Phone / WhatsApp": d.get("phone") || "-",
        "Product of interest": d.get("product"),
        "Grade / specification": d.get("grade") || "-",
        "Estimated quantity": d.get("quantity") || "-",
        "Packaging preference": d.get("packaging") || "-",
        "Destination port": d.get("port") || "-",
        "Target timeline": d.get("timeline") || "-",
        "Message": d.get("message") || "-"
      };

      var btn = form.querySelector('button[type="submit"]');
      var btnHtml = btn.innerHTML;
      btn.disabled = true;
      btn.textContent = "Sending…";
      status.classList.remove("is-visible");

      fetch(form.dataset.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          return res.json().then(function (json) {
            if (!res.ok || String(json.success) !== "true") throw new Error(json.message || "Send failed");
          });
        })
        .then(function () {
          form.reset();
          setType(type || "Request a Quotation");
          status.innerHTML = "<strong>Thank you — your enquiry has been sent.</strong> Our team will reply to " +
            payload.Email + " within one working day.";
          status.classList.add("is-visible");
        })
        .catch(mailtoFallback)
        .then(function () {
          btn.disabled = false;
          btn.innerHTML = btnHtml;
        });
    });

    form.querySelectorAll("input, select, textarea").forEach(function (f) {
      f.addEventListener("input", function () {
        var fld = f.closest(".field");
        if (fld) fld.classList.remove("has-error");
      });
    });
  }

  /* ---------- Year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
