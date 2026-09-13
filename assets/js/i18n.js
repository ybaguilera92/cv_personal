// Diccionario bilingüe (Español / Inglés) para la Landing Page y CV de Yoel Benedico Aguilera

const translations = {
  es: {
    // Meta & Header
    page_title:
      "Yoel Benedico Aguilera — Ingeniero de Software & Machine Learning",
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos",
    nav_stack: "Tecnologías",
    nav_education: "Formación",
    nav_contact: "Contacto",
    nav_download_cv: "Descargar CV",

    // Hero
    hero_badge: "Disponible para nuevos proyectos y oportunidades",
    hero_greeting: "Hola, soy",
    hero_title: "Yoel Benedico Aguilera",
    hero_role: "Full-Stack Developer & Machine Learning",
    hero_subtitle:
      "Ingeniero Informático y Máster en Informática Aplicada. Más de 8 años diseñando y desarrollando arquitecturas web escalables, APIs robustas y modelos de aprendizaje automático orientados al impacto real.",
    hero_cta_projects: "Ver proyectos",
    hero_cta_cv: "Descargar CV",
    hero_cta_contact: "Hablemos",

    // Metric Cards
    metric_exp_number: "+8",
    metric_exp_label: "Años de experiencia profesional",
    metric_master_badge: "M.Sc.",
    metric_master_label: "Máster en Informática Aplicada (ML)",
    metric_students_number: "+200",
    metric_students_label: "Alumnos formados como docente universitario",
    metric_stack_label:
      "Especialista Full-Stack (Angular, React, Node, Spring)",

    // About
    about_title: "Sobre mí",
    about_subtitle:
      "Trayectoria, mentalidad de resolución de problemas y aprendizaje continuo.",
    about_p1:
      "Soy desarrollador web e ingeniero de software con sólida experiencia práctica en la creación de aplicaciones modulares con React.js, Angular (versiones 8+), Node.js y el stack MERN (MongoDB, Express, React, Node). Desarrollo servicios backend confiables, APIs RESTful y microservicios con Spring Boot, Node.js y Django REST Framework, integrados con bases de datos MySQL, PostgreSQL y MongoDB.",
    about_p2:
      "Además de mi trayectoria en la industria, me desempeñé durante más de 6 años como profesor universitario impartiendo Programación Orientada a Objetos, Estructuras de Datos, Bases de Datos e Inteligencia Artificial. Cuento con una Maestría en Informática Aplicada donde investigué e implementé soluciones de Machine Learning para ciberseguridad.",
    about_p3:
      "Me destaco por mi proactividad, pensamiento analítico y capacidad para colaborar eficazmente en equipos multidisciplinarios. Mi enfoque constante es elevar la calidad del software, optimizar la experiencia de usuario y seguir creciendo como profesional cada día.",
    about_soft_title: "Habilidades Interpersonales Clave",
    soft_communication: "Comunicación Clara y Redacción Técnica",
    soft_teamwork: "Liderazgo Técnico y Trabajo en Equipo",
    soft_problem_solving: "Resolución de Problemas Complejos",
    soft_adaptability: "Adaptabilidad y Aprendizaje Continuo",

    // Experience
    exp_title: "Experiencia Profesional",
    exp_subtitle:
      "Trayectoria comprobada liderando y desarrollando soluciones tecnológicas.",
    exp_role_1: "Full-Stack Developer",
    exp_period_1: "02/2023 – Actualidad",
    exp_company_1: "Sitrans (Sistema de Información para el Transporte)",
    exp_desc_1_1:
      "Liderazgo técnico en el análisis, diseño, pruebas y despliegue de aplicaciones web empresariales como productos modulares y de alta disponibilidad.",
    exp_desc_1_2:
      "Desarrollo de arquitecturas frontend con Angular 8+, React.js, TailwindCSS y Material UI.",
    exp_desc_1_3:
      "Implementación de microservicios y APIs REST en backend utilizando Spring Boot, Node.js y Express con bases de datos MySQL y MongoDB.",
    exp_desc_1_4:
      "Aseguramiento de estándares de calidad, escalabilidad del código y fomento de metodologías ágiles en el equipo de desarrollo.",

    exp_role_2: "Full-Stack Developer & Profesor Universitario",
    exp_period_2: "09/2016 – 02/2023",
    exp_company_2: "Universidad de Ciego de Ávila Máximo Gómez Báez",
    exp_desc_2_1:
      "Diseño e implementación de sistemas web y de escritorio modulares utilizando Angular, Node.js, Bootstrap y Django REST Framework con MySQL y MongoDB.",
    exp_desc_2_2:
      "Gestión completa del ciclo de vida del software (SDLC), desde el levantamiento de requisitos hasta la puesta en producción.",
    exp_desc_2_3:
      "Docente titular de materias fundamentales: Programación Orientada a Objetos, Estructuras de Datos y Algoritmos, Bases de Datos e Inteligencia Artificial, formando a más de 200 futuros ingenieros.",
    exp_desc_2_4:
      "Tutoría y dirección de proyectos de software aplicados a problemáticas reales de la institución y el entorno productivo.",

    // Projects
    projects_title: "Proyectos Destacados",
    projects_subtitle:
      "Una selección de proyectos de producto, arquitectura e inteligencia artificial.",
    proj_1_tag: "Plataforma Web · Gestión Educativa Internacional",
    proj_1_title: "IES Manager (Mifutura)",
    proj_1_desc:
      "Herramienta centralizada de gestión de datos para las aplicaciones de Futura. Control y seguimiento de cursos, becas, programas académicos, universidades e intermediaciones para instituciones en México, Colombia, China, Argentina y Cuba, entre otros.",
    proj_1_skills:
      "React.js, Node.js, Express.js, MongoDB, MVC, Bootstrap, Postman, Git, Webpack.",
    proj_btn_visit: "Visitar plataforma",

    proj_2_tag: "Machine Learning · Ciberseguridad",
    proj_2_title: "Herramienta de Detección de Patrones en Servidores Proxy",
    proj_2_desc:
      "Desarrollo e investigación para la detección de comportamientos anómalos y patrones sospechosos en registros de tráfico proxy utilizando técnicas de aprendizaje no supervisado (K-Means Clustering). Evaluada con base en la norma de calidad ISO/IEC 25010.",
    proj_2_skills:
      "Python, Scikit-learn, Anaconda, Web2py, MariaDB, K-Means, Análisis de Datos.",
    proj_btn_details: "Ver publicación / Tesis",

    proj_3_tag: "Seguridad de Redes · Backend Corporativo",
    proj_3_title: "Sistema de Control de Trazas y Navegación Proxy",
    proj_3_desc:
      "Sistema institucional para la auditoría y visualización de trazas de navegación web con validación de credenciales en servidores de dominio Active Directory mediante protocolo LDAP y generación de reportes analíticos para administradores de red.",
    proj_3_skills:
      "Java, Play Framework, MySQL, Active Directory, LDAP, Bootstrap.",
    proj_btn_code: "Ver arquitectura",

    proj_4_tag: "Gestión Operativa · Microservicios",
    proj_4_title: "Plataforma de Información Sitrans",
    proj_4_desc:
      "Ecosistema de módulos integrados para la gestión operativa y logística de flotas de transporte, trazabilidad de operaciones e interfaces de usuario reactivas de alto rendimiento.",
    proj_4_skills:
      "Angular 8+, Spring Boot, Node.js, TailwindCSS, MySQL, Docker.",
    proj_btn_info: "Ver detalles",

    // Technologies / Stack
    stack_title: "Las Tecnologías que Uso",
    stack_subtitle:
      "Herramientas y tecnologías con las que construyo soluciones robustas a diario.",
    stack_cat_all: "Todos",
    stack_cat_frontend: "Frontend",
    stack_cat_backend: "Backend & APIs",
    stack_cat_databases: "Bases de Datos",
    stack_cat_devops: "DevOps & Cloud",
    stack_cat_ml: "IA & Machine Learning",

    // Education
    edu_title: "Formación Académica",
    edu_subtitle: "Bases científicas e ingeniería informática de alto rigor.",
    edu_degree_1: "Máster en Informática Aplicada",
    edu_period_1: "01/2019 – 02/2022",
    edu_inst_1: "Universidad de Ciego de Ávila Máximo Gómez Báez",
    edu_desc_1:
      'Especialización en Inteligencia Artificial, Machine Learning, Big Data, Ciberseguridad y Computación en la Nube. Tesis de investigación: "Herramienta Informática para la Detección de Patrones en Registros de Tráfico del Servidor Proxy" mediante clustering no supervisado.',

    edu_degree_2: "Ingeniería en Ciencias Informáticas",
    edu_period_2: "09/2011 – 07/2016",
    edu_inst_2: "Universidad de Ciego de Ávila Máximo Gómez Báez",
    edu_desc_2:
      'Formación integral de 5 años en Algoritmos y Estructuras de Datos, Redes de Computadoras, Sistemas Operativos, Bases de Datos e Ingeniería de Software. Tesis: "Sistema para el Control de Trazas del Servidor Proxy".',

    // Languages
    lang_title: "Idiomas",
    lang_es: "Español",
    lang_es_level: "Nativo",
    lang_en: "Inglés",
    lang_en_level: "Nivel Intermedio / Profesional (A2)",

    // Contact & Footer
    contact_title:
      "¿Tienes un proyecto en mente o buscas un ingeniero para tu equipo?",
    contact_subtitle:
      "Estoy disponible para colaborar en proyectos desafiantes y roles de desarrollo Full-Stack o Machine Learning.",
    contact_btn_email: "Enviar correo",
    contact_btn_whatsapp: "Chatear por WhatsApp",
    contact_btn_linkedin: "Conectar en LinkedIn",
    contact_btn_github: "Perfil de GitHub",
    contact_location: "Ciego de Ávila, Cuba · Disponible para trabajo remoto",
    footer_text:
      "Diseñado y desarrollado profesionalmente. © 2026 Yoel Benedico Aguilera.",
  },

  en: {
    // Meta & Header
    page_title: "Yoel Benedico Aguilera — Software Engineer & Machine Learning",
    nav_home: "Home",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_stack: "Tech Stack",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_download_cv: "Download CV",

    // Hero
    hero_badge: "Available for new projects & opportunities",
    hero_greeting: "Hello, I am",
    hero_title: "Yoel Benedico Aguilera",
    hero_role: "Full-Stack Developer & Machine Learning",
    hero_subtitle:
      "Computer Science Engineer and Master in Applied Computer Science. 8+ years designing and building scalable web architectures, resilient APIs, and machine learning models focused on real-world impact.",
    hero_cta_projects: "Explore Projects",
    hero_cta_cv: "Download CV",
    hero_cta_contact: "Get in Touch",

    // Metric Cards
    metric_exp_number: "+8",
    metric_exp_label: "Years of professional experience",
    metric_master_badge: "M.Sc.",
    metric_master_label: "Master in Applied Computer Science (ML)",
    metric_students_number: "+200",
    metric_students_label: "Students mentored as university professor",
    metric_stack_label: "Full-Stack Specialist (Angular, React, Node, Spring)",

    // About
    about_title: "About Me",
    about_subtitle:
      "Career path, problem-solving mindset, and continuous learning.",
    about_p1:
      "I am a web developer and software engineer with hands-on experience building modular, high-performing applications using React.js, Angular (versions 8+), Node.js, and the MERN stack (MongoDB, Express, React, Node). I build reliable backend services, RESTful APIs, and microservices with Spring Boot, Node.js, and Django REST Framework, integrated with MySQL, PostgreSQL, and MongoDB databases.",
    about_p2:
      "In addition to industry experience, I served for over 6 years as a university professor teaching Object-Oriented Programming, Data Structures, Databases, and Artificial Intelligence. I hold a Master's Degree in Applied Computer Science where I researched and implemented Machine Learning solutions for cybersecurity.",
    about_p3:
      "I am known for being proactive, analytical, and an exceptional team player in multidisciplinary environments. My continuous focus is on elevating software craftsmanship, optimizing user experiences, and growing as a professional every single day.",
    about_soft_title: "Key Interpersonal Skills",
    soft_communication: "Clear Communication & Technical Writing",
    soft_teamwork: "Technical Leadership & Team Collaboration",
    soft_problem_solving: "Complex Problem-Solving Mindset",
    soft_adaptability: "Fast Learning & Adaptability",

    // Experience
    exp_title: "Work Experience",
    exp_subtitle:
      "Proven track record delivering reliable technological products.",
    exp_role_1: "Full-Stack Developer",
    exp_period_1: "02/2023 – Present",
    exp_company_1: "Transport Information System (Sitrans)",
    exp_desc_1_1:
      "Technical leadership in analysis, design, testing, and deployment of modular, high-availability enterprise web applications.",
    exp_desc_1_2:
      "Developed frontend architectures using Angular 8+, React.js, TailwindCSS, and Material UI.",
    exp_desc_1_3:
      "Implemented microservices and RESTful backend APIs using Spring Boot, Node.js, and Express with MySQL and MongoDB databases.",
    exp_desc_1_4:
      "Ensured code quality standards, system scalability, and promoted agile development methodologies within the team.",

    exp_role_2: "Full-Stack Developer & University Professor",
    exp_period_2: "09/2016 – 02/2023",
    exp_company_2: "Máximo Gómez Báez University",
    exp_desc_2_1:
      "Designed and implemented modular desktop and web applications using Angular, Node.js, Bootstrap, and Django REST Framework with MySQL and MongoDB.",
    exp_desc_2_2:
      "Managed full software development lifecycle (SDLC), from requirements elicitation through deployment.",
    exp_desc_2_3:
      "Delivered lectures and practical sessions in Object-Oriented Programming, Data Structures & Algorithms, Databases, and Artificial Intelligence, mentoring 200+ future engineers.",
    exp_desc_2_4:
      "Supervised and guided real-world software development projects solving organizational and industrial needs.",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle:
      "A curated selection of product engineering, tools, and applied AI.",
    proj_1_tag: "Web Platform · Global Education Management",
    proj_1_title: "IES Manager (Mifutura)",
    proj_1_desc:
      "Centralized data management platform for Futura applications. Tracks and coordinates courses, scholarships, academic programs, partner universities, and referrals across Mexico, Colombia, China, Argentina, and Cuba.",
    proj_1_skills:
      "React.js, Node.js, Express.js, MongoDB, MVC, Bootstrap, Postman, Git, Webpack.",
    proj_btn_visit: "Visit Platform",

    proj_2_tag: "Machine Learning · Cybersecurity",
    proj_2_title: "Proxy Traffic Pattern Detection Tool",
    proj_2_desc:
      "Applied ML research and tool for detecting anomalous behaviors and suspicious navigation patterns in proxy server logs using unsupervised learning (K-Means Clustering). Validated against the ISO/IEC 25010 software quality standard.",
    proj_2_skills:
      "Python, Scikit-learn, Anaconda, Web2py, MariaDB, K-Means, Data Analysis.",
    proj_btn_details: "View Thesis / Paper",

    proj_3_tag: "Network Security · Enterprise Backend",
    proj_3_title: "Proxy Server Trace & Navigation Control System",
    proj_3_desc:
      "Enterprise system for audit logs and web navigation trace visualization with user credential authentication against Active Directory domain servers via LDAP protocol and analytical reporting.",
    proj_3_skills:
      "Java, Play Framework, MySQL, Active Directory, LDAP, Bootstrap.",
    proj_btn_code: "View Architecture",

    proj_4_tag: "Operations Management · Microservices",
    proj_4_title: "Sitrans Information Platform",
    proj_4_desc:
      "Integrated suite of modules for corporate fleet logistics management, operation traceability, and high-performance reactive user interfaces.",
    proj_4_skills:
      "Angular 8+, Spring Boot, Node.js, TailwindCSS, MySQL, Docker.",
    proj_btn_info: "View Details",

    // Technologies / Stack
    stack_title: "Technologies I Use",
    stack_subtitle:
      "Languages, frameworks, and infrastructure tools I leverage daily.",
    stack_cat_all: "All",
    stack_cat_frontend: "Frontend",
    stack_cat_backend: "Backend & APIs",
    stack_cat_databases: "Databases",
    stack_cat_devops: "DevOps & Cloud",
    stack_cat_ml: "AI & Machine Learning",

    // Education
    edu_title: "Education & Academic Background",
    edu_subtitle:
      "Rigorous scientific foundation and computer science engineering.",
    edu_degree_1: "Master in Applied Computer Science",
    edu_period_1: "01/2019 – 02/2022",
    edu_inst_1: "Máximo Gómez Báez University",
    edu_desc_1:
      'Advanced specialization in Artificial Intelligence, Machine Learning, Big Data, Cybersecurity, and Cloud Computing. Thesis: "Computer Tool for Pattern Detection in Proxy Server Traffic Logs" using unsupervised clustering.',

    edu_degree_2: "Computer Science Engineering",
    edu_period_2: "09/2011 – 07/2016",
    edu_inst_2: "Máximo Gómez Báez University",
    edu_desc_2:
      '5-year engineering program covering Algorithms & Data Structures, Computer Networks, Operating Systems, Databases, and Software Engineering. Thesis: "Trace Control System for Proxy Server".',

    // Languages
    lang_title: "Languages",
    lang_es: "Spanish",
    lang_es_level: "Native",
    lang_en: "English",
    lang_en_level: "Intermediate / Professional (A2)",

    // Contact & Footer
    contact_title:
      "Have a project in mind or looking for an engineer on your team?",
    contact_subtitle:
      "I am available to collaborate on challenging projects and Full-Stack or Machine Learning roles.",
    contact_btn_email: "Send Email",
    contact_btn_whatsapp: "Chat on WhatsApp",
    contact_btn_linkedin: "Connect on LinkedIn",
    contact_btn_github: "GitHub Profile",
    contact_location:
      "Ciego de Ávila, Cuba · Available for remote work worldwide",
    footer_text:
      "Professionally designed & developed. © 2026 Yoel Benedico Aguilera.",
  },
};

// Exponer globalmente
window.translations = translations;
