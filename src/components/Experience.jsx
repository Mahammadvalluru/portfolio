import React from 'react'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Terminal,
  Server
} from 'lucide-react'

export default function Experience({ experience, darkMode }) {
  const curriculumPhases = [
    {
      quarter: "Phase 1: Advanced Java Core & Systems",
      icon: Terminal,
      topics: "OOP Principles, Multithreading & Concurrency, Memory Management, Exception Hierarchies, Collections Framework, Streams API"
    },
    {
      quarter: "Phase 2: Relational Databases & SQL Optimization",
      icon: Database,
      topics: "Relational Schema Normalization (3NF), MySQL 8.0, Subqueries, Complex Multi-Table JOINs, Indexing & Query Profiling"
    },
    {
      quarter: "Phase 3: Enterprise Spring Boot & Architecture",
      icon: Layers,
      topics: "Spring Boot 3.x, Spring Data JPA, Hibernate ORM, Stateless JWT Authentication, BCrypt Hashing, n-Tier Separation"
    },
    {
      quarter: "Phase 4: Full-Stack Integration & QA",
      icon: ShieldCheck,
      topics: "React.js Component Architecture, RESTful API Contracts, Postman Automated Test Suites, Git Branching & GitHub CI/CD"
    }
  ]

  const item = experience[0] // TAP Academy 1-Year Program

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Work Experience &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Technical Training
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A track record of structured enterprise software development immersion and hands-on systems engineering.
          </p>
        </div>

        {/* Executive Immersion Showcase Card */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`p-6 sm:p-9 rounded-3xl border transition-all ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 shadow-xl shadow-blue-950/20'
                : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            {/* Header / Role Info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/25 font-semibold">
                    {item.badge}
                  </span>
                  <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                  <span className="flex items-center gap-1.5 font-semibold text-blue-400">
                    <Building2 className="w-4 h-4 text-blue-400" />
                    <span>{item.organization}</span>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Core Responsibilities & Impact */}
            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Core Engineering Responsibilities:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {item.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs sm:text-sm ${
                      darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Structured 4-Phase Curriculum Progression */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-4">
                Structured 4-Phase Enterprise Curriculum Mastered:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {curriculumPhases.map((phase, idx) => {
                  const IconComp = phase.icon
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all ${
                        darkMode
                          ? 'bg-slate-950/60 border-slate-800/90 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="p-1 rounded-md bg-blue-500/10 text-blue-400">
                          <IconComp className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold text-xs sm:text-sm text-slate-200">
                          {phase.quarter}
                        </span>
                      </div>
                      <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {phase.topics}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills Acquired Chips */}
            <div className="mt-7 pt-5 border-t border-slate-800 flex flex-wrap gap-2 items-center">
              <span className={`text-[11px] font-mono mr-1 uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Verified Stack:
              </span>
              {item.skillsAcquired.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all ${
                    darkMode
                      ? 'bg-slate-950/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
