# Trade

A fresh React 19 / Vite trading dashboard foundation built with Mantine, React Router, Zustand, React Query, Axios, React Hook Form, Zod, Big.js, and Lightweight Charts.

## Start

```bash
npm install
npm run dev
```

## Structure

- `src/Pages` contains route-level screens.
- `src/components` contains reusable interface elements.
- `src/layouts` owns the application shell.
- `src/api` is the future HTTP boundary.
- `src/store` holds minimal client UI state; server state belongs in React Query.
- `src/utils/money.js` keeps decimal financial calculations outside UI components.




```
trade
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
├─ src
│  ├─ App.jsx
│  ├─ Pages
│  │  ├─ 404.jsx
│  │  ├─ Home.jsx
│  │  └─ Loading.jsx
│  ├─ Routes
│  │  └─ routes.jsx
│  ├─ api
│  │  └─ resources.api.js
│  ├─ assets
│  │  └─ image_paths.json
│  ├─ components
│  │  ├─ common
│  │  │  ├─ ResourceSelect.jsx
│  │  │  └─ charts
│  │  │     ├─ ChartLegend.jsx
│  │  │     ├─ PriceChart.css
│  │  │     └─ PriceChart.jsx
│  │  ├─ layout
│  │  └─ ui
│  ├─ hooks
│  │  └─ useResources.query.js
│  ├─ layouts
│  │  ├─ Body.jsx
│  │  ├─ Footer.css
│  │  ├─ Footer.jsx
│  │  └─ Headers.jsx
│  ├─ main.jsx
│  ├─ services
│  │  ├─ FormatData.js
│  │  ├─ FormatTime.js
│  │  ├─ Season.js
│  │  └─ search.js
│  ├─ store
│  ├─ styles
│  │  └─ chart.style.js
│  └─ utils
└─ vite.config.js

```