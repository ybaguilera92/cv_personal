# Portfolio & CV Personal — Yoel Benedico Aguilera

Landing page profesional y currículum interactivo bilingüe (Español / Inglés) para **Yoel Benedico Aguilera**, Full-Stack Developer e Ingeniero de Software con Máster en Informática Aplicada (Machine Learning).

## 🚀 Características Principales

- **Diseño Ejecutivo & Moderno**: Estructura limpia inspirada en portfolios de ingeniería senior (proyectos, retos de infraestructura, métricas y formación).
- **Selector de Idioma Dinámico (ES 🇪🇸 / EN 🇺🇸)**: Cambio instantáneo entre español e inglés sin recargar la página, con persistencia en `localStorage`.
- **Modo Oscuro y Modo Claro (Dark / Light Theme)**: Alternancia rápida con switch en la barra superior.
- **Formato CV Imprimible / Exportable a PDF (`Ctrl + P`)**:
  - Al hacer clic en **"Imprimir / PDF"** o presionar `Ctrl + P`, los estilos ocultan automáticamente la navegación y los botones, generando un CV ejecutivo de 2 páginas en formato A4 listo para reclutadores.
- **Filtros Interactivos de Tecnologías**: Clasificación por Frontend, Backend & APIs, Bases de Datos, DevOps & Cloud e Inteligencia Artificial / Machine Learning.
- **100% Responsive**: Optimizado para teléfonos móviles, tablets y monitores de alta resolución.
- **Sin Dependencias Pesadas**: Construido con HTML5 semántico, CSS3 moderno (Variables, Flexbox, CSS Grid) y JavaScript modular. Listo para abrir directamente en el navegador con doble clic o alojar gratis en **GitHub Pages**, **Vercel** o **Netlify**.

---

## 📁 Estructura del Proyecto

```
cv_personal/
├── index.html              # Landing page principal interactiva
├── assets/
│   ├── css/
│   │   └── styles.css      # Variables CSS, temas, responsive y @media print
│   ├── js/
│   │   ├── i18n.js         # Diccionario de textos bilingüe (Español / Inglés)
│   │   └── main.js         # Controlador de idioma, tema, scroll y filtros
│   └── images/
│       └── avatar.jpg      # Foto de perfil / avatar profesional (puedes reemplazarla)
├── cv-en.html              # Versión previa conservada como respaldo
└── README.md
```

---

## 🖼️ Cómo Cambiar tu Foto Personal

1. Guarda tu fotografía preferida con el nombre `avatar.jpg`.
2. Reemplaza el archivo existente en:
   ```
   assets/images/avatar.jpg
   ```
3. ¡Listo! La landing page y la vista imprimible utilizarán automáticamente tu fotografía actualizada.

---

## 🌐 Publicación en GitHub Pages (1 Clic)

1. Sube los cambios a tu repositorio de GitHub:
   ```bash
   git add .
   git commit -m "feat: landing page profesional bilingue con dark mode y exportacion PDF"
   git push origin main
   ```
2. En GitHub ve a **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** y en pocos segundos tu portfolio estará online en:
   `https://ybaguilera92.github.io/cv_personal/`
