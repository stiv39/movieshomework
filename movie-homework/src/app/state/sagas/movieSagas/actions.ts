import { LoadMoviesArgs } from '../../../services/movieService/types'
import { LOAD_MOVIES_SAGA, LOAD_MOVIE_DETAILS_SAGA } from './constants'
import { LoadMovieDetailsViaSagaAction, LoadMoviesViaSagaAction } from './types'

export const loadMoviesViaSagaAction = ({ page, searchValue, loadMore }: LoadMoviesArgs): LoadMoviesViaSagaAction => {
  return {
    type: LOAD_MOVIES_SAGA,
    payload: {
      page,
      searchValue,
      loadMore,
    },
  }
}

export const loadMovieDetailsSagaAction = (id: string): LoadMovieDetailsViaSagaAction => {
  return {
    type: LOAD_MOVIE_DETAILS_SAGA,
    payload: { id },
  }
}
