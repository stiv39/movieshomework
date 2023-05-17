import { DetailViewOwnProps, DetailViewOwnActions, DetailViewPureActions, DetailViewPureProps } from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { DetailView } from './DetailView'
import { AppState } from '../../state/redux/store'
import { loadMovieDetailsSagaAction } from '../../state/sagas/movieSagas/actions'

const mapStateToProps: MapStateToProps<DetailViewPureProps, DetailViewOwnProps, AppState> = (state, ownProps) => {
  return {
    ...ownProps,
    loading: state.movies.loading,
    selectedMovieId: state.movies.selectedMovieId,
    selectedMovieDetails: state.movies.selectedMovieDetails,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<DetailViewPureActions, DetailViewOwnActions> = (
  dispatch,
  ownProps
) => {
  return {
    ...ownProps,
    onLoadMovieDetails: (id: string) => dispatch(loadMovieDetailsSagaAction(id)),
  }
}

export const ReduxDetailView = connect(mapStateToProps, mapDispatchToProps)(DetailView)
