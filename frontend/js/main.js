(() => {
  "use strict";

  const API_BASE_URL = "http://localhost:3000";

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

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contactForm");
  const statusEl = document.getElementById("formStatus");

  const validators = {
    name: (v) => v.trim().length >= 2 || "Informe seu nome completo.",
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Informe um e-mail válido.",
    phone: (v) => v.replace(/\D/g, "").length >= 10 || "Informe um telefone com DDD.",
    procedure: (v) => v.trim().length > 0 || "Selecione um procedimento.",
    message: (v) => v.trim().length >= 10 || "Conte um pouco mais (mínimo 10 caracteres).",
  };

  const setFieldError = (field, message) => {
    const row = field.closest(".form-row");
    const errorEl = form.querySelector(`[data-error-for="${field.name}"]`);
    if (message) {
      row.classList.add("has-error");
      if (errorEl) errorEl.textContent = message;
    } else {
      row.classList.remove("has-error");
      if (errorEl) errorEl.textContent = "";
    }
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      if (!field) return;
      const result = validators[name](field.value);
      if (result !== true) {
        setFieldError(field, result);
        isValid = false;
      } else {
        setFieldError(field, "");
      }
    });
    return isValid;
  };

  if (form) {
    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      if (!field) return;
      field.addEventListener("blur", () => {
        const result = validators[name](field.value);
        setFieldError(field, result === true ? "" : result);
      });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      statusEl.textContent = "";
      statusEl.className = "form-status";

      if (!validateForm()) {
        statusEl.textContent = "Revise os campos destacados antes de enviar.";
        statusEl.classList.add("is-error");
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.querySelector(".btn__label").textContent;
      submitBtn.disabled = true;
      submitBtn.querySelector(".btn__label").textContent = "Enviando...";

      const payload = {
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        phone: form.elements.phone.value.trim(),
        procedure: form.elements.procedure.value,
        message: form.elements.message.value.trim(),
      };

      try {
        const response = await fetch(`${API_BASE_URL}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.message || "Não foi possível enviar sua mensagem agora.");
        }

        statusEl.textContent = data.message || "Mensagem enviada com sucesso! Retornaremos em breve.";
        statusEl.classList.add("is-success");
        form.reset();
      } catch (err) {
        statusEl.textContent = `${err.message} Você também pode falar direto pelo WhatsApp.`;
        statusEl.classList.add("is-error");
      } finally {
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn__label").textContent = originalLabel;
      }
    });
  }
})();
