import { all, takeLatest } from 'redux-saga/effects'
import { LoadMovieDetailsViaSagaAction, LoadMoviesViaSagaAction } from './movieSagas/types'
import { LOAD_MOVIES_SAGA, LOAD_MOVIE_DETAILS_SAGA } from './movieSagas/constants'
import { loadMovieDetailsViaSaga, loadMoviesViaSaga } from './movieSagas'

export function* allSagas() {
  yield all([movieSagas()])
}

function* movieSagas() {
  yield takeLatest<LoadMoviesViaSagaAction>(LOAD_MOVIES_SAGA, loadMoviesViaSaga)
  yield takeLatest<LoadMovieDetailsViaSagaAction>(LOAD_MOVIE_DETAILS_SAGA, loadMovieDetailsViaSaga)
}
