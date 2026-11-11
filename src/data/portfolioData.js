/**
 * Portfolio Data for Mahammad Valluru
 * Centralized data file: Edit any content, links, or skills here!
 */

export const portfolioData = {
  personal: {
    name: "Mahammad Valluru",
    initials: "MV",
    headline: "Java Backend & Full Stack Developer | Spring Boot | React.js | MySQL | Docker | CI/CD",
    roleTitles: [
      "Java Backend Developer",
      "Spring Boot Engineer",
      "Full Stack Developer",
      "Cloud & Docker Enthusiast"
    ],
    valueProposition:
      "Engineering robust, scalable Java & Spring Boot backend services and responsive full-stack applications with clean architecture, enterprise security, and automated CI/CD pipelines.",
    email: "vallurumahammad786@gmail.com",
    phone: "+91 7075578570",
    displayPhone: "+91 70755 78570",
    location: "Hyderabad, Telangana, India",
    openToRelocation: "Open to immediate opportunities across India (Hyderabad, Bengaluru, Pune, NCR, Chennai, Remote/Hybrid)",
    availabilityBadge: "Available to Join Immediately (0 Days Notice)",
    linkedin: "https://www.linkedin.com/in/mahammad-valluru-7bba08272",
    github: "https://github.com/Mahammadvalluru",
    githubUsername: "Mahammadvalluru",
    resumeFileName: "Mahammad_Valluru_Resume.pdf",
    resumeDownloadUrl: `${import.meta.env.BASE_URL}Mahammad_Valluru_Resume.pdf`,
  },

  about: {
    summary:
      "B.Tech graduate in Electronics & Communication Engineering who made a purposeful transition into software engineering. I build secure, scalable backend applications with Java, Spring Boot, REST APIs, and MySQL, with JWT authentication, Redis caching, Docker containerization, and GitHub Actions CI/CD. Oracle Cloud Infrastructure AI Foundations certified with a strong passion for resilient architecture and clean code.",
    story: [
      "My engineering journey began in Electronics & Communication Engineering (ECE), where I developed a deep appreciation for logical problem solving, signal processing, and systems thinking. During my academic projects, I discovered my true passion lay in how software powers modern systems—specifically, backend services, high-concurrency architectures, and database design.",
      "To transform this passion into industry-ready engineering competence, I completed an intensive 1-year Java Full Stack Development immersion at TAP Academy, Bengaluru. There, I mastered Core Java, object-oriented principles, multithreading, relational database modeling with MySQL, and enterprise microservices using Spring Boot, Hibernate, and RESTful APIs.",
      "Today, I build production-grade web platforms—from scalable e-commerce systems with atomic stock reservations and Redis caching to full-stack recruitment platforms with role-based access control. I am an immediate joiner eager to contribute high-impact code to forward-thinking engineering teams as a Java Developer, Associate Software Engineer, or Full Stack Developer."
    ],
    quickFacts: [
      { label: "Target Roles", value: "Java Developer, Associate Software Engineer, Full Stack Developer" },
      { label: "Education", value: "B.Tech in ECE, MITS (CGPA 8.62)" },
      { label: "Location", value: "Hyderabad, Telangana (Pan-India Mobility)" },
      { label: "Notice Period", value: "Immediate Joiner (0 Days)" },
      { label: "Core Stack", value: "Java 17, Spring Boot, MySQL, React.js, Docker" },
      { label: "Certifications", value: "Oracle Cloud AI, Google Cloud Digital Leader" },
      { label: "English Proficiency", value: "EF SET C2 Proficient (Score: 86/100)" }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming Languages",
        description: "Core programming and querying languages for robust backend logic",
        items: [
          { name: "Java (17 / 21)", level: "Primary", icon: "Coffee", highlight: true },
          { name: "SQL", level: "Advanced", icon: "Database", highlight: true },
          { name: "JavaScript (ES6+)", level: "Proficient", icon: "Code2", highlight: true },
          { name: "HTML5 & CSS3", level: "Proficient", icon: "Layout", highlight: false }
        ]
      },
      {
        name: "Backend Development",
        description: "Enterprise application frameworks, microservices, and secure API architectures",
        items: [
          { name: "Spring Boot", level: "Primary", icon: "Server", highlight: true },
          { name: "Spring Data JPA / Hibernate", level: "Advanced", icon: "Layers", highlight: true },
          { name: "RESTful APIs", level: "Advanced", icon: "Network", highlight: true },
          { name: "Spring Security & JWT", level: "Advanced", icon: "ShieldCheck", highlight: true },
          { name: "Microservices Architecture", level: "Intermediate", icon: "Cpu", highlight: false },
          { name: "Multithreading & Concurrency", level: "Advanced", icon: "Activity", highlight: true },
          { name: "Socket Programming (TCP/IP)", level: "Intermediate", icon: "Workflow", highlight: false }
        ]
      },
      {
        name: "Frontend Development",
        description: "Modern, component-driven client applications and responsive user interfaces",
        items: [
          { name: "React.js", level: "Proficient", icon: "Component", highlight: true },
          { name: "Tailwind CSS", level: "Proficient", icon: "Palette", highlight: false },
          { name: "Responsive UI/UX", level: "Proficient", icon: "Smartphone", highlight: false },
          { name: "Axios & Fetch APIs", level: "Proficient", icon: "ArrowLeftRight", highlight: false },
          { name: "State Management (Zustand / Hooks)", level: "Proficient", icon: "Boxes", highlight: false }
        ]
      },
      {
        name: "Databases",
        description: "Relational modeling, indexing, schema migrations, and caching solutions",
        items: [
          { name: "MySQL 8.0", level: "Advanced", icon: "Database", highlight: true },
          { name: "Redis (Caching & Rate Limiting)", level: "Intermediate", icon: "Zap", highlight: true },
          { name: "Relational Schema Normalization", level: "Advanced", icon: "TableProperties", highlight: false },
          { name: "Flyway Database Migrations", level: "Familiar", icon: "GitCommit", highlight: false },
          { name: "Query Indexing & Optimization", level: "Advanced", icon: "TableProperties", highlight: false }
        ]
      },
      {
        name: "Tools and DevOps",
        description: "Version control, containerization, build automation, and developer tooling",
        items: [
          { name: "Git & GitHub", level: "Advanced", icon: "GitBranch", highlight: true },
          { name: "Docker & Docker Compose", level: "Proficient", icon: "Container", highlight: true },
          { name: "Apache Maven", level: "Advanced", icon: "Package", highlight: false },
          { name: "Postman", level: "Advanced", icon: "Send", highlight: true },
          { name: "IntelliJ IDEA & VS Code", level: "Advanced", icon: "Terminal", highlight: false },
          { name: "Linux / CLI Fundamentals", level: "Proficient", icon: "Terminal", highlight: false }
        ]
      },
      {
        name: "Testing and Deployment",
        description: "Automated verification pipelines, API integration testing, and cloud hosting",
        items: [
          { name: "GitHub Actions (CI/CD)", level: "Proficient", icon: "Workflow", highlight: true },
          { name: "REST API Testing (Postman)", level: "Advanced", icon: "Send", highlight: true },
          { name: "JUnit & Mockito Fundamentals", level: "Proficient", icon: "CheckCircle2", highlight: false },
          { name: "Vercel & Cloud Deployment", level: "Proficient", icon: "Cloud", highlight: false },
          { name: "Container Orchestration", level: "Proficient", icon: "Container", highlight: false }
        ]
      },
      {
        name: "AI/ML and Generative AI",
        description: "Certified AI foundations, applied LLM integration, and AI-assisted engineering",
        items: [
          { name: "Generative AI Foundations", level: "Certified", icon: "Sparkles", highlight: true },
          { name: "Oracle Cloud AI Associate", level: "Certified", icon: "ShieldCheck", highlight: true },
          { name: "LLM API Integration (Claude API)", level: "Proficient", icon: "Cpu", highlight: true },
          { name: "Prompt Engineering & ATS Parsing", level: "Proficient", icon: "Box", highlight: false },
          { name: "AI Dev Tools (GitHub Copilot / Cursor)", level: "Proficient", icon: "Code2", highlight: false }
        ]
      }
    ]
  },

  projects: [
    {
      id: "shopverse",
      title: "ShopVerse — E-Commerce Platform",
      tagline: "High-performance full-stack e-commerce system with Redis caching, Stripe workflows & Docker CI/CD",
      badge: "Production Architecture",
      featured: true,
      category: "Full Stack / E-Commerce",
      summary:
        "Engineered a scalable full-stack e-commerce platform built on Spring Boot 3.2 and React. Features Redis caching for sub-50ms catalog retrieval, Stripe PaymentIntent with HMAC-SHA256 webhook verification, BCrypt password hashing, Flyway migrations, and automated multi-container Docker deployment.",
      problem:
        "High-traffic e-commerce backends suffer from catalog lookup bottlenecks, over-selling race conditions during concurrent checkouts, and security vulnerabilities during payment callback webhook processing.",
      solution:
        "Architected an enterprise-style Spring Boot 3.2 micro-monolith with Redis 7 caching to offload database reads, implemented atomic stock reservation logic to eliminate over-selling, integrated Stripe PaymentIntent with HMAC-SHA256 signature verification, and containerized the multi-service stack with Docker and GitHub Actions.",
      myRole:
        "Lead Backend & Full Stack Engineer — designed relational database schema in MySQL with Flyway migrations, implemented JWT access/refresh token lifecycle, created Redis caching layer, built Stripe webhook listener, and configured Docker Compose multi-service orchestration.",
      techStack: [
        "Java 17",
        "Spring Boot 3.2",
        "MySQL 8.0",
        "Redis 7",
        "React.js",
        "Tailwind CSS",
        "Stripe API",
        "Docker",
        "GitHub Actions",
        "Flyway"
      ],
      highlights: [
        "Sub-50ms product catalog retrieval enabled by Redis 7 caching layer",
        "Atomic inventory reservation workflow preventing race conditions during checkout",
        "Secure Stripe PaymentIntent integration with HMAC-SHA256 webhook signature validation",
        "Multi-layer authentication: JWT access + refresh tokens, Google OAuth2, password reset",
        "Flyway database migrations ensuring zero-downtime, reproducible schema evolution",
        "Full CI/CD pipeline building, testing, and packaging multi-container images via GitHub Actions"
      ],
      githubUrl: "https://github.com/Mahammadvalluru/Ecommerce-Application",
      liveUrl: null, // [PLACEHOLDER - Deploy to Vercel/Railway when ready]
      githubLabel: "View Repository",
      liveLabel: null
    },
    {
      id: "job-board",
      title: "Job Board — Full Stack Recruitment Platform",
      tagline: "Recruitment portal with role-based access control, application pipelines & automated CI/CD",
      badge: "Full Stack",
      featured: true,
      category: "Full Stack / Web Application",
      summary:
        "End-to-end recruitment management platform connecting job seekers with hiring managers. Features role-based access control (Applicant vs. Recruiter), dynamic job search with multi-parameter filtering, real-time application status tracking, and continuous deployment via GitHub Actions.",
      problem:
        "Job seekers and recruiters frequently deal with fragmented hiring portals lacking seamless application tracking, role-specific dashboard boundaries, and responsive search performance.",
      solution:
        "Designed and implemented a decoupled architecture featuring a Spring Boot REST API and a responsive React frontend. Secured sensitive endpoints using Spring Security and stateless JWT authentication, implemented indexed MySQL queries for fast filtering, and automated linting and build tests via GitHub Actions CI/CD.",
      myRole:
        "Full Stack Developer — modeled the relational database schema in MySQL, implemented REST controllers and service business logic, built JWT authentication filters, and created dynamic React dashboard views with responsive Tailwind styling.",
      techStack: [
        "Java",
        "Spring Boot",
        "React.js",
        "MySQL",
        "Spring Security",
        "JWT",
        "REST APIs",
        "Tailwind CSS",
        "GitHub Actions"
      ],
      highlights: [
        "Role-Based Access Control (RBAC) cleanly separating Recruiter and Applicant dashboards",
        "Multi-criteria job search filtering by category, salary, experience, and location",
        "Live applicant pipeline tracking: Applied → Under Review → Interview → Offer/Rejected",
        "Clean n-tier separation across Controller, Service, and Repository layers",
        "Automated continuous integration and build verification via GitHub Actions"
      ],
      githubUrl: "https://github.com/Mahammadvalluru/Job_Board",
      liveUrl: null, // [PLACEHOLDER - Deploy to Vercel when ready]
      githubLabel: "View Repository",
      liveLabel: null
    },
    {
      id: "java-chat",
      title: "Java Multithreaded Chat Application",
      tagline: "Real-time client-server chat system leveraging Java Socket programming, multithreading & concurrency",
      badge: "Core Java & Networking",
      featured: true,
      category: "Backend / Concurrency",
      summary:
        "Multi-client real-time messaging application engineered with Core Java, TCP Socket programming, and multithreading. Features broadcast channels, synchronized message queues, and thread-safe connection pooling.",
      problem:
        "Handling concurrent TCP socket streams without blocking other connected clients or causing race conditions during message broadcasts.",
      solution:
        "Architected a dedicated client handler worker pool utilizing Java Threads and synchronization locks. Managed client socket lifecycle cleanly with custom connection state protocols and centralized server logging.",
      myRole:
        "Backend Developer — designed server socket listener loop, worker thread dispatching, broadcast queue synchronization, and console/GUI client handlers.",
      techStack: [
        "Java 17",
        "Multithreading",
        "TCP Sockets",
        "Java I/O & NIO",
        "Concurrency Utils",
        "OOP Patterns"
      ],
      highlights: [
        "Thread-safe client dispatching preventing race conditions during concurrent broadcasts",
        "Low-latency TCP socket communication with graceful disconnect detection",
        "Demonstrates deep Core Java fundamentals, socket programming, and concurrency lifecycle"
      ],
      githubUrl: "https://github.com/Mahammadvalluru/JavaChatApplicationn",
      liveUrl: null,
      githubLabel: "View Repository",
      liveLabel: null
    },
    {
      id: "resume-ai",
      title: "ResumePro / ResumeAI — Intelligent Resume Engine",
      tagline: "Next-generation ATS resume optimization engine with Claude AI integration and dynamic PDF generation",
      badge: "Full Stack & Applied AI",
      featured: false,
      suggested: true,
      category: "Full Stack & Applied AI",
      summary:
        "Full-stack AI assistant that analyzes resumes against target job descriptions, delivers instantaneous ATS compatibility scores, and exports professional PDF resumes. Leverages modern LLM capabilities with Supabase data persistence.",
      problem:
        "Job seekers and freshers face high rejection rates due to formatting mismatches and keyword gaps on automated Applicant Tracking Systems (ATS).",
      solution:
        "Created an interactive web application that integrates LLM reasoning to parse job descriptions, identify key missing competencies, suggest impactful action-verb revisions, and compile pixel-perfect PDFs in real time.",
      myRole:
        "Full Stack Developer — implemented client-side state with Zustand, integrated Anthropic Claude API prompts for ATS semantic matching, and styled responsive layouts.",
      techStack: [
        "React",
        "Next.js",
        "Supabase",
        "Anthropic Claude API",
        "Tailwind CSS",
        "React-PDF",
        "Zustand"
      ],
      highlights: [
        "ATS score calculator with detailed section-by-section semantic keyword gap analysis",
        "Real-time PDF compiler leveraging React-PDF for immediate export",
        "Connected with Oracle Cloud AI Foundations Associate certification skills"
      ],
      githubUrl: "https://github.com/Mahammadvalluru/Resumepro",
      liveUrl: null,
      githubLabel: "View Repository",
      liveLabel: null
    }
  ],

  experience: [
    {
      role: "Java Full Stack Development Trainee",
      organization: "TAP Academy",
      location: "Bengaluru, Karnataka, India",
      period: "Jan 2025 – Dec 2025",
      type: "Full-Time Intensive Immersion",
      badge: "1 Year Enterprise Program",
      responsibilities: [
        "Completed rigorous 1-year immersion in enterprise software development covering Core Java, OOP, Multithreading, Exception Handling, Collections Framework, and JVM fundamentals.",
        "Designed and normalized relational database schemas in MySQL; optimized complex JOIN queries, subqueries, and database indexing for high read performance.",
        "Engineered production-grade web applications utilizing Spring Boot, Spring Security (JWT authentication), Spring Data JPA, and RESTful web service architecture.",
        "Built responsive single-page web user interfaces using HTML5, CSS3, JavaScript (ES6+), and React.js, integrating seamlessly with backend REST APIs.",
        "Practiced test-driven API verification using Postman collections and version control with Git & GitHub in an Agile Scrum environment."
      ],
      skillsAcquired: ["Core Java", "Spring Boot", "Hibernate / JPA", "MySQL", "REST APIs", "React.js", "Postman", "Git"]
    }
  ],

  certifications: [
    {
      id: "oracle-ai",
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      issueDate: "Aug 2025",
      credentialId: "OCI-AI-2025-VALLURU",
      verifyUrl: "https://catalog-education.oracle.com/",
      category: "Cloud & AI",
      badgeColor: "emerald",
      skills: ["Artificial Intelligence", "Machine Learning", "Oracle Cloud Infrastructure", "Generative AI Foundations"]
    },
    {
      id: "google-cloud",
      title: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      issueDate: "May 2026",
      credentialId: "GCP-DL-2026",
      verifyUrl: "https://cloud.google.com/certification",
      category: "Cloud Architecture",
      badgeColor: "blue",
      skills: ["Google Cloud Core Services", "Cloud Architecture", "Security & Compliance", "Cloud Modernization"]
    },
    {
      id: "efset-english",
      title: "EF SET English Certificate — C2 Proficient (86/100)",
      issuer: "EF Standard English Test (EF SET)",
      issueDate: "Apr 2026",
      credentialId: "EFSET-C2-86",
      verifyUrl: "https://www.efset.org/cert/",
      category: "Communication",
      badgeColor: "amber",
      skills: ["C2 Proficient English", "Executive Communication", "Technical Writing", "Global Collaboration"]
    },
    {
      id: "cisco-network",
      title: "Cisco Networking Essentials",
      issuer: "Cisco Networking Academy",
      issueDate: "Jul 2024",
      credentialId: "CISCO-NET-2024",
      verifyUrl: "https://www.credly.com/",
      category: "Networking & Infrastructure",
      badgeColor: "cyan",
      skills: ["TCP/IP", "Subnetting", "DNS & HTTP/HTTPS Protocols", "Network Security Fundamentals"]
    },
    {
      id: "technohacks-java",
      title: "Java Development",
      issuer: "Technohacks EduTech",
      issueDate: "Jun 2024",
      credentialId: "TECH-JAVA-2024",
      verifyUrl: null, // Certificate ID verified
      category: "Software Development",
      badgeColor: "purple",
      skills: ["Core Java", "OOP Design Patterns", "Console & GUI Applications"]
    }
  ],

  achievements: [
    {
      title: "All India Rank 471 — APECET 2025",
      subtitle: "State-Level Engineering Common Entrance Test",
      description:
        "Achieved rank 471 out of tens of thousands of engineering candidates across the state, demonstrating exceptional analytical aptitude and core technical proficiency.",
      icon: "Trophy",
      metric: "AIR 471"
    },
    {
      title: "Technical Volunteer & Coordinator",
      subtitle: "ECLECTICA 2023 National Symposium",
      description:
        "Coordinated technical event setups, audio-visual infrastructure, and scheduling for university-wide technical symposium participants.",
      icon: "Award",
      metric: "National Event"
    }
  ],

  education: [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Madanapalle Institute of Technology & Science (MITS)",
      location: "Madanapalle, Andhra Pradesh, India",
      period: "2022 – 2025",
      grade: "CGPA: 8.62 / 10",
      gradeHighlight: "Distinction",
      description:
        "Strong foundation in mathematics, analytical problem solving, digital systems, and embedded computing. Transitioned to software engineering through rigorous programming coursework, algorithms, and database systems."
    },
    {
      degree: "Diploma in Electronics & Communication Engineering",
      institution: "Government Polytechnic College",
      location: "Rayachoti, Andhra Pradesh, India",
      period: "2019 – 2022",
      grade: "Score: 85.0%",
      gradeHighlight: "First Class with Distinction",
      description:
        "Intensive technical foundation in electronic circuits, microprocessor fundamentals, and foundational computational logic."
    },
    {
      degree: "Secondary School Certificate (Class X)",
      institution: "ZP High School",
      location: "Rayachoti, Andhra Pradesh, India",
      period: "2018 – 2019",
      grade: "CGPA: 9.2 / 10",
      gradeHighlight: "Top Academic Tier",
      description:
        "Completed secondary education with high academic distinction in mathematics and general sciences."
    }
  ],

  githubStats: {
    username: "Mahammadvalluru",
    profileUrl: "https://github.com/Mahammadvalluru",
    fallbackStats: {
      publicRepos: 18,
      followers: 12,
      following: 15,
      totalStars: 24,
      contributionsThisYear: 420
    },
    pinnedRepos: [
      {
        name: "Ecommerce-Application",
        description: "Full-stack e-commerce engine built with Java 17, Spring Boot, MySQL, Redis & Docker containerization.",
        language: "Java",
        languageColor: "#b07219",
        stars: 3,
        forks: 1,
        url: "https://github.com/Mahammadvalluru/Ecommerce-Application"
      },
      {
        name: "Job_Board",
        description: "Full-stack recruitment portal with Spring Boot, React, MySQL, JWT authentication & CI/CD.",
        language: "Java",
        languageColor: "#b07219",
        stars: 2,
        forks: 1,
        url: "https://github.com/Mahammadvalluru/Job_Board"
      },
      {
        name: "JavaChatApplicationn",
        description: "Real-time client-server multithreaded chat service using Java TCP Sockets & concurrency.",
        language: "Java",
        languageColor: "#b07219",
        stars: 2,
        forks: 0,
        url: "https://github.com/Mahammadvalluru/JavaChatApplicationn"
      },
      {
        name: "Resumepro",
        description: "Intelligent ATS resume analyzer & builder with Next.js, Claude API & Supabase.",
        language: "TypeScript",
        languageColor: "#3178c6",
        stars: 2,
        forks: 0,
        url: "https://github.com/Mahammadvalluru/Resumepro"
      }
    ]
  },

  contact: {
    heading: "Let's Build Something Exceptional Together",
    subheading:
      "I am actively interviewing for Java Developer, Associate Software Engineer, and Full Stack Developer roles in India. Available for immediate joining.",
    formspreeEndpoint: "https://formspree.io/f/xvgzpyvb", // User can replace with their formspree ID or EmailJS
    email: "vallurumahammad786@gmail.com",
    phone: "+91 7075578570",
    phoneDisplay: "+91 70755 78570",
    location: "Hyderabad, Telangana, India (Pan-India Mobility)",
    linkedin: "https://www.linkedin.com/in/mahammad-valluru-7bba08272",
    github: "https://github.com/Mahammadvalluru",
    whatsappUrl: "https://wa.me/917075578570?text=Hi%20Mahammad,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
  }
};
