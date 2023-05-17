import { useState, useEffect } from 'react'
import { init as i18nInit } from './i18n'
import { I18nProviderProps } from './types'

export const I18nProvider: React.FC<I18nProviderProps> = ({ url, language, children }: I18nProviderProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    i18nInit(url, language, () => {
      setLoaded(true)
    })
  }, [url, language])

  return <>{loaded ? children : undefined}</>
}
