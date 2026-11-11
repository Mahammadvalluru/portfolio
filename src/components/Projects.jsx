import React, { useState } from 'react'
import {
  FolderGit2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Server,
  Database,
  ShieldCheck,
  Workflow,
  Zap,
  Check
} from 'lucide-react'
import { GithubIcon } from './Icons'
import ProjectModal from './ProjectModal'

// Pre-defined architecture flow steps for key projects
const projectArchitectures = {
  shopverse: [
    { label: "React 19 SPA", sub: "Client Tier" },
    { label: "Spring Security", sub: "JWT / BCrypt" },
    { label: "Spring Boot 3.2", sub: "REST APIs" },
    { label: "Redis 7 (<50ms)", sub: "Cache Layer" },
    { label: "MySQL 8.0", sub: "Flyway Migrations" },
    { label: "Docker CI/CD", sub: "Containerized" }
  ],
  "job-board": [
    { label: "React Client", sub: "Role Dashboards" },
    { label: "JWT Filter", sub: "Stateless Auth" },
    { label: "Spring Boot", sub: "RBAC Services" },
    { label: "MySQL 8.0", sub: "Indexed Queries" },
    { label: "GitHub Actions", sub: "Automated CI/CD" }
  ],
  "java-chat": [
    { label: "TCP Sockets", sub: "Client Endpoints" },
    { label: "Server Loop", sub: "Socket Listener" },
    { label: "Thread Pool", sub: "Worker Dispatch" },
    { label: "Sync Queues", sub: "Lock Coordination" },
    { label: "Broadcast", sub: "Channel Dispatch" }
  ],
  "resume-ai": [
    { label: "Next.js / React", sub: "UI & State" },
    { label: "Claude API", sub: "LLM Reasoning" },
    { label: "Supabase DB", sub: "Persistence" },
    { label: "React-PDF", sub: "Dynamic Export" }
  ]
}

const enterpriseArchitectureBlueprint = [
  {
    tier: "01. Presentation Tier",
    tech: "React 19 • Tailwind CSS • Axios",
    decision: "Single-Page Application with decoupled REST consumption and responsive mobile-first UI.",
    highlights: ["Component modularity", "Optimistic state management", "Sub-second client hydration"]
  },
  {
    tier: "02. Gateway & Security",
    tech: "Spring Security 6 • JWT • BCrypt",
    decision: "Stateless HMAC-SHA256 token verification eliminating server session memory overhead.",
    highlights: ["Role-Based Access Control (RBAC)", "CORS & CSRF hardened", "Salted password hashing"]
  },
  {
    tier: "03. Business Logic Tier",
    tech: "Spring Boot 3.2 • REST APIs • Java 17",
    decision: "Strict n-tier separation across Controller, Service, and Repository layers with global error handling.",
    highlights: ["Atomic transaction management", "DTO payload mapping", "REST API standards"]
  },
  {
    tier: "04. Persistence & Caching",
    tech: "MySQL 8.0 • Spring Data JPA • Redis 7",
    decision: "Normalized 3NF relational schemas with Redis caching for high-read endpoints to protect the DB.",
    highlights: ["Sub-50ms cache hits", "Flyway schema migrations", "Composite index optimizations"]
  },
  {
    tier: "05. DevOps & Automation",
    tech: "Docker Compose • GitHub Actions • Vercel",
    decision: "Immutable containerized services with continuous integration verifying every commit against test suites.",
    highlights: ["Zero-manual deployment", "Automated Vitest/JUnit runs", "Reproducible runtime environments"]
  }
]

export default function Projects({ projects, darkMode }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>02. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Featured Projects &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Production Architectures
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Real-world backend systems and full-stack platforms engineered with clean architecture, security best practices, and automated CI/CD.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => {
            const archSteps = projectArchitectures[project.id] || []
            return (
              <article
                key={project.id}
                className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:translate-y-[-3px] ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-blue-950/20'
                    : 'bg-white border-slate-200 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Card Header & Content */}
                <div className="p-6 sm:p-7 pb-4">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25 font-semibold">
                        {project.badge}
                      </span>
                      {project.suggested && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/25 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Applied AI</span>
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-mono font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {project.summary}
                  </p>

                  {/* Visual Architecture Dataflow Schematic */}
                  {archSteps.length > 0 && (
                    <div className={`p-3 rounded-xl border mb-5 overflow-hidden ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1">
                          <Workflow className="w-3 h-3" />
                          <span>System Dataflow & Pipeline</span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">End-to-End</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                        {archSteps.map((step, idx) => (
                          <React.Fragment key={idx}>
                            <div className={`px-2 py-1 rounded border flex flex-col ${
                              darkMode ? 'bg-slate-900 border-slate-700/80 text-slate-200' : 'bg-white border-slate-300 text-slate-800'
                            }`}>
                              <span className="font-semibold text-[10px]">{step.label}</span>
                              <span className="text-[9px] text-blue-400">{step.sub}</span>
                            </div>
                            {idx < archSteps.length - 1 && (
                              <ChevronRight className="w-3 h-3 text-slate-500 flex-shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Problem & Solution Callout Boxes */}
                  <div className="space-y-3 mb-5">
                    <div
                      className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                        darkMode ? 'bg-rose-950/15 border-rose-500/20' : 'bg-rose-50 border-rose-200'
                      }`}
                    >
                      <span className="font-semibold text-rose-400 block mb-1">
                        Challenge / Problem Solved:
                      </span>
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {project.problem}
                      </span>
                    </div>

                    <div
                      className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                        darkMode ? 'bg-blue-950/20 border-blue-500/25' : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      <span className="font-semibold text-blue-400 block mb-1">
                        Architecture & Engineering Solution:
                      </span>
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {project.solution}
                      </span>
                    </div>
                  </div>

                  {/* My Role & Contribution */}
                  <div className={`p-3 rounded-xl border mb-5 ${
                    darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>My Hands-On Contribution</span>
                    </div>
                    <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {project.myRole}
                    </p>
                  </div>

                  {/* Key Highlights / Features */}
                  {project.highlights && (
                    <div className="mb-5 space-y-1.5">
                      <span className={`text-[11px] font-mono uppercase tracking-wider block font-semibold ${
                        darkMode ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        Key Engineering Highlights:
                      </span>
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${
                          darkMode
                            ? 'bg-slate-800/70 border-slate-700/80 text-blue-300'
                            : 'bg-slate-100 border-slate-200 text-slate-800'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div
                  className={`p-4 sm:px-7 sm:py-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                    darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group py-1 min-h-[44px]"
                  >
                    <span>Full Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all min-h-[44px] ${
                          darkMode
                            ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white'
                            : 'bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-sm'
                        }`}
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>{project.githubLabel || 'GitHub'}</span>
                      </a>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors min-h-[44px]"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{project.liveLabel || 'Live Demo'}</span>
                      </a>
                    ) : (
                      <span className={`text-[11px] font-mono px-2.5 py-1.5 rounded-lg border ${
                        darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
                      }`}>
                        REST Backend Architecture
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* 5-Tier Production Architecture Standard Section */}
        <div
          className={`p-6 sm:p-9 rounded-3xl border ${
            darkMode
              ? 'bg-slate-900/60 border-slate-800 shadow-xl shadow-blue-950/20'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Server className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                  Engineering Blueprint
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                5-Tier Production Architecture Standard
              </h3>
              <p className={`text-xs sm:text-sm mt-1 max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                The architectural pattern implemented across all backend services: decoupled clients, stateless security tokens, n-tier separation, in-memory caching, and automated CI/CD.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/25 font-semibold">
                Clean Architecture
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {enterpriseArchitectureBlueprint.map((layer, index) => (
              <div
                key={index}
                className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
                  darkMode ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-blue-400 font-bold block mb-1">
                    {layer.tier}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm mb-2 text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {layer.tech}
                  </h4>
                  <p className={`text-[11px] leading-relaxed mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {layer.decision}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/60 space-y-1">
                  {layer.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep-dive Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        darkMode={darkMode}
      />
    </section>
  )
}
