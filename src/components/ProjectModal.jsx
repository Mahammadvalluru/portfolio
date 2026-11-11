import React from 'react'
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Layers,
  Database,
  Terminal,
  Server
} from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, isOpen, onClose, darkMode }) {
  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div
        className={`relative w-full max-w-3xl rounded-2xl border shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden transition-all ${
          darkMode
            ? 'bg-slate-900 border-slate-800 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Case Study
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {project.title}
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className={`p-4 rounded-xl border ${
                darkMode ? 'bg-rose-950/15 border-rose-500/20' : 'bg-rose-50 border-rose-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-rose-400">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.problem}
              </p>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                darkMode ? 'bg-blue-950/20 border-blue-500/25' : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-blue-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Solution & Architecture</span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* My Role / Key Responsibilities */}
          <div className={`p-4 rounded-xl border ${darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>My Role & Engineering Contribution</span>
            </h4>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              {project.myRole}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Key Technical Highlights & Implementation Details</span>
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                    darkMode
                      ? 'bg-slate-800 border-slate-700 text-blue-300'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className={`p-4 sm:p-6 border-t flex flex-wrap items-center justify-between gap-3 ${
          darkMode ? 'border-slate-800/60 bg-slate-950/40' : 'border-slate-200 bg-slate-50/80'
        }`}>
          <button
            onClick={onClose}
            className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-colors ${
              darkMode
                ? 'border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-white'
                : 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 shadow-sm'
            }`}
          >
            Close Overview
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl border transition-colors ${
                  darkMode
                    ? 'bg-slate-900 hover:bg-slate-800 text-white border-blue-500/30 hover:border-blue-500/60'
                    : 'bg-white hover:bg-blue-50 text-blue-700 border-blue-200 shadow-sm'
                }`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Deployment</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
