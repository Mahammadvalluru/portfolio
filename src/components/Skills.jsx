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
  Repeat
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
  CheckCircle2: CheckCircle2
}

export default function Skills({ skills, darkMode }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...skills.categories.map((c) => c.name)]

  const filteredCategories =
    activeCategory === 'All'
      ? skills.categories
      : skills.categories.filter((c) => c.name === activeCategory)

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Primary':
        return 'bg-blue-500/15 text-blue-400 border-blue-500/30'
      case 'Advanced':
        return 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
      case 'Proficient':
        return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
      case 'Core':
        return 'bg-slate-500/15 text-slate-300 border-slate-500/30'
      default:
        return 'bg-slate-500/15 text-slate-300 border-slate-500/30'
    }
  }

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Specialized Tech Stack &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Core Competencies
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Categorized technical capabilities honed through enterprise projects, intensive training, and cloud certifications.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
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

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className={`rounded-2xl p-6 border transition-all hover:translate-y-[-2px] ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg tracking-tight text-blue-400">
                  {category.name}
                </h3>
                <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {category.items.length} skills
                </span>
              </div>
              <p className={`text-xs mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                {category.description}
              </p>

              <div className="space-y-2.5">
                {category.items.map((skill) => {
                  const Icon = iconMap[skill.icon] || Code2
                  return (
                    <div
                      key={skill.name}
                      className={`flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                        darkMode
                          ? 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold tracking-tight">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-medium ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

