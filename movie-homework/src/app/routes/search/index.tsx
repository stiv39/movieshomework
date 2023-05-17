import { SearchViewOwnProps, SearchViewOwnActions, SearchViewPureActions, SearchViewPureProps } from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'
import { SearchView } from './SearchView'
import { AppState } from '../../state/redux/store'
import { loadMoviesViaSagaAction } from '../../state/sagas/movieSagas/actions'
import { setSelectedMovieId, setSelectedSearchTerm, setScrollPoistion } from '../../state/redux/actions'

const mapStateToProps: MapStateToProps<SearchViewPureProps, SearchViewOwnProps, AppState> = (state, ownProps) => {
  return {
    ...ownProps,
    searchTerm: state.movies.searchTerm,
    moviesResponse: state.movies.movies,
    scrollPosition: state.movies.scrollPosition,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<SearchViewPureActions, SearchViewOwnActions> = (
  dispatch,
  ownProps
) => {
  return {
    ...ownProps,
    onSetSearchTerm: (searchTerm: string) => dispatch(setSelectedSearchTerm(searchTerm)),
    onLoadMovies: (searchValue: string, page: number, loadMore: boolean) =>
      dispatch(loadMoviesViaSagaAction({ searchValue, page, loadMore })),
    onMovieSelect: (id: string) => dispatch(setSelectedMovieId(id)),
    onSetScrollPosition: (position: number) => dispatch(setScrollPoistion(position)),
  }
}

export const ReduxSearchView = connect(mapStateToProps, mapDispatchToProps)(SearchView)
