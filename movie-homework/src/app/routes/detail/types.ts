import { MovieDetails } from '../../services/movieService/types'

export type DetailViewOwnProps = {}
export type DetailViewOwnActions = {}

export type DetailViewProps = DetailViewPureProps & DetailViewPureActions
export type DetailViewPureProps = DetailViewOwnProps & {
  selectedMovieDetails?: MovieDetails
  loading: boolean
}
export type DetailViewPureActions = DetailViewOwnActions & {
  onLoadMovieDetails: (id: string) => void
}
