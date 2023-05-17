import { MovieResponse, MovieDetails } from '../../../../services/movieService/types'
import { TypedPayload } from '../types'
import {
  SET_MOVIES,
  SET_MOVIE_DETAILS,
  SET_SELECTED_MOVIE_ID,
  SET_SEARCH_TERM,
  SET_SCROLL_POSITION,
  SET_LOADING,
} from './constants'

export type SetMoviesAction = TypedPayload<typeof SET_MOVIES, { data: MovieResponse }>
export type SetMovieDetailsAction = TypedPayload<typeof SET_MOVIE_DETAILS, { data: MovieDetails }>
export type SetSelectedMovieIdAction = TypedPayload<typeof SET_SELECTED_MOVIE_ID, { data: string }>
export type SetSearchTermAction = TypedPayload<typeof SET_SEARCH_TERM, { data: string }>
export type SetScrollPosition = TypedPayload<typeof SET_SCROLL_POSITION, { data: number }>
export type SetLoadingAction = TypedPayload<typeof SET_LOADING, { data: boolean }>

export type MovieActions =
  | SetMoviesAction
  | SetMovieDetailsAction
  | SetSelectedMovieIdAction
  | SetSearchTermAction
  | SetScrollPosition
  | SetLoadingAction
