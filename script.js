// Portfolio Data Object
const PORTFOLIO_DATA = {
  profile: {
    name: "Pedro Chaim",
    role: "Engenheiro de Software em Formação",
    subrole: "DSM @ FATEC São José dos Campos",
    bio: "Desde pequeno sou apaixonado por tecnologias e atualmente sou estudante de Desenvolvimento de Software Multiplataforma em busca de oportunidades na área de desenvolvimento de software ou análise de dados. Minha trajetória une a experiência analítica das áreas comercial e administrativa com o entusiasmo pela inovação tecnológica.",
    cvUrl: "https://portfolio-lovat-beta-35.vercel.app/img/cv/cv.pdf"
  },
  skills: [
    {
      category: "Back-End & Engenharia de Dados",
      icon: "bi bi-database",
      items: [
        { 
          name: "Python (FastAPI / Flask / Pandas)", 
          level: "Avançado", 
          icon: "devicon-python-plain",
          desc: "Desenvolvimento de APIs REST robustas e análise, processamento e raspagem de dados estatísticos/demográficos."
        },
        { 
          name: "Java (Fundamentals / Foundations)", 
          level: "Proficiente", 
          icon: "devicon-java-plain",
          desc: "Domínio de Programação Orientada a Objetos (POO), manipulação de coleções, exceções e lógica avançada."
        },
        { 
          name: "Kotlin (Android Development)", 
          level: "Intermediário", 
          icon: "devicon-kotlin-plain",
          desc: "Desenvolvimento de aplicativos móveis nativos para a plataforma Android integrando serviços web."
        },
        { 
          name: "Node.js (Express & TS)", 
          level: "Intermediário", 
          icon: "devicon-nodejs-plain",
          desc: "Criação de servidores e roteamento assíncrono em TypeScript com organização de arquitetura modular."
        },
        { 
          name: "Prisma ORM & SQL (MySQL)", 
          level: "Avançado", 
          icon: "devicon-mysql-plain",
          desc: "Modelagem lógica relacional, escrita de queries SQL estruturadas e controle de versionamento do banco via migrations."
        },
        { 
          name: "MongoDB (NoSQL)", 
          level: "Familiar", 
          icon: "devicon-mongodb-plain",
          desc: "Estruturação e persistência de dados não relacionais (documentos) focados em flexibilidade de esquema."
        }
      ]
    },
    {
      category: "Front-End & Interfaces",
      icon: "bi bi-layout-sidebar",
      items: [
        { 
          name: "React 19 & Vite", 
          level: "Avançado", 
          icon: "devicon-react-original",
          desc: "Criação de Single Page Applications (SPAs) modulares e reativas com componentização avançada e roteamento dinâmico."
        },
        { 
          name: "TypeScript", 
          level: "Proficiente", 
          icon: "devicon-typescript-plain",
          desc: "Tipagem estática estrita para o desenvolvimento de aplicações mais seguras, previsíveis e fáceis de refatorar."
        },
        { 
          name: "JavaScript (ES6+)", 
          level: "Proficiente", 
          icon: "devicon-javascript-plain",
          desc: "Consumo assíncrono de APIs, manipulação do DOM e aplicação de paradigmas funcionais/orientados a objetos."
        },
        { 
          name: "HTML5 & CSS3 / Vanilla CSS", 
          level: "Avançado", 
          icon: "devicon-html5-plain",
          desc: "Construção de páginas web semânticas com design estruturado e flexível através de CSS Flexbox e CSS Grid."
        },
        { 
          name: "Bootstrap (Layouts)", 
          level: "Avançado", 
          icon: "devicon-bootstrap-plain",
          desc: "Criação ágil de telas e protótipos de interfaces totalmente responsivas com componentes utilitários modernos."
        }
      ]
    },
    {
      category: "Práticas, Nuvem & Metodologias",
      icon: "bi bi-gear-fill",
      items: [
        { 
          name: "Metodologia Scrum", 
          level: "Avançado", 
          icon: "bi bi-people-fill",
          desc: "Experiência prática como Scrum Master liderando equipes na API do 2º Semestre em parceria com a Akaer." 
        },
        { 
          name: "Git & Versionamento", 
          level: "Avançado", 
          icon: "devicon-git-plain",
          desc: "Controle de fluxo de trabalho Git Flow e gerenciamento de branches em repositórios corporativos." 
        },
        { 
          name: "Docker & AWS", 
          level: "Intermediário", 
          icon: "devicon-docker-plain",
          desc: "Conteinerização de microserviços e deploy em nuvem utilizando instâncias EC2 e bancos relacionais RDS." 
        },
        { 
          name: "Deploy & CI/CD", 
          level: "Intermediário", 
          icon: "bi bi-cloud-arrow-up-fill",
          desc: "Hospedagem e configuração de deploys contínuos na Vercel e automações básicas do GitHub." 
        }
      ]
    }
  ],
  projects: [
    {
      title: "Auxia (API FATEC - 6º Semestre)",
      desc: "Assistente de Inteligência Artificial para avaliações e tomada de decisões corporativas baseadas em LLMs e bancos de dados vetoriais locais (RAG). Desenvolvido em equipe usando controle de acesso (RBAC), histórico de auditoria e integração com IA.",
      stack: ["Python", "FastAPI", "React", "MongoDB", "Poetry", "LLM"],
      github: "https://github.com/Spockchaim/API_ADS_6SEMESTE_2025.1"
    },
    {
      title: "JanoSys Akaer (API FATEC - 2º Semestre)",
      desc: "Sistema de catalogação, busca e auditoria de normas técnicas de engenharia aeroespacial desenvolvido em parceria com a Akaer. Permite o controle de revisões, histórico de alterações por normas e gerenciamento de permissões baseadas em papéis (RBAC). Atuei como Scrum Master e Desenvolvedor.",
      stack: ["React", "TypeScript", "Vite", "Bootstrap", "Scrum"],
      github: "https://github.com/janosystime/Janosys-Project-1-Akaer"
    },
    {
      title: "Aerocode Industrial Systems v3.0 (AV3)",
      desc: "Evolução do Aerocode para Full-Stack. Sistema para gestão de frotas e peças com persistência relacional. Apresenta um painel Kanban FIFO com travas lógicas e um módulo científico de medição de performance de concorrência com gráficos.",
      stack: ["React 19", "TypeScript", "Node.js", "Express", "Prisma ORM", "MySQL"],
      github: "https://github.com/Spockchaim/AV3",
      demo: "https://av-2-chaim.vercel.app"
    },
    {
      title: "Aerocode Industrial Systems v2.0 (AV2)",
      desc: "Dashboard interativo (SPA) para gerenciamento de frotas de manutenção aeroespacial. Contém um Kanban para linha de montagem com travas FIFO lógicas, relatórios e geração de laudos de aeronavegabilidade.",
      stack: ["React 19", "TypeScript", "Vite", "React Router 7", "LocalStorage"],
      github: "https://github.com/Spockchaim/AV2",
      demo: "https://av-2-chaim.vercel.app"
    },
    {
      title: "Aerocode CLI (AV1)",
      desc: "Sistema robusto em interface CLI para controle de ciclo de manufatura de aeronaves. Implementa autenticação RBAC, controle de estoque de peças importadas/nacionais e persistência em arquivos JSON simulando banco relacional.",
      stack: ["TypeScript", "Node.js", "POO", "Generics", "JSON"],
      github: "https://github.com/Spockchaim/AV1"
    },
    {
      title: "JanoSys IBGE (API FATEC - 1º Semestre)",
      desc: "Plataforma de visualização e análise de dados demográficos e econômicos do IBGE para São José dos Campos (SP). Minha atuação focou no backend com raspagem de dados via Pandas e geração de gráficos estatísticos interativos via Plotly.",
      stack: ["Python", "Flask", "Pandas", "Plotly", "Bootstrap"],
      github: "https://github.com/janosystime/Janosys-Project",
      demo: "https://janosys-project-api1.vercel.app/"
    },
    {
      title: "Clube do Milho",
      desc: "Landing page responsiva desenvolvida para fins de estudo e consolidação de boas práticas de estruturação HTML5 e estilização avançada com CSS3 e Bootstrap.",
      stack: ["HTML5", "CSS3", "Bootstrap", "GitHub"],
      github: "https://github.com/Spockchaim/Clube_do_Milho",
      demo: "https://clube-do-milho.vercel.app/"
    },
    {
      title: "Bar Buraco-do-Tatu",
      desc: "Website conceitual para um bar temático contendo cardápio digital dinâmico e interface responsiva otimizada para dispositivos móveis.",
      stack: ["HTML5", "CSS3", "Bootstrap", "GitHub"],
      github: "https://github.com/Spockchaim/bar-buraco-do-tatu",
      demo: "https://bar-buraco-do-tatu.vercel.app"
    }
  ],
  certificates: [
    {
      title: "Java Fundamentals",
      date: "Jun 2023",
      inst: "Oracle / SENAC",
      desc: "Introdução estruturada ao ecossistema Java, abordando sintaxe, lógica, arrays e tipos primitivos."
    },
    {
      title: "Java Foundations",
      date: "Dez 2023",
      inst: "Oracle / SENAC",
      desc: "Programação orientada a objetos (POO), herança, polimorfismo, tratamento de exceções e design patterns básicos."
    },
    {
      title: "Desenvolvimento para Android",
      date: "Jun 2024",
      inst: "SENAI",
      desc: "Criação de aplicativos nativas utilizando Kotlin, Android SDK, layouts e consumo de serviços Web."
    },
    {
      title: "Front-End Senac",
      date: "Fev 2024",
      inst: "SENAC",
      desc: "Fundamentos de HTML5, CSS3, controle de versão Git/GitHub e automação web.",
      link: "https://portfolio-lovat-beta-35.vercel.app/img/cv/cv.pdf"
    },
    {
      title: "Scrum - FGV",
      date: "Ago 2025",
      inst: "Fundação Getulio Vargas",
      desc: "Metodologias ágeis e gerenciamento de projetos através do framework Scrum.",
      link: "https://portfolio-lovat-beta-35.vercel.app/img/certificados/scrum_fgv.pdf"
    },
    {
      title: "Escola de Inovadores - CTPS",
      date: "Out 2025",
      inst: "Centro Paula Souza",
      desc: "Capacitação em empreendedorismo, inovação e estruturação de novos modelos de negócios.",
      link: "https://portfolio-lovat-beta-35.vercel.app/img/certificados/inovadores_cps.pdf"
    }
  ],
  events: [
    {
      title: "Python Brasil 2025",
      desc: "O maior evento de Python na América Latina. Oportunidade única de networking com a comunidade global, palestras avançadas sobre IA, dados e arquitetura de backend.",
      date: "2025",
      image: "img/pybrasil2025.jpg"
    },
    {
      title: "Maratona FATEC",
      desc: "Competição de programação focada no desenvolvimento de algoritmos avançados e estruturas de dados sob limite de tempo rigoroso.",
      date: "2025",
      image: "img/maratonaSJC.jpeg"
    },
    {
      title: "PyDay #1",
      desc: "Evento local promovido pela comunidade PythonSJC com foco no compartilhamento de experiências em Python, ciência de dados e engenharia de dados na região.",
      date: "2025",
      image: "img/pyday1.jpeg"
    },
    {
      title: "PyDay #2",
      desc: "Segunda edição do PyDay SJC, expandindo horizontes com minicursos de web scraping, automação e desenvolvimento de APIs em ecossistema Python.",
      date: "2025",
      image: "img/pyday2.jpeg"
    }
  ]
};

// DOM Renderer Functions
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.skills.map((cat, idx) => `
    <div class="skills-card">
      <div class="skills-card-header">
        <div class="skills-icon-box">
          <i class="${cat.icon}"></i>
        </div>
        <h3 class="skills-card-title">${cat.category}</h3>
      </div>
      <div class="skills-list">
        ${cat.items.map(s => `
          <div class="soft-skill-item">
            <div class="soft-skill-label">
              <span class="skill-name">
                ${s.icon ? `<i class="${s.icon} tech-icon"></i> ` : ''}${s.name}
              </span>
              ${s.level ? `<span class="skill-level-badge">${s.level}</span>` : ''}
            </div>
            <p class="soft-skill-desc">${s.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(p => `
    <article class="project-card">
      <div class="project-content">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-stack">
          ${p.stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `
            <a href="${p.github}" target="_blank" class="btn btn-secondary btn-sm">
              <i class="bi bi-github"></i> Repositório
            </a>
          ` : ''}
          ${p.demo ? `
            <a href="${p.demo}" target="_blank" class="btn btn-primary btn-sm">
              <i class="bi bi-box-arrow-up-right"></i> Ver Demo
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function renderCertificates() {
  const container = document.getElementById("certificates-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.certificates.map(c => `
    <div class="certificate-card">
      <div class="certificate-header">
        <span class="certificate-date"><i class="bi bi-calendar3"></i> ${c.date}</span>
        <span class="certificate-badge">${c.inst}</span>
      </div>
      <h3 class="certificate-title">${c.title}</h3>
      <p class="certificate-desc">${c.desc}</p>
      ${c.link ? `
        <a href="${c.link}" target="_blank" class="certificate-link">
          Ver Credencial <i class="bi bi-box-arrow-up-right"></i>
        </a>
      ` : ''}
    </div>
  `).join('');
}

// Render Events
function renderEvents() {
  const container = document.getElementById("events-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.events.map(e => `
    <article class="event-card">
      <div class="event-img-wrapper">
        <img src="${e.image}" alt="${e.title}" class="event-img" loading="lazy">
        <span class="event-date-badge">${e.date}</span>
      </div>
      <div class="event-body">
        <h3 class="event-title">${e.title}</h3>
        <p class="event-desc">${e.desc}</p>
      </div>
    </article>
  `).join('');
}

// Setup Current Year in Footer
function setupFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Shrink Header on Scroll
function handleHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
}

// Active Nav Item Link Highlighting on Scroll using IntersectionObserver
function setupNavigationHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // triggers when section is in the middle viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("data-section") === id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Mobile Menu Navigation Toggle
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-open");
    const isOpen = navMenu.classList.contains("menu-open");
    menuToggle.innerHTML = isOpen ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("menu-open");
      menuToggle.innerHTML = '<i class="bi bi-list"></i>';
    });
  });
}

// Trigger Skill Progress Fill Animation when Habilidades section comes into view
function setupSkillsAnimation() {
  const fillElements = document.querySelectorAll(".skill-progress-fill");
  if (fillElements.length === 0) return;

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const level = fill.getAttribute("data-level");
        fill.style.width = level;
        observer.unobserve(fill); // run only once
      }
    });
  }, observerOptions);

  fillElements.forEach(fill => observer.observe(fill));
}

// Initialize Page
function init() {
  setupFooterYear();
  renderSkills();
  renderProjects();
  renderCertificates();
  renderEvents();
  
  // Setup interactions and scroll animations
  handleHeaderScroll();
  setupNavigationHighlight();
  setupMobileMenu();
  setupSkillsAnimation();
}

document.addEventListener("DOMContentLoaded", init);
