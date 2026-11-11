import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import App from '../App'
import { portfolioData } from '../data/portfolioData'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Education from '../components/Education'
import GitHubStats from '../components/GitHubStats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

describe('Component Render Tests', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  it('renders the complete App without crashing', () => {
    const { container } = render(<App />)
    expect(container).toBeDefined()
  })

  it('renders Hero section with candidate name and role', () => {
    render(<Hero personal={portfolioData.personal} darkMode={true} />)
    expect(screen.getAllByText(new RegExp(portfolioData.personal.name, 'i')).length).toBeGreaterThan(0)
    expect(screen.getByText(portfolioData.personal.availabilityBadge)).toBeInTheDocument()
  })

  it('renders About section with personal story and recruiter facts', () => {
    render(<About about={portfolioData.about} personal={portfolioData.personal} darkMode={true} />)
    expect(screen.getByText(/From ECE to Full Stack/i)).toBeInTheDocument()
    expect(screen.getByText(/Recruiter Quick Facts/i)).toBeInTheDocument()
    expect(screen.getByText(/B.Tech in ECE, MITS/i)).toBeInTheDocument()
  })

  it('renders Skills section with categorized tech stack', () => {
    render(<Skills skills={portfolioData.skills} darkMode={true} />)
    expect(screen.getAllByText(/Languages/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Backend Development/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Frontend Development/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Databases/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Tools and DevOps/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Testing and Deployment/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/AI\/ML and Generative AI/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Spring Boot/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Java \(17 \/ 21\)/i).length).toBeGreaterThan(0)
  })

  it('renders Projects section with case studies', () => {
    render(<Projects projects={portfolioData.projects} darkMode={true} />)
    expect(screen.getByText(/ShopVerse/i)).toBeInTheDocument()
    expect(screen.getByText(/Job Board/i)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(portfolioData.projects[2].title, 'i'))).toBeInTheDocument()
  })

  it('renders Experience section with TAP Academy', () => {
    render(<Experience experience={portfolioData.experience} darkMode={true} />)
    expect(screen.getByText(/TAP Academy/i)).toBeInTheDocument()
    expect(screen.queryByText(/Garuda Aerospace/i)).not.toBeInTheDocument()
  })

  it('renders Certifications section with Oracle AI and Google Cloud', () => {
    render(
      <Certifications
        certifications={portfolioData.certifications}
        achievements={portfolioData.achievements}
        darkMode={true}
      />
    )
    expect(screen.getAllByText(/Oracle Cloud Infrastructure/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Google Cloud Digital Leader/i)).toBeInTheDocument()
    expect(screen.getByText(/EF SET English Certificate/i)).toBeInTheDocument()
  })

  it('renders Education section with MITS, Diploma, and Class X', () => {
    render(<Education education={portfolioData.education} darkMode={true} />)
    expect(screen.getByText(/Madanapalle Institute of Technology & Science/i)).toBeInTheDocument()
    expect(screen.getByText(/Government Polytechnic College/i)).toBeInTheDocument()
  })

  it('renders GitHub Activity section with username', () => {
    render(<GitHubStats githubStats={portfolioData.githubStats} darkMode={true} />)
    expect(screen.getByText(/Open Source & Code Activity/i)).toBeInTheDocument()
  })

  it('renders Contact section with email, phone, and direct links', () => {
    render(<Contact contact={portfolioData.contact} personal={portfolioData.personal} darkMode={true} />)
    expect(screen.getByText(portfolioData.contact.email)).toBeInTheDocument()
    expect(screen.getByText(portfolioData.contact.phoneDisplay)).toBeInTheDocument()
  })

  it('renders Footer with copyright and social links', () => {
    render(<Footer personal={portfolioData.personal} darkMode={true} />)
    expect(screen.getAllByText(new RegExp(portfolioData.personal.name, 'i')).length).toBeGreaterThan(0)
  })

  it('toggles dark and light mode and persists in localStorage', () => {
    render(<App />)
    const themeBtn = screen.getByLabelText(/toggle color theme/i)
    expect(themeBtn).toBeInTheDocument()

    // Default is dark
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    // Click to switch to light
    fireEvent.click(themeBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')

    // Click back to dark
    fireEvent.click(themeBtn)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(localStorage.getItem('theme')).toBe('dark')
  })
})
