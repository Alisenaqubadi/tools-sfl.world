# VANTA Trade

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
