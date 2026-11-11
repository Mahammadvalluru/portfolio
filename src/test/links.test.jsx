import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'
import fs from 'fs'
import path from 'path'

describe('Link and Asset Integrity Tests', () => {
  it('verifies that every navigation anchor matches an existing DOM section ID', () => {
    const { container } = render(<App />)

    const navLinks = container.querySelectorAll('header nav a, header div a')
    const hrefs = Array.from(navLinks)
      .map(a => a.getAttribute('href'))
      .filter(h => h && h.startsWith('#') && h.length > 1)

    const uniqueHrefs = [...new Set(hrefs)]
    expect(uniqueHrefs.length).toBeGreaterThan(0)

    for (const href of uniqueHrefs) {
      const targetId = href.substring(1)
      const targetEl = container.querySelector(`#${targetId}`)
      expect(targetEl, `Anchor ${href} should match an element with id="${targetId}"`).not.toBeNull()
    }
  })

  it('verifies that critical static assets exist in public folder', () => {
    const publicDir = path.resolve(process.cwd(), 'public')
    
    // Check resume PDF exists
    expect(fs.existsSync(path.join(publicDir, 'Mahammad_Valluru_Resume.pdf'))).toBe(true)

    // Check profile photo exists
    expect(fs.existsSync(path.join(publicDir, 'profile.jpg'))).toBe(true)
  })
})

