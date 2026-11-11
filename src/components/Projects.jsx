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
  ChevronRight
} from 'lucide-react'
import { GithubIcon } from './Icons'
import ProjectModal from './ProjectModal'

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
            <span>03. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Case Studies &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Production Architectures
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deep-dive project breakdowns detailing the problem solved, architectural decisions, database schemas, and my hands-on implementation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:translate-y-[-3px] ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-blue-950/20'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* Card Header & Badges */}
              <div className="p-6 sm:p-7 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                      {project.badge}
                    </span>
                    {project.suggested && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>Suggested Repo</span>
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {project.summary}
                </p>

                {/* Problem & Solution Callout Boxes */}
                <div className="space-y-3 mb-5">
                  <div
                    className={`p-3.5 rounded-xl border text-xs leading-relaxed ${
                      darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="font-semibold text-rose-400 block mb-1">
                      Problem Statement:
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
                      Solution & Architecture:
                    </span>
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {project.solution}
                    </span>
                  </div>
                </div>

                {/* My Role */}
                <div className={`p-3 rounded-xl border mb-5 ${darkMode ? 'bg-slate-950/30 border-slate-800/80' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400 mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>My Role & Implementation</span>
                  </div>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {project.myRole}
                  </p>
                </div>

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
                  darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => handleOpenModal(project)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group py-1"
                >
                  <span>Case Study Details</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors"
                      title="Open Live Deployment"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{project.liveLabel || 'Live Demo'}</span>
                    </a>
                  ) : (
                    <span className={`text-[11px] font-mono px-2 py-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      REST Backend API
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
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
