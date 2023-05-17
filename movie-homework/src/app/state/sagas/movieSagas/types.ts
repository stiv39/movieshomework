import { LoadMoviesArgs } from '../../../services/movieService/types'
import { LOAD_MOVIES_SAGA, LOAD_MOVIE_DETAILS_SAGA } from './constants'

export type LoadMoviesViaSagaAction = {
  payload: LoadMoviesArgs
  type: typeof LOAD_MOVIES_SAGA
}

export type LoadMovieDetailsViaSagaAction = {
  payload: { id: string }
  type: typeof LOAD_MOVIE_DETAILS_SAGA
}
