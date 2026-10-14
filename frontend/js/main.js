(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Nav: glass background once the page scrolls ---------- */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const onScroll = () => navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu (full-screen overlay) ---------- */
  const hamBtn = document.getElementById("hamBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamBtn && mobileMenu) {
    const setOpen = (open) => {
      hamBtn.setAttribute("aria-expanded", String(open));
      hamBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      mobileMenu.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
    };
    hamBtn.addEventListener("click", () => setOpen(hamBtn.getAttribute("aria-expanded") !== "true"));
    mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && hamBtn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        hamBtn.focus();
      }
    });
  }

  /* ---------- Scroll reveal ----------
     Content is visible by default in CSS. Elements are only marked
     "reveal-pending" once the observer that reveals them is wired up,
     and a timer forces anything missed visible. */
  try {
    const targets = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && targets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
      );
      targets.forEach((el, i) => {
        // Stagger siblings in the same grid slightly
        if (el.parentElement && el.parentElement.classList.contains("card-grid")) {
          el.style.transitionDelay = `${(i % 4) * 80}ms`;
        }
        el.classList.add("reveal-pending");
        observer.observe(el);
      });
      window.addEventListener("load", () => {
        setTimeout(() => {
          document.querySelectorAll(".reveal-pending:not(.in)").forEach((el) => el.classList.add("in"));
        }, 2500);
      });
    }
  } catch (err) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
  }

  /* ---------- Before/after tabs (WAI-ARIA tabs pattern) ---------- */
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".results").forEach((box) => {
    const tabs = Array.from(box.querySelectorAll('[role="tab"]'));
    const select = (tab, focus) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) {
          panel.hidden = !on;
          // Play a panel's video only while its tab is open (and never
          // autoplay for people who asked for reduced motion)
          panel.querySelectorAll("video").forEach((v) => {
            if (on && !reduceMotion) v.play().catch(() => {});
            else v.pause();
          });
        }
      });
      if (focus) tab.focus();
    };
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => select(tab, false));
      tab.addEventListener("keydown", (e) => {
        const keys = { ArrowRight: 1, ArrowLeft: -1 };
        if (e.key in keys) {
          e.preventDefault();
          select(tabs[(i + keys[e.key] + tabs.length) % tabs.length], true);
        } else if (e.key === "Home" || e.key === "End") {
          e.preventDefault();
          select(e.key === "Home" ? tabs[0] : tabs[tabs.length - 1], true);
        }
      });
    });
  });

  /* ---------- FAQ accordion (one open at a time) ---------- */
  document.querySelectorAll(".faq__item").forEach((item) => {
    const btn = item.querySelector(".faq__btn");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".faq__item.is-open").forEach((openItem) => {
        openItem.classList.remove("is-open");
        openItem.querySelector(".faq__btn").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
})();
