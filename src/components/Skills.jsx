import React, { useState } from 'react'
import {
  Code2,
  Server,
  Database,
  Layout,
  Terminal,
  Cpu,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Container,
  Workflow,
  GitBranch,
  Send,
  Package,
  Boxes,
  Zap,
  HardDrive,
  GitCommit,
  Component,
  Palette,
  Smartphone,
  ArrowLeftRight,
  Box,
  Activity,
  FolderTree,
  TableProperties,
  Repeat,
  Star
} from 'lucide-react'

// Icon resolver map
const iconMap = {
  Coffee: Server,
  Database: Database,
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Layers: Layers,
  Network: Workflow,
  ShieldCheck: ShieldCheck,
  Cpu: Cpu,
  Zap: Zap,
  HardDrive: HardDrive,
  GitCommit: GitCommit,
  Component: Component,
  Palette: Palette,
  Smartphone: Smartphone,
  ArrowLeftRight: ArrowLeftRight,
  Boxes: Boxes,
  Container: Container,
  Workflow: Workflow,
  GitBranch: GitBranch,
  Send: Send,
  Package: Package,
  Terminal: Terminal,
  Cloud: Terminal,
  Box: Box,
  Activity: Activity,
  FolderTree: FolderTree,
  TableProperties: TableProperties,
  Repeat: Repeat,
  CheckCircle2: CheckCircle2,
  Sparkles: Sparkles
}

export default function Skills({ skills, darkMode }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...skills.categories.map((c) => c.name)]

  const filteredCategories =
    activeCategory === 'All'
      ? skills.categories
      : skills.categories.filter((c) => c.name === activeCategory)

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>03. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Technical Skills &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Core Competencies
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Organized into 7 focused engineering domains. Starred badges highlight core daily technologies verified through real enterprise projects and cloud certifications.
          </p>

          {/* Quick Highlight Banner */}
          <div className={`mt-6 px-4 py-2.5 rounded-xl border max-w-3xl flex flex-wrap items-center justify-center gap-2 text-xs font-mono ${
            darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
          }`}>
            <span className="font-semibold text-blue-400">Core Stack Focus:</span>
            <span className="font-semibold text-emerald-400">Java</span> •
            <span className="font-semibold text-emerald-400">Spring Boot</span> •
            <span className="font-semibold text-emerald-400">React.js</span> •
            <span className="font-semibold text-emerald-400">MySQL</span> •
            <span className="font-semibold text-emerald-400">REST APIs</span> •
            <span className="font-semibold text-emerald-400">Docker</span> •
            <span className="font-semibold text-emerald-400">Git</span> •
            <span className="font-semibold text-emerald-400">CI/CD</span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[36px] ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : darkMode
                    ? 'bg-slate-900/80 text-slate-300 hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/30 border border-slate-800'
                    : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 border border-slate-200 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Skills Grid by 7 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className={`rounded-2xl p-5 sm:p-6 border flex flex-col justify-between transition-all duration-200 hover:border-blue-500/40 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg tracking-tight text-blue-400">
                    {category.name}
                  </h3>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
                  }`}>
                    {category.items.length} skills
                  </span>
                </div>
                <p className={`text-xs mb-4 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {category.description}
                </p>

                {/* Compact Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.items.map((skill) => {
                    const Icon = iconMap[skill.icon] || Code2
                    const isHigh = skill.highlight
                    return (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          isHigh
                            ? darkMode
                              ? 'bg-blue-500/15 border-blue-500/40 text-blue-200 font-semibold shadow-sm'
                              : 'bg-blue-50 border-blue-300 text-blue-800 font-semibold shadow-sm'
                            : darkMode
                            ? 'bg-slate-950/70 border-slate-800/90 text-slate-300 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isHigh ? 'text-blue-400' : 'text-slate-400'}`} />
                        <span>{skill.name}</span>
                        {isHigh && (
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
