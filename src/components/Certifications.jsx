import React from 'react'
import {
  Award,
  ExternalLink,
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react'

export default function Certifications({ certifications, achievements, darkMode }) {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05. CERTIFICATIONS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Credentials &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Key Achievements
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Industry credentials validating technical competencies across Cloud, Artificial Intelligence, Networking, and English communication.
          </p>
        </div>

        {/* Certifications Grid (Badge Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all hover:translate-y-[-2px] ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:shadow-lg hover:shadow-blue-950/20'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    {cert.category}
                  </span>
                  <span className={`text-xs font-mono flex items-center gap-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <Calendar className="w-3 h-3" />
                    {cert.issueDate}
                  </span>
                </div>

                <h3 className="font-bold text-base sm:text-lg leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-blue-400 font-semibold mb-4">
                  Issued by {cert.issuer}
                </p>

                {/* Skills covered */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <span className={`text-[10px] font-mono truncate max-w-[150px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  ID: {cert.credentialId}
                </span>
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Honors & Achievements Showcase */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight inline-flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>Competitive & Leadership Achievements</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((ach, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border flex items-start gap-4 transition-all ${
                  darkMode
                    ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      {ach.metric}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{ach.subtitle}</span>
                  </div>
                  <h4 className="text-base font-bold tracking-tight mb-2">
                    {ach.title}
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

