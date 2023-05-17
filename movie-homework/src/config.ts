import { AppConfig } from './types'

let config: AppConfig

export const getConfig = (): AppConfig => {
  return config
}

export const setConfig = (newConfig: AppConfig) => {
  config = newConfig
}
