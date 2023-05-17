import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import httpBackend from 'i18next-http-backend'

const options = (url: string, language: string) => ({
  interpolation: {
    escapeValue: false,
  },
  lng: language,
  fallbackLng: 'en',
  backend: {
    loadPath: `${url}/translations/{{lng}}.json?`,
  },
})

export const init = (url: string, language: string, callback: () => void) => {
  i18next.use(httpBackend).use(initReactI18next).init(options(url, language)).then(callback)
}
