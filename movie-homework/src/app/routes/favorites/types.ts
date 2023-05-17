import { Movie } from '../../services/movieService/types'

export type FavoritesViewOwnProps = {}
export type FavoritesViewOwnActions = {}

export type FavoritesViewProps = FavoritesViewPureProps & FavoritesViewPureActions
export type FavoritesViewPureProps = FavoritesViewOwnProps & {
  favoriteMovies: Movie[]
}
export type FavoritesViewPureActions = FavoritesViewOwnActions & {
  onMovieSelect: (id: string) => void
}
