import { FavoritesViewProps } from './types'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Movie } from '../../services/movieService/types'
import { Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import { MovieCard } from '../../components'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'

export const FavoritesView: React.FC<FavoritesViewProps> = ({ onMovieSelect }: FavoritesViewProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    loadMoviesFromLocalStorage()
  }, [])

  const handleMovieSelection = (movieId: string) => {
    onMovieSelect(movieId)
    navigate('/details')
  }

  const loadMoviesFromLocalStorage = () => {
    const storedMovies = localStorage.getItem('appMovieList')
    if (storedMovies) {
      setFavoriteMovies(JSON.parse(storedMovies))
    }
  }

  const handleRemoveMovie = (movie: Movie) => {
    const updatedMovies = favoriteMovies.filter((m) => m !== movie)
    setFavoriteMovies(updatedMovies)
    localStorage.setItem('appMovieList', JSON.stringify(updatedMovies))
    loadMoviesFromLocalStorage()
  }

  return (
    <>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container>
            {favoriteMovies &&
              favoriteMovies.length > 0 &&
              favoriteMovies.map((movie) => (
                <Grid item xs={6} sm={4} md={4} lg={3} xl={2} key={movie.imdbID}>
                  <MovieCard
                    id={movie.imdbID}
                    title={movie.Title}
                    image={movie.Poster === 'N/A' ? '/assets/notfound.jpg' : movie.Poster}
                    handleClick={() => handleMovieSelection(movie.imdbID)}
                  />
                  <Box sx={styles.center}>
                    <Tooltip title={t('app.favorites.removeFromFavorites')}>
                      <Button variant="contained" onClick={() => handleRemoveMovie(movie)} sx={styles.button}>
                        <Typography>
                          <HeartBrokenIcon />
                        </Typography>
                      </Button>
                    </Tooltip>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </>
  )
}
