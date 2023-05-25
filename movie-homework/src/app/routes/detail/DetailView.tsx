import { Grid, Button, Typography, Box, Tooltip } from '@mui/material'
import { Movie } from '../../services/movieService/types'
import { DetailViewProps } from './types'
import React, { useEffect, useState } from 'react'
import { Rating, Loader } from '../../components'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HeartBrokenIcon from '@mui/icons-material/HeartBroken'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

export const DetailView: React.FC<DetailViewProps> = ({
  selectedMovieDetails,
  loading,
  onLoadMovieDetails,
}: DetailViewProps) => {
  const { t } = useTranslation()

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      onLoadMovieDetails(id)
    }
  }, [])

  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const storedMovies = localStorage.getItem('appMovieList')
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies))
    }
  }, [])

  const handleAddMovie = (movie: Movie) => {
    setMovies([...movies, movie])
    localStorage.setItem('appMovieList', JSON.stringify([...movies, movie]))
  }

  const handleRemoveMovie = (movie: Movie) => {
    const updatedMovies = movies.filter((m) => m.imdbID !== movie.imdbID)
    localStorage.setItem('appMovieList', JSON.stringify(updatedMovies))
    setMovies(updatedMovies)
  }

  return (
    <>
      {loading ? <Loader isLoading={loading} useBackdrop={true} /> : null}
      {!loading &&
      selectedMovieDetails !== undefined &&
      selectedMovieDetails.Response === 'True' &&
      !selectedMovieDetails.Error ? (
        <Grid container sx={styles.main}>
          <Grid item xs={1} lg={1} sx={styles.item}>
            <img
              style={{ maxWidth: '300px', maxHeight: '445px' }}
              src={selectedMovieDetails.Poster === 'N/A' ? '/assets/notfound.jpg' : selectedMovieDetails.Poster}
            />
          </Grid>
          <Grid item xs={6} lg={6} xl={9} sx={styles.box}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">
                  <b>{selectedMovieDetails.Title}</b> {'(' + selectedMovieDetails.Year + ')'}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{selectedMovieDetails.Genre}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box sx={styles.rating}>
                  <Rating
                    value={Number(selectedMovieDetails.imdbRating) * 10}
                    tooltipTitle={t('app.detail.imdbRating')}
                  />
                  {movies.find((movie) => movie.imdbID === selectedMovieDetails.imdbID) ? (
                    <Tooltip title={t('app.detail.removeFromFavorites')}>
                      <Button sx={styles.box} onClick={() => handleRemoveMovie(selectedMovieDetails)}>
                        <HeartBrokenIcon sx={styles.icon} />
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip title={t('app.detail.addToFavorites')}>
                      <Button sx={styles.box} onClick={() => handleAddMovie(selectedMovieDetails)}>
                        <FavoriteIcon sx={styles.icon} />
                      </Button>
                    </Tooltip>
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sx={styles.top(10)}>
                <Typography>
                  <b>{t('app.detail.director')}</b>
                </Typography>
                <Typography>{selectedMovieDetails.Director}</Typography>
              </Grid>
              <Grid item xs={12} sx={styles.top(10)}>
                <Typography>
                  <b>{t('app.detail.cast')}</b>
                </Typography>
                <Typography>{selectedMovieDetails.Actors}</Typography>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <Typography variant="h6" sx={styles.top(30)}>
                  <Typography>
                    <b>{t('app.detail.overview')}</b>
                  </Typography>
                </Typography>
                <Typography>{selectedMovieDetails.Plot}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <div> {!loading ? selectedMovieDetails?.Error : ''}</div>
      )}
    </>
  )
}
