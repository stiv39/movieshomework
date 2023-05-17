import { MovieDetails, MovieResponse } from '../../services/movieService/types'

export type SearchViewOwnProps = {}
export type SearchViewOwnActions = {}

export type SearchViewProps = SearchViewPureProps & SearchViewPureActions
export type SearchViewPureProps = SearchViewOwnProps & {
  searchTerm: string
  scrollPosition: number
  moviesResponse?: MovieResponse
}

export type SearchViewPureActions = SearchViewOwnActions & {
  onSetSearchTerm: (searchTerm: string) => void
  onLoadMovies: (searchValue: string, page: number, loadMore: boolean) => void
  onMovieSelect: (id: string) => void
  onSetScrollPosition: (position: number) => void
}
