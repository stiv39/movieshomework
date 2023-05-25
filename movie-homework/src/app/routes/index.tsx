import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageLayout } from './PageLayout'
import { RootLayout } from './RootLayout'
import { ReduxSearchView } from './search/'
import { ReduxDetailView } from './detail'
import { ReduxFavoritesView } from './favorites'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<PageLayout />}>
            <Route index element={<ReduxSearchView />} />
            <Route path="/details/:id" element={<ReduxDetailView />} />
            <Route path="/favorites" element={<ReduxFavoritesView />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
