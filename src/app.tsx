import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
