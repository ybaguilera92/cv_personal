// ==========================================================================
// MAIN INTERACTIVITY & I18N CONTROLLER - YOEL BENEDICO AGUILERA
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Estado inicial
  let currentLang = localStorage.getItem("preferred_lang") || "es";
  let currentTheme = localStorage.getItem("preferred_theme") || "dark";

  // Elementos del DOM
  const langButtons = document.querySelectorAll(".lang-btn");
  const themeToggle = document.querySelector(".theme-toggle");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  const stackFilters = document.querySelectorAll(".stack-filter-btn");
  const techChips = document.querySelectorAll(".tech-chip");

  // ==========================================================================
  // 1. SISTEMA DE INTERNACIONALIZACIÓN (i18n)
  // ==========================================================================
  function setLanguage(lang) {
    if (!window.translations || !window.translations[lang]) return;

    currentLang = lang;
    localStorage.setItem("preferred_lang", lang);
    document.documentElement.lang = lang;

    // Actualizar botones de idioma
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const dict = window.translations[lang];

    // Actualizar título del documento
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Actualizar elementos con atributos traducibles (e.g. data-i18n-placeholder)
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
      if (dict[key]) {
        el.setAttribute(attr, dict[key]);
      }
    });
  }

  // Event Listeners para selector de idioma
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang !== currentLang) {
        setLanguage(selectedLang);
      }
    });
  });

  // Inicializar idioma
  setLanguage(currentLang);

  // ==========================================================================
  // 2. SISTEMA DE TEMA (DARK / LIGHT MODE)
  // ==========================================================================
  function applyTheme(theme) {
    currentTheme = theme;
    localStorage.setItem("preferred_theme", theme);

    if (theme === "light") {
      document.body.classList.add("light-theme");
      if (themeToggle) {
        themeToggle.innerHTML = "🌙";
        themeToggle.setAttribute("title", "Cambiar a modo oscuro");
      }
    } else {
      document.body.classList.remove("light-theme");
      if (themeToggle) {
        themeToggle.innerHTML = "☀️";
        themeToggle.setAttribute("title", "Cambiar a modo claro");
      }
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // Inicializar tema
  applyTheme(currentTheme);

  // ==========================================================================
  // 3. FILTRADO DE TECNOLOGÍAS (STACK MATRIX)
  // ==========================================================================
  if (stackFilters.length > 0 && techChips.length > 0) {
    stackFilters.forEach((btn) => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        // Actualizar botón activo
        stackFilters.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Filtrar elementos
        techChips.forEach((chip) => {
          const chipCat = chip.getAttribute("data-category");
          if (category === "all" || chipCat === category) {
            chip.style.display = "flex";
            setTimeout(() => {
              chip.style.opacity = "1";
              chip.style.transform = "translateY(0)";
            }, 10);
          } else {
            chip.style.opacity = "0";
            chip.style.transform = "translateY(10px)";
            setTimeout(() => {
              chip.style.display = "none";
            }, 200);
          }
        });
      });
    });
  }

  // ==========================================================================
  // 4. MENÚ MÓVIL Y NAVEGACIÓN
  // ==========================================================================
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }

  // ==========================================================================
  // 6. OBSERVER PARA NAVEGACIÓN ACTIVA (SCROLL SPY)
  // ==========================================================================
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-link");

  function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNavOnScroll);
});
