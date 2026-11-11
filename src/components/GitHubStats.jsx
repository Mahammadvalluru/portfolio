import React, { useState, useEffect } from 'react'
import {
  GitFork,
  Star,
  ExternalLink,
  BookOpen,
  Users,
  Code2,
  Sparkles,
  Activity,
  Layers
} from 'lucide-react'
import { GithubIcon } from './Icons'

export default function GitHubStats({ githubStats, darkMode }) {
  const [profileData, setProfileData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    // Attempt to fetch public user details from GitHub REST API
    const fetchGithubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${githubStats.username}`)
        if (res.ok) {
          const data = await res.json()
          if (isMounted) {
            setProfileData({
              publicRepos: data.public_repos,
              followers: data.followers,
              following: data.following,
              avatar: data.avatar_url,
              bio: data.bio
            })
          }
        } else {
          // Graceful fallback to mock/preconfigured stats
          if (isMounted) setProfileData(githubStats.fallbackStats)
        }
      } catch (err) {
        // Network failure / offline fallback
        if (isMounted) setProfileData(githubStats.fallbackStats)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchGithubData()
    return () => {
      isMounted = false
    }
  }, [githubStats])

  const stats = profileData || githubStats.fallbackStats

  return (
    <section id="github" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>07. OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            GitHub Activity &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-slate-200">
              Repository Showcase
            </span>
          </h2>
          <p className={`mt-3 text-sm sm:text-base max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Live overview of repositories, version control discipline, and open-source contributions.
          </p>
        </div>

        {/* GitHub Stats Metric Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          <div
            className={`p-5 rounded-2xl border text-center transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono">
              {stats.publicRepos ?? 18}+
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Public Repos</span>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border text-center transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono">
              {stats.followers ?? 12}+
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              <Users className="w-3.5 h-3.5" />
              <span>Followers</span>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border text-center transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 font-mono">
              Java 17
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              <Code2 className="w-3.5 h-3.5" />
              <span>Primary Lang</span>
            </div>
          </div>

          <div
            className={`p-5 rounded-2xl border text-center transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              100%
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-1">
              <Activity className="w-3.5 h-3.5" />
              <span>CI/CD Automated</span>
            </div>
          </div>
        </div>

        {/* Pinned Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {githubStats.pinnedRepos.map((repo) => (
            <div
              key={repo.name}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:translate-y-[-2px] ${
                darkMode
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-lg'
                  : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-base sm:text-lg text-blue-400 hover:text-blue-300 flex items-center gap-2"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{repo.name}</span>
                  </a>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-1"
                    title="View on GitHub"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.languageColor }}
                  ></span>
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-slate-400" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Link Button */}
        <div className="text-center">
          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 transition-all active:scale-95"
          >
            <GithubIcon className="w-4 h-4 text-white" />
            <span>Visit @{githubStats.username} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
