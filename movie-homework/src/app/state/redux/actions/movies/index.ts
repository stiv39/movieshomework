import {
  SetMovieDetailsAction,
  SetMoviesAction,
  SetScrollPosition,
  SetSearchTermAction,
  SetSelectedMovieIdAction,
  SetLoadingAction,
} from './types'
import {
  SET_MOVIES,
  SET_MOVIE_DETAILS,
  SET_SELECTED_MOVIE_ID,
  SET_SEARCH_TERM,
  SET_SCROLL_POSITION,
  SET_LOADING,
} from './constants'
import { MovieResponse, MovieDetails } from '../../../../services/movieService/types'

export const setMoviesAction = (data: MovieResponse): SetMoviesAction => {
  return {
    type: SET_MOVIES,
    payload: {
      data,
    },
  }
}

export const setMovieDetailsAction = (data: MovieDetails): SetMovieDetailsAction => {
  return {
    type: SET_MOVIE_DETAILS,
    payload: {
      data,
    },
  }
}

export const setSelectedMovieId = (data: string): SetSelectedMovieIdAction => {
  return {
    type: SET_SELECTED_MOVIE_ID,
    payload: {
      data,
    },
  }
}

export const setSelectedSearchTerm = (data: string): SetSearchTermAction => {
  return {
    type: SET_SEARCH_TERM,
    payload: {
      data,
    },
  }
}

export const setScrollPoistion = (data: number): SetScrollPosition => {
  return {
    type: SET_SCROLL_POSITION,
    payload: {
      data,
    },
  }
}

export const setLoadingAction = (data: boolean): SetLoadingAction => {
  return {
    type: SET_LOADING,
    payload: {
      data,
    },
  }
}
