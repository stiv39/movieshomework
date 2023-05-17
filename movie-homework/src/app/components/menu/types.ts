import { NavigateFunction, Location } from 'react-router-dom'

export type MenuProps = {
  id?: string
  navigate: NavigateFunction
  isMovieSelected: boolean
  location: Location
}

export type MenuItem = {
  route: string
  label: string
  selectedMovieRequired: boolean
}
