# Healix Reddit Community Health Insights App

Healix helps users navigate large volumes of health discussions without manually searching through hundreds of posts and comments. Users can search for a health condition, and the app analyzes community-reported experiences to identify and rank commonly mentioned approaches associated with positive experiences. These insights are organized under “Top Approaches,” allowing users to quickly discover what other people frequently report as helpful and then explore the underlying discussions.

## Features

- Responsive UI
- Top community-mentioned approaches ranking
- Search interaction with recent-search history
- Save-search toggle
- Share button with Web Share API / clipboard fallback
- KPI cards
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

The current version intentionally uses mock data. A later version can replace `src/data/mockData.js` with approved Reddit API data while keeping the React UI components unchanged.
