import {
  FavoritesViewOwnProps,
  FavoritesViewOwnActions,
  FavoritesViewPureActions,
  FavoritesViewPureProps,
} from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { FavoritesView } from './FavoritesView'
import { AppState } from '../../state/redux/store'
import { setSelectedMovieId } from '../../state/redux/actions'

const mapStateToProps: MapStateToProps<FavoritesViewPureProps, FavoritesViewOwnProps, AppState> = (state, ownProps) => {
  return {
    ...ownProps,
    favoriteMovies: state.movies.movies,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<FavoritesViewPureActions, FavoritesViewOwnActions> = (
  dispatch,
  ownProps
) => {
  return {
    ...ownProps,
    onMovieSelect: (id: string) => dispatch(setSelectedMovieId(id)),
  }
}

export const ReduxFavoritesView = connect(mapStateToProps, mapDispatchToProps)(FavoritesView)
