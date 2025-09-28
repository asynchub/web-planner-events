import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { ListEvents } from '../pages/list-events'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/list-events' element={<ListEvents />} />
    </Routes>
  )
}
