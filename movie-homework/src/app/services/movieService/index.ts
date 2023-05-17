import { IMovieService, Movie, MovieDetails, LoadMoviesArgs, MovieResponse } from './types'
import axios from 'axios'

export class MovieService implements IMovieService {
  _basePath: string
  constructor({ basePath }: { basePath: string }) {
    this._basePath = basePath
  }

  loadMovies = async ({ page = 1, searchValue }: LoadMoviesArgs): Promise<MovieResponse | null> => {
    try {
      const response = await axios.get(`${this._basePath}&s=${searchValue}&page=${page}`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return null
    }
  }

  getMovieDetails = async (id: string): Promise<MovieDetails | null> => {
    try {
      const response = await axios.get(`${this._basePath}&i=${id}`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return null
    }
  }
}
