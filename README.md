# Planning Tool Belt

Landing hub for a set of small, self-contained financial planning web apps. Each
app is its own repo and its own Vercel deployment; this project is only the
directory that links them together, plus the shared visual language they follow.

Live at https://planning-tool-belt.vercel.app

## The apps

| App | What it does |
| --- | --- |
| [Portfolio Allocation](https://portfolio-allocation-eight.vercel.app) | Allocations across accounts, with target profiles, live prices and PDF reports |
| [Loan Amortization](https://loan-amortization-mauve.vercel.app) | Amortization schedules with extra-payment support and PDF export |
| [PDF Toolkit](https://pdf-toolkit-ashen.vercel.app) | Full PDF editor — edit text, annotate, sign, redact, OCR, forms, protection |

Each app has a home button that links back here, so the hub and the apps point
at each other.

## Adding or changing an app

Everything the hub knows about an app lives in one entry in
[`src/tools.jsx`](src/tools.jsx):

```js
{
  name: 'App Name',
  description: 'One line describing what it does.',
  url: 'https://the-app.vercel.app',   // production URL, not a preview
  icon: (<svg .../>),                  // 48x48, uses the shared theme vars
}
```

Two things worth knowing:

- **Point `url` at the production deployment.** Because it does, shipping a new
  version of an app needs no change here — the link keeps working. Only touch
  `url` if the Vercel project or domain actually changes.
- **`description` does go stale.** It is the one thing that has to be updated by
  hand when an app's feature set changes meaningfully.

Icons use the same `--theme-*` custom properties as the rest of the hub, so they
follow light and dark mode rather than carrying fixed colours.

## Development

```bash
npm install
npm run dev      # vite dev server
npm run lint     # eslint, must pass clean
npm run build    # production build to dist/
```

React 19 + Vite 7 + Tailwind 4. Deployed on Vercel from `master`.
