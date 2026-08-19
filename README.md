# Healix React UI

A frontend-only React dashboard for community health insights. 

## Features

- Responsive UI
- Search interaction with recent-search history
- Save-search toggle
- Share button with Web Share API / clipboard fallback
- KPI cards
- Top community-mentioned approaches ranking
- Community discussion cards
- SVG mentions-over-time chart without a charting dependency
- Informational medical disclaimer
- Mock data kept separate from UI components


## Tech

- React 19
- Vite
- Lucide React icons
- Plain CSS

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
healix-react-ui/
├── src/
│   ├── components/
│   │   ├── AboutData.jsx
│   │   ├── ApproachesCard.jsx
│   │   ├── DiscussionsCard.jsx
│   │   ├── Logo.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── Topbar.jsx
│   │   └── TrendChart.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Next step: live community data

The current version intentionally uses mock data. A later version can replace `src/data/mockData.js` with approved API data while keeping the React UI components unchanged.
