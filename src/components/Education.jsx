import React from 'react'
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen
} from 'lucide-react'

export default function Education({ education, darkMode }) {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>06. ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Academic Milestones
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Consistent academic excellence showcasing strong analytical capability, mathematical foundation, and engineering rigor.
          </p>
        </div>

        {/* Compact Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                      {item.grade}
                    </span>
                    <span className="text-xs font-mono text-blue-400/80 font-medium">
                      ({item.gradeHighlight})
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {item.degree}
                  </h3>
                  <div className={`flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm font-medium ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    <span className={`font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                      {item.institution}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <div className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border self-start sm:self-auto ${
                  darkMode ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mt-3 pt-3 border-t border-slate-800/50 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

