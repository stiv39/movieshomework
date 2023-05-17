import { getConfig } from '../../config'
import { MovieService } from './movieService'

export const movieServiceFactory = () => new MovieService({ basePath: getConfig().api.url })
