import React from 'react'
import {
  User,
  GraduationCap,
  Briefcase,
  Clock,
  Code,
  Award,
  Globe2,
  CheckCircle,
  Cpu,
  Layers,
  Database,
  ShieldCheck,
  Server,
  ArrowRight
} from 'lucide-react'

export default function About({ about, personal, darkMode }) {
  const highlights = [
    {
      icon: Cpu,
      title: "Core Java & OOP Discipline",
      description: "Thorough grounding in OOP, multithreading, exception handling, collections framework, and JVM memory lifecycle."
    },
    {
      icon: Layers,
      title: "Clean n-Tier Architecture",
      description: "Proven separation of concerns across Controller, Service, and Repository layers using Spring Boot 3.x and Spring Data JPA."
    },
    {
      icon: Database,
      title: "Database Design & Caching",
      description: "Relational schema modeling in MySQL, indexing, Flyway migrations, and sub-millisecond Redis caching."
    },
    {
      icon: ShieldCheck,
      title: "Security & Automated CI/CD",
      description: "Stateless JWT authorization, BCrypt encryption, Docker containerization, and GitHub Actions build verification pipelines."
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            From ECE to Full Stack{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Backend Engineering
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            A focused look into my technical journey, core engineering discipline, and readiness to deliver value from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Story & Strengths (Left: 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                  My Journey & Engineering Mindset
                </span>
              </h3>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {about.story.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

              {/* What I Bring to Your Team */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 font-mono">
                  Core Engineering Capabilities I Deliver
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {highlights.map((item, idx) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={idx}
                        className={`p-4 rounded-xl border transition-all ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200/80'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className={`font-semibold text-sm ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                            {item.title}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                          {item.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar (Right: 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 sm:p-7 rounded-2xl border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 shadow-lg shadow-black/20'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-5">
                <h3 className="font-bold text-base sm:text-lg flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                    Recruiter Quick Facts
                  </span>
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  Ready to Hire
                </span>
              </div>

              <div className="divide-y divide-slate-800/60">
                {about.quickFacts.map((fact, index) => (
                  <div key={index} className="py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-xs sm:text-sm">
                    <span className={`font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {fact.label}
                    </span>
                    <span className="font-semibold text-right text-blue-400 font-mono">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pan-India Relocation Callout */}
              <div
                className={`mt-6 p-4 rounded-xl border flex items-start gap-3 ${
                  darkMode
                    ? 'bg-slate-950/70 border-blue-500/30 text-slate-300'
                    : 'bg-blue-50 border-blue-200 text-slate-800'
                }`}
              >
                <Globe2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <span className="font-semibold text-blue-400">Mobility & Notice:</span>{' '}
                  {personal.openToRelocation}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
