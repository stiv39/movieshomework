import { put, call } from 'redux-saga/effects'
import { movieServiceFactory } from '../../../services'
import { setMovieDetailsAction, setMoviesAction, setLoadingAction } from '../../redux/actions'
import { LoadMoviesViaSagaAction, LoadMovieDetailsViaSagaAction } from './types'
import { MovieResponse, MovieDetails } from '../../../services/movieService/types'
import { movieSelector } from '../../selectors'
import { store } from '../../redux/store'

export function* loadMoviesViaSaga(action: LoadMoviesViaSagaAction) {
  yield put(setLoadingAction(true))

  const { searchValue, page, loadMore } = action.payload
  const data: MovieResponse = yield call(movieServiceFactory().loadMovies, { searchValue, page })

  if (loadMore) {
    const { movies } = movieSelector(store.getState())
    if (movies) yield put(setMoviesAction({ ...data, Search: [...movies?.Search, ...data.Search] }))
  } else {
    yield put(setMoviesAction(data))
  }

  yield put(setLoadingAction(false))
}

export function* loadMovieDetailsViaSaga(action: LoadMovieDetailsViaSagaAction) {
  yield put(setLoadingAction(true))

  const data: MovieDetails = yield call(movieServiceFactory().getMovieDetails, action.payload.id)
  yield put(setMovieDetailsAction(data))

  yield put(setLoadingAction(false))
}
