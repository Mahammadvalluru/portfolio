import { test, expect } from '@playwright/test'

test.describe('Portfolio E2E Tests', () => {
  test('Page loads with zero console errors', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await page.goto('/')
    await expect(page).toHaveTitle(/Mahammad Valluru/i)
    expect(consoleErrors).toEqual([])
  })

  test('Hero section displays candidate name, photo, and immediate availability', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('h1')
    await expect(heading).toContainText('Mahammad Valluru')

    // Profile photo exists and is visible
    const profileImg = page.locator('img[src="/profile.jpg"]')
    await expect(profileImg).toBeVisible()

    // Immediate availability badge
    await expect(page.locator('text=Available to Join Immediately')).toBeVisible()
  })

  test('Theme toggle switches between dark and light modes', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    await expect(html).toHaveClass(/dark/)

    // Toggle to light mode
    const toggleBtn = page.locator('button[aria-label="Toggle color theme"]')
    await toggleBtn.click()
    await expect(html).not.toHaveClass(/dark/)

    // Toggle back to dark mode
    await toggleBtn.click()
    await expect(html).toHaveClass(/dark/)
  })

  test('Case study modal opens and closes properly', async ({ page }) => {
    await page.goto('/')
    const caseStudyBtn = page.locator('button:has-text("Case Study Details")').first()
    await caseStudyBtn.click()

    // Modal appears
    await expect(page.getByText('The Problem', { exact: true })).toBeVisible()
    await expect(page.getByText('The Solution & Architecture', { exact: true })).toBeVisible()

    // Close modal
    await page.locator('button:has-text("Close Overview")').click()
    await expect(page.locator('button:has-text("Close Overview")')).not.toBeVisible()
  })

  test('Responsive viewport test: No horizontal overflow at 375px, 768px, and 1440px', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 },   // Mobile
      { width: 768, height: 1024 },  // Tablet
      { width: 1440, height: 900 }   // Desktop
    ]

    for (const vp of viewports) {
      await page.setViewportSize(vp)
      await page.goto('/')
      await page.waitForLoadState('networkidle')

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth
      })

      expect(hasHorizontalScroll, `Horizontal scroll detected at viewport ${vp.width}x${vp.height}`).toBe(false)
    }
  })
})
