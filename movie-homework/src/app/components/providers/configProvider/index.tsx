import { useState, useEffect } from 'react'
import axios from 'axios'
import { setConfig } from '../../../../config'
import { DEFAULT_CONFIG } from '../../../../constants'
import { ConfigProviderProps } from './types'

export const ConfigProvider: React.FC<ConfigProviderProps> = ({ children }: ConfigProviderProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get(`config.json?`)
      .then((response) => {
        setConfig(response.data)
        setLoaded(true)
      })
      .catch(() => {
        setConfig(DEFAULT_CONFIG)
        setLoaded(true)
      })
  }, [])

  return <>{loaded ? children : undefined}</>
}
