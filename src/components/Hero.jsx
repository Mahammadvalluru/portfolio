import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  FileDown,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Layers,
  GraduationCap,
  ShieldCheck,
  Cpu
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Hero({ personal, darkMode }) {
  const roles = personal.roleTitles
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState(roles[0] || 'Java Backend Developer')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(3000) // Initial linger pause so page load TBT is 0
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        if (displayedText.length + 1 === currentRole.length) {
          setTypingSpeed(2600)
          setIsDeleting(true)
        } else {
          setTypingSpeed(90)
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(400)
        } else {
          setTypingSpeed(50)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Subtle Architectural Atmosphere (No garish neon blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/[0.07] via-indigo-600/[0.03] to-transparent blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Immediate Availability Status Pill */}
            <div
              className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border mb-6 transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700/80 text-slate-200 shadow-sm'
                  : 'bg-white border-slate-200 text-slate-800 shadow-sm'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">Available to Join Immediately (0 Days Notice)</span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              <span className={`block font-medium text-lg sm:text-xl lg:text-2xl mb-2 font-mono ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                // JAVA BACKEND & FULL STACK DEVELOPER
              </span>
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                Hello, I'm{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-100">
                {personal.name}
              </span>
            </h1>

            {/* Animated Typing Title */}
            <div className="h-10 sm:h-12 mt-3 flex items-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-sm sm:text-base font-mono font-semibold border ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-blue-300'
                  : 'bg-blue-50/80 border-blue-200 text-blue-800'
              }`}>
                <span>{displayedText}</span>
                <span className="inline-block w-0.5 h-4 sm:h-5 bg-blue-400 animate-pulse"></span>
              </div>
            </div>

            {/* Value Proposition */}
            <p
              className={`mt-5 text-base sm:text-lg leading-relaxed max-w-2xl font-normal ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {personal.valueProposition}
            </p>

            {/* Quick Metadata Badges */}
            <div
              className={`mt-6 flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-blue-50/80 border-blue-200/70 text-slate-800'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{personal.location}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-mono ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 text-emerald-400'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Pan-India Mobility</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 text-slate-300'
                  : 'bg-amber-50/80 border-amber-200/80 text-amber-800'
              }`}>
                <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                <span>B.Tech ECE (CGPA 8.62)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeDownloadUrl}
                download={personal.resumeFileName}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
              >
                <FileDown className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </a>

              {/* One-Click Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-sm border transition-all active:scale-95 ${
                  darkMode
                    ? 'border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-white'
                    : 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300 shadow-sm'
                }`}
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Connect & Social Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Direct Connect:
              </span>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-blue-500/10 text-blue-300 hover:text-white hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                    : 'bg-white text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-sm'
                }`}
                title="GitHub Profile (@Mahammadvalluru)"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-blue-500/10 text-blue-300 hover:text-white hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                    : 'bg-white text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-sm'
                }`}
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={`mailto:${personal.email}`}
                className={`p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-blue-500/10 text-blue-300 hover:text-white hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                    : 'bg-white text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-sm'
                }`}
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={`tel:${personal.phone}`}
                className={`p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-blue-500/10 text-blue-300 hover:text-white hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-500/40'
                    : 'bg-white text-blue-600 hover:text-blue-700 hover:bg-blue-50 border border-blue-200 shadow-sm'
                }`}
                title="Direct Phone (+91 70755 78570)"
                aria-label="Call Mobile"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>

              <a
                href={personal.whatsappUrl || `https://wa.me/917075578570`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2.5 rounded-xl transition-all ${
                  darkMode
                    ? 'bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40'
                    : 'bg-white text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 border border-emerald-200 shadow-sm'
                }`}
                title="Chat on WhatsApp"
                aria-label="Chat on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Circular Portrait with Concentric Precision Rings */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative flex flex-col items-center">
              
              {/* Outer Precision Orbital Ring */}
              <div className="relative p-3.5 sm:p-4 rounded-full border border-blue-500/20 bg-gradient-to-b from-blue-500/10 via-transparent to-slate-900/40">
                
                {/* Secondary Bezel Ring */}
                <div className={`p-2 rounded-full border transition-all ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-700/80 shadow-2xl shadow-blue-950/50'
                    : 'bg-white border-slate-200 shadow-xl'
                }`}>
                  
                  {/* Circular Image Container */}
                  <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-slate-900 aspect-square">
                    <img
                      src="/profile.jpg"
                      alt="Mahammad Valluru - Java Backend & Full Stack Developer"
                      width="600"
                      height="600"
                      loading="eager"
                      fetchPriority="high"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />

                    {/* Subtle bottom gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>

                {/* Live Engineering Status Pill (Attached to bottom of circle) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-semibold text-white tracking-wide">
                    Ready to Deploy
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                    Fresher
                  </span>
                </div>
              </div>

              {/* 3 Academic & Technical Proof Metric Chips */}
              <div className="mt-8 grid grid-cols-3 gap-3 w-full max-w-sm text-center">
                <div className={`p-3 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-lg font-bold text-blue-400 font-mono">8.62</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    CGPA (B.Tech)
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-lg font-bold text-amber-400 font-mono">AIR 471</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    APECET Rank
                  </div>
                </div>

                <div className={`p-3 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/70 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="text-lg font-bold text-emerald-400 font-mono">C2</div>
                  <div className={`text-[10px] uppercase tracking-wider font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    EF SET English
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
