export type PageHeaderContainerOwnProps = {}
export type PageHeaderContainerOwnActions = {}

export type PageHeaderContainerProps = PageHeaderContainerPureProps & PageHeaderContainerPureActions
export type PageHeaderContainerPureProps = PageHeaderContainerOwnProps & {
  isMovieSelected: boolean
}
export type PageHeaderContainerPureActions = PageHeaderContainerOwnActions & {}
