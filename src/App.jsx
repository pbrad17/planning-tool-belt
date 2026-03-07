import { useState, useEffect } from 'react'
import tools from './tools.jsx'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('toolbelt-theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('toolbelt-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-dark-bg)' }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-6 py-4 shadow-md"
        style={{ backgroundColor: 'var(--theme-title-bg)' }}
      >
        <div className="flex items-center gap-3">
          <span className="text-3xl">🛠️</span>
          <h1
            className="text-2xl font-bold tracking-tight"
            style={{ color: 'var(--theme-text)' }}
          >
            Pbrad's Planning Tool Belt
          </h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg transition-colors cursor-pointer"
          style={{
            backgroundColor: 'var(--theme-alt-bg)',
            color: 'var(--theme-accent)',
          }}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </header>

      {/* Subtitle */}
      <div className="text-center mt-8 mb-6 px-4">
        <p
          className="text-lg"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          Your financial planning toolkit — all in one place.
        </p>
      </div>

      {/* Tool Grid */}
      <main className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl p-6 transition-all duration-200 no-underline"
              style={{
                backgroundColor: 'var(--theme-card-bg)',
                border: '1px solid var(--theme-card-border)',
                boxShadow: '0 2px 8px var(--theme-card-shadow)',
                color: 'var(--theme-text)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--theme-card-hover-bg)'
                e.currentTarget.style.boxShadow = '0 4px 16px var(--theme-card-hover-shadow)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--theme-card-bg)'
                e.currentTarget.style.boxShadow = '0 2px 8px var(--theme-card-shadow)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0" style={{ color: 'var(--theme-steel-blue)' }}>
                  {tool.icon}
                </div>
                <div>
                  <h2
                    className="text-lg font-semibold mb-1"
                    style={{ color: 'var(--theme-text)' }}
                  >
                    {tool.name}
                    <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--theme-accent)' }}>
                      →
                    </span>
                  </h2>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--theme-text-secondary)' }}
                  >
                    {tool.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
