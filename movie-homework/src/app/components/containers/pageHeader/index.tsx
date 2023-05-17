import {
  PageHeaderContainerOwnProps,
  PageHeaderContainerOwnActions,
  PageHeaderContainerPureActions,
  PageHeaderContainerPureProps,
} from './types'
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux'

import { PageHeaderContainer } from './PageHeaderContainer'
import { AppState } from '../../../state/redux/store'

const mapStateToProps: MapStateToProps<PageHeaderContainerPureProps, PageHeaderContainerOwnProps, AppState> = (
  state,
  ownProps
) => {
  return {
    ...ownProps,
    isMovieSelected: state.movies.selectedMovieDetails !== undefined,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<PageHeaderContainerPureActions, PageHeaderContainerOwnActions> = (
  ownProps
) => {
  return {
    ...ownProps,
  }
}

export const ReduxPageHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(PageHeaderContainer)
export { PageHeaderContainer }
