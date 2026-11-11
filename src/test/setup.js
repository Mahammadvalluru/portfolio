import '@testing-library/jest-dom'

// Mock window.scrollTo
window.scrollTo = () => {}

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver

