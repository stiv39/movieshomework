import { AppState } from '../../redux/store'

export const movieSelector = (state: AppState) => {
  return state.movies
}
