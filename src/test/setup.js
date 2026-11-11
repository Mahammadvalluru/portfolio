import '@testing-library/jest-dom'
import { vi, beforeEach } from 'vitest'

// Mock window.scrollTo
window.scrollTo = () => {}

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver

// Default mock for fetch to ensure fast, reliable, offline-first unit and component tests
beforeEach(() => {
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
})
