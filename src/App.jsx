import React, { useState, useEffect } from 'react'
import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Education from './components/Education'
import GitHubStats from './components/GitHubStats'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or default to dark
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
    return true // Dark by default
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Subtle Grid Texture */}
      <div
        className={`fixed inset-0 pointer-events-none -z-20 ${
          darkMode ? 'bg-grid-pattern opacity-60' : 'bg-grid-pattern-light opacity-80'
        }`}
      ></div>

      {/* 1. Sticky Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        personal={portfolioData.personal}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          personal={portfolioData.personal}
          darkMode={darkMode}
        />

        {/* 2. About Me Section */}
        <About
          about={portfolioData.about}
          personal={portfolioData.personal}
          darkMode={darkMode}
        />

        {/* 3. Skills Section */}
        <Skills
          skills={portfolioData.skills}
          darkMode={darkMode}
        />

        {/* 4. Projects Section */}
        <Projects
          projects={portfolioData.projects}
          darkMode={darkMode}
        />

        {/* 5. Experience Section */}
        <Experience
          experience={portfolioData.experience}
          darkMode={darkMode}
        />

        {/* 6. Certifications & Achievements Section */}
        <Certifications
          certifications={portfolioData.certifications}
          achievements={portfolioData.achievements}
          darkMode={darkMode}
        />

        {/* 7. Education Section */}
        <Education
          education={portfolioData.education}
          darkMode={darkMode}
        />

        {/* 8. GitHub Activity & Repos */}
        <GitHubStats
          githubStats={portfolioData.githubStats}
          darkMode={darkMode}
        />

        {/* 9. Contact Section */}
        <Contact
          contact={portfolioData.contact}
          personal={portfolioData.personal}
          darkMode={darkMode}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        personal={portfolioData.personal}
        darkMode={darkMode}
      />
    </div>
  )
}

