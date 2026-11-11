import https from 'https'
import http from 'http'
import { portfolioData } from '../data/portfolioData.js'

const links = [
  { name: 'LinkedIn', url: portfolioData.personal.linkedin },
  { name: 'GitHub Profile', url: portfolioData.personal.github },
  { name: 'ShopVerse GitHub', url: portfolioData.projects[0].githubUrl },
  { name: 'ShopVerse Live', url: portfolioData.projects[0].liveUrl },
  { name: 'Job Board GitHub', url: portfolioData.projects[1].githubUrl },
  { name: 'Job Board Live', url: portfolioData.projects[1].liveUrl },
  { name: 'Task Mgmt GitHub', url: portfolioData.projects[2].githubUrl },
  { name: 'ResumeAI GitHub', url: portfolioData.projects[3].githubUrl },
  { name: 'Oracle Verify', url: portfolioData.certifications[0].verifyUrl },
  { name: 'Google Cloud Verify', url: portfolioData.certifications[1].verifyUrl },
  { name: 'EF SET Verify', url: portfolioData.certifications[2].verifyUrl },
  { name: 'Cisco Verify', url: portfolioData.certifications[3].verifyUrl },
  { name: 'Technohacks Verify', url: portfolioData.certifications[4].verifyUrl },
].filter(l => l.url)

async function checkUrl(item) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(item.url)
      const client = parsed.protocol === 'https:' ? https : http
      const req = client.request(item.url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }, timeout: 6000 }, (res) => {
        resolve({ ...item, status: res.statusCode, ok: res.statusCode >= 200 && res.statusCode < 400 })
      })
      req.on('error', (err) => resolve({ ...item, status: 'ERROR: ' + err.message, ok: false }))
      req.on('timeout', () => { req.destroy(); resolve({ ...item, status: 'TIMEOUT', ok: false }) })
      req.end()
    } catch (e) {
      resolve({ ...item, status: 'INVALID URL', ok: false })
    }
  })
}

async function run() {
  console.log(`Checking ${links.length} external links...`)
  const results = await Promise.all(links.map(checkUrl))
  for (const r of results) {
    console.log(`[${r.ok ? 'PASS' : 'FAIL'}] ${r.name}: ${r.url} -> ${r.status}`)
  }
}

run()

