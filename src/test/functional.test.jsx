import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import GitHubStats from '../components/GitHubStats'
import { portfolioData } from '../data/portfolioData'
import fs from 'fs'
import path from 'path'

describe('Functional Tests', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('validates contact form submission with empty fields', async () => {
    render(<Contact contact={portfolioData.contact} personal={portfolioData.personal} darkMode={true} />)
    const submitBtn = screen.getByRole('button', { name: /send message/i })
    
    // Form fields are required by HTML5 validation
    const nameInput = screen.getByLabelText(/your name/i)
    const emailInput = screen.getByLabelText(/your email/i)
    const messageInput = screen.getByLabelText(/message/i)

    expect(nameInput).toBeRequired()
    expect(emailInput).toBeRequired()
    expect(messageInput).toBeRequired()
  })

  it('submits contact form and displays success state', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    })

    render(<Contact contact={portfolioData.contact} personal={portfolioData.personal} darkMode={true} />)

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Tech Recruiter' } })
    fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'recruiter@company.com' } })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'We would love to interview you for a Java Developer position.' } })

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Your message has been sent successfully/i)).toBeInTheDocument()
    })
  })

  it('handles contact form network error gracefully', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'))

    render(<Contact contact={portfolioData.contact} personal={portfolioData.personal} darkMode={true} />)

    fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Tech Recruiter' } })
    fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'recruiter@company.com' } })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Interview opportunity.' } })

    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Could not connect directly/i)).toBeInTheDocument()
    })
  })

  it('verifies that the resume file exists on disk and is linked correctly in Hero', () => {
    render(<Hero personal={portfolioData.personal} darkMode={true} />)
    const downloadBtn = screen.getByRole('link', { name: /download resume/i })
    expect(downloadBtn).toHaveAttribute('href', portfolioData.personal.resumeDownloadUrl)

    // Verify file actually exists in public folder
    const publicPath = path.resolve(process.cwd(), 'public', portfolioData.personal.resumeFileName)
    expect(fs.existsSync(publicPath)).toBe(true)
  })

  it('handles GitHub API success and updates stats', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        public_repos: 24,
        followers: 18,
        following: 10,
        avatar_url: 'https://example.com/avatar.jpg',
        bio: 'Java Full Stack Developer'
      })
    })

    render(<GitHubStats githubStats={portfolioData.githubStats} darkMode={true} />)

    await waitFor(() => {
      expect(screen.getByText('24+')).toBeInTheDocument()
    })
  })

  it('handles GitHub API rate-limit or error with graceful fallback without breaking', async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error('API rate limit exceeded'))

    render(<GitHubStats githubStats={portfolioData.githubStats} darkMode={true} />)

    await waitFor(() => {
      // Fallback stats must be displayed
      expect(screen.getByText(`${portfolioData.githubStats.fallbackStats.publicRepos}+`)).toBeInTheDocument()
    })
  })
})

