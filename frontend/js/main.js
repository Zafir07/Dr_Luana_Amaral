(() => {
  "use strict";

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: subtle shadow on scroll ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  if (menuToggle && mobileNav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
      mobileNav.hidden = true;
    };
    const openMenu = () => {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Fechar menu");
      mobileNav.hidden = false;
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        menuToggle.focus();
      }
    });
  }

  /* ---------- Scroll reveal ----------
     Content is visible by default in CSS. Only mark elements
     "reveal-pending" (hidden-then-fade-in) once we are certain the
     observer that will reveal them again is wired up; any failure
     here must never leave real content permanently invisible. */
  try {
    const revealTargets = document.querySelectorAll("[data-reveal]");
    if ("IntersectionObserver" in window && revealTargets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
      );
      revealTargets.forEach((el) => {
        el.classList.add("reveal-pending");
        observer.observe(el);
      });

      // Safety net: if an element is ever missed (edge cases with
      // fast programmatic scrolls, layout shifts, etc.) force it
      // visible after a short grace period instead of hiding content forever.
      window.addEventListener("load", () => {
        setTimeout(() => {
          document
            .querySelectorAll("[data-reveal].reveal-pending:not(.is-visible)")
            .forEach((el) => el.classList.add("is-visible"));
        }, 2500);
      });
    }
  } catch (err) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq__item").forEach((item) => {
    const question = item.querySelector(".faq__question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      item.parentElement.querySelectorAll(".faq__item.is-open").forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".faq__question").setAttribute("aria-expanded", "false");
        }
      });
      item.classList.toggle("is-open", !isOpen);
      question.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  /* ---------- Mobile booking bar ----------
     Shows once the hero's own WhatsApp button has scrolled up out of
     view, and
     steps aside again while the contact section (which has its own
     button) or the footer is on screen. Hidden on desktop by CSS. */
  const bookingBar = document.getElementById("bookingBar");
  const heroActions = document.querySelector(".hero__actions");
  const contactSection = document.getElementById("contato");

  if (bookingBar && heroActions && "IntersectionObserver" in window) {
    const barLink = bookingBar.querySelector("a");
    const state = { heroPassed: false, contactVisible: false };
    const update = () => {
      const show = state.heroPassed && !state.contactVisible;
      bookingBar.classList.toggle("is-shown", show);
      bookingBar.setAttribute("aria-hidden", String(!show));
      if (barLink) barLink.tabIndex = show ? 0 : -1;
    };
    new IntersectionObserver(([entry]) => {
      // "Passed" = scrolled above the viewport, not merely below the fold
      state.heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    }).observe(heroActions);
    if (contactSection) {
      new IntersectionObserver(([entry]) => {
        state.contactVisible = entry.isIntersecting;
        update();
      }, { rootMargin: "0px 0px -35% 0px" }).observe(contactSection);
    }
  }
})();
