export interface IMovieService {
  loadMovies(args: LoadMoviesArgs): Promise<MovieResponse | null>
  getMovieDetails(id: string): Promise<MovieDetails | null>
}

export type LoadMoviesArgs = {
  searchValue: string
  page: number
  loadMore?: boolean
}

export type MovieResponse = {
  Response: boolean
  Search: Movie[]
  totalResults: number
  Error?: string
}

export type Movie = {
  Title: string
  Year: string
  Type: string
  Poster: string
  imdbID: string
}

export type MovieDetails = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: MovieRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  Error?: string
}

export type MovieRating = {
  Source: string
  Value: string
}
