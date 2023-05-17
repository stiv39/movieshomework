import { MenuItem } from './types'

export const menuItems: MenuItem[] = [
  { route: '', label: 'home', selectedMovieRequired: false },
  { route: 'details', label: 'details', selectedMovieRequired: true },
  { route: 'favorites', label: 'favorites', selectedMovieRequired: false },
]
