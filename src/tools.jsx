const tools = [
  {
    name: 'Portfolio Allocation',
    description: 'Manage portfolio allocations across accounts with target profiles, live prices, and one-click PDF reports.',
    url: 'https://portfolio-allocation-eight.vercel.app',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <path d="M24 4 A20 20 0 0 1 44 24 L24 24 Z" fill="var(--theme-accent)" opacity="0.85" />
        <path d="M44 24 A20 20 0 0 1 14 41.3 L24 24 Z" fill="var(--theme-steel-blue)" opacity="0.85" />
        <path d="M14 41.3 A20 20 0 0 1 24 4 L24 24 Z" fill="var(--theme-header-bg)" opacity="0.85" />
      </svg>
    ),
  },
  {
    name: 'Loan Amortization',
    description: 'Calculate loan amortization schedules with extra payment support and downloadable PDF reports.',
    url: 'https://loan-amortization-pbrad17s-projects.vercel.app',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
        <line x1="6" y1="16" x2="42" y2="16" stroke="currentColor" strokeWidth="2" />
        <line x1="18" y1="8" x2="18" y2="16" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="8" x2="30" y2="16" stroke="currentColor" strokeWidth="2" />
        <rect x="11" y="21" width="8" height="5" rx="1" fill="var(--theme-accent)" opacity="0.85" />
        <rect x="20" y="21" width="8" height="5" rx="1" fill="var(--theme-steel-blue)" opacity="0.85" />
        <rect x="29" y="21" width="8" height="5" rx="1" fill="var(--theme-header-bg)" opacity="0.85" />
        <rect x="11" y="29" width="8" height="5" rx="1" fill="var(--theme-steel-blue)" opacity="0.85" />
        <rect x="20" y="29" width="8" height="5" rx="1" fill="var(--theme-accent)" opacity="0.85" />
      </svg>
    ),
  },
]

export default tools
