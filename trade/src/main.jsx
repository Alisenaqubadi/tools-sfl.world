import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@mantine/core/styles.css'
import './styles/global.css'
import App from './App'

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1, staleTime: 30_000 } } })

createRoot(document.getElementById('root')).render(
  <StrictMode><QueryClientProvider client={queryClient}><MantineProvider defaultColorScheme="dark"><App /></MantineProvider></QueryClientProvider></StrictMode>
)
