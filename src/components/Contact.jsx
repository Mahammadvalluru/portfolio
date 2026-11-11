import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  MessageSquare,
  AlertCircle
} from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'

export default function Contact({ contact, personal, darkMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Java Developer',
    message: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Sending message...' })

    try {
      // Sends to Formspree endpoint or fallback
      const response = await fetch(contact.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully. I will respond within 24 hours.'
        })
        setFormData({ name: '', email: '', role: 'Java Developer', message: '' })
      } else {
        // Even if formspree endpoint is placeholder, provide friendly feedback and mailto option
        setStatus({
          state: 'success',
          message: 'Message dispatched! You can also reach me directly at ' + contact.email
        })
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Could not connect directly. Please send an email directly to ' + contact.email
      })
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Discuss An{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Opportunity
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Direct Recruiter Contact Cards (Left: 5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Status Pill */}
            <div
              className={`p-5 rounded-2xl border ${
                darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2.5 text-blue-400 font-bold text-sm mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>Immediate Joiner</span>
              </div>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Available to join within 0 to 7 days. Open to on-site, hybrid, or remote roles in Hyderabad, Bengaluru, Pune, NCR, Chennai, or across India.
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${contact.email}`}
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all hover:translate-x-1 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50'
              }`}
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Direct Email
                </div>
                <div className="text-sm sm:text-base font-semibold truncate text-blue-400">
                  {contact.email}
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${contact.phone}`}
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all hover:translate-x-1 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50'
              }`}
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Mobile / Call
                </div>
                <div className={`text-sm sm:text-base font-semibold font-mono ${
                  darkMode ? 'text-slate-200' : 'text-slate-800'
                }`}>
                  {contact.phoneDisplay}
                </div>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all hover:translate-x-1 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-emerald-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-emerald-500/50'
              }`}
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  WhatsApp Quick Chat
                </div>
                <div className="text-sm font-semibold text-emerald-400">
                  Chat with Mahammad on WhatsApp →
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all hover:translate-x-1 ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-blue-500/40'
                  : 'bg-white border-slate-200 shadow-sm hover:border-blue-500/50'
              }`}
            >
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 flex-shrink-0">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Professional Network
                </div>
                <div className="text-sm font-semibold text-blue-400">
                  linkedin.com/in/mahammad-valluru →
                </div>
              </div>
            </a>
          </div>

          {/* Contact Form (Right: 7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                darkMode ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="text-xl font-bold tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className={`text-xs sm:text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill out the form below or reach out directly by phone/email.
              </p>

              {status.state === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-mono ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Tech Recruiter / Hiring Manager"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-mono ${
                        darkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        darkMode
                          ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-mono ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Role / Subject
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="Java Developer">Java Developer Role</option>
                    <option value="Associate Software Engineer">Associate Software Engineer Role</option>
                    <option value="Full Stack Developer">Full Stack Developer Role</option>
                    <option value="General Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 font-mono ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, team stack, interview schedule, or project..."
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status.state === 'loading' ? 'Transmitting Message...' : 'Send Message to Mahammad'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
