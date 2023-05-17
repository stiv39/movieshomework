import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from '../reducers'
import { allSagas } from '../../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(allSagas)

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store }
