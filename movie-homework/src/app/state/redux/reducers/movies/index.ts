import { MovieActions } from '../../actions/movies/types'
import {
  SET_MOVIES,
  SET_MOVIE_DETAILS,
  SET_SELECTED_MOVIE_ID,
  SET_SEARCH_TERM,
  SET_SCROLL_POSITION,
  SET_LOADING,
} from '../../actions/movies/constants'
import { MovieDetails, MovieResponse } from '../../../../services/movieService/types'

type MovieState = {
  movies?: MovieResponse
  selectedMovieDetails?: MovieDetails
  selectedMovieId?: string
  searchTerm: string
  scrollPosition: number
  loading: boolean
}

const defaultState: MovieState = {
  searchTerm: '',
  scrollPosition: 0,
  loading: false,
}

export const moviesReducer = (state: MovieState = defaultState, action: MovieActions) => {
  switch (action.type) {
    case SET_MOVIES: {
      return { ...state, movies: action.payload.data }
    }
    case SET_MOVIE_DETAILS: {
      return { ...state, selectedMovieDetails: action.payload.data }
    }
    case SET_SELECTED_MOVIE_ID: {
      return { ...state, selectedMovieId: action.payload.data }
    }
    case SET_SEARCH_TERM: {
      return { ...state, searchTerm: action.payload.data }
    }
    case SET_SCROLL_POSITION: {
      return { ...state, scrollPosition: action.payload.data }
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload.data }
    }
    default: {
      return state
    }
  }
}
