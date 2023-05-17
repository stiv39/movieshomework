import { combineReducers } from '@reduxjs/toolkit'
import { moviesReducer } from './movies'

export const rootReducer = combineReducers({
  movies: moviesReducer,
})
