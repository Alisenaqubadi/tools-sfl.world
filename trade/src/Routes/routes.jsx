import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../Pages/Dashboard'
import Markets from '../Pages/Markets'
import Portfolio from '../Pages/Portfolio'
import Settings from '../Pages/Settings'
import NotFound from '../Pages/NotFound'

export const router = createBrowserRouter([{ path: '/', element: <DashboardLayout />, children: [
  { index: true, element: <Dashboard /> }, { path: 'markets', element: <Markets /> },
  { path: 'portfolio', element: <Portfolio /> }, { path: 'settings', element: <Settings /> },
  { path: '*', element: <NotFound /> },
] }])
