import { I18nProvider } from './app/components'
import { AppRoutes } from './app/routes'

import { getConfig } from './config'

function App() {
  return (
    <I18nProvider url={getConfig().translations.url} language={getConfig().translations.language}>
      <AppRoutes />
    </I18nProvider>
  )
}

export default App
