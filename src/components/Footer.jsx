import React from 'react'
import {
  Mail,
  Phone,
  ArrowUp,
  Heart,
  Terminal
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer({ personal, darkMode }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`border-t py-12 transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/50">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm">
              MV
            </div>
            <div>
              <div className={`font-bold text-sm tracking-tight ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {personal.name}
              </div>
              <div className="text-xs font-mono text-blue-400">
                Java Backend & Full Stack Developer
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-600'
              }`}
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-600'
              }`}
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className={`p-2 rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-600'
              }`}
              title="Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personal.phone}`}
              className={`p-2 rounded-xl transition-colors ${
                darkMode ? 'hover:bg-slate-800 text-slate-400 hover:text-white' : 'hover:bg-slate-200 text-slate-600'
              }`}
              title="Phone"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
              darkMode
                ? 'border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300'
                : 'border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-700 shadow-sm'
            }`}
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left ${
          darkMode ? 'text-slate-400' : 'text-slate-600'
        }`}>
          <p>
            © {new Date().getFullYear()} {personal.name}. All rights reserved. Open for immediate hiring.
          </p>
          <p className="flex items-center gap-1 justify-center">
            <span>Built with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
