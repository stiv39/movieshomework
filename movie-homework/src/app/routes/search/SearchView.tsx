import { Button, Grid, TextField } from '@mui/material'
import { SearchViewProps } from './types'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { styles } from './styles'
import { useTranslation } from 'react-i18next'
import { MovieCard } from '../../components'
import useDebounce from '../../hooks/useDebounce'

export const SearchView: React.FC<SearchViewProps> = ({
  moviesResponse,
  searchTerm,
  onSetSearchTerm,
  onLoadMovies,
  onMovieSelect,
  onSetScrollPosition,
  scrollPosition,
}: SearchViewProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [page, setPage] = useState<number>(1)
  const [searchDone, setSearchDone] = useState<boolean>(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const debouncedSearch = useDebounce(searchTerm, 600)

  const handleSearch = (searchValue: string) => {
    onSetSearchTerm(searchValue)
    setSearchParams({ q: searchValue })
  }

  const handleLoadMore = () => {
    const newPage = page + 1
    setPage(newPage)
    onLoadMovies(searchTerm, newPage, true)
  }

  const handleMovieSelection = (movieId: string) => {
    onMovieSelect(movieId)
    navigate(`/details/${movieId}`)
  }

  useEffect(() => {
    var searchQueryParam = searchParams.get('q') || ''
    if (searchQueryParam && searchQueryParam !== '') {
      setSearchDone(true)
      onSetSearchTerm(searchQueryParam)
      onLoadMovies(searchQueryParam, 1, false)
    }
  }, [])

  useEffect(() => {
    if (debouncedSearch) {
      setSearchDone(true)
      onLoadMovies(searchTerm, 1, false)
    }
  }, [debouncedSearch])

  useEffect(() => {
    window.scrollTo(0, scrollPosition)

    const handleScroll = () => {
      onSetScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Grid container>
        <Grid item xs={2} />
        <Grid item xs={8} sx={styles.box}>
          <TextField
            fullWidth
            focused
            variant="filled"
            color="error"
            InputProps={{ style: { background: 'white', color: 'e42441' } }}
            InputLabelProps={{ shrink: true }}
            label={<b>{t('app.search.title')}</b>}
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
        </Grid>

        <Grid item xs={2} />
        <Grid item xs={2} />
        {searchDone && moviesResponse && !moviesResponse.Search ? (
          <div>{t('app.search.noResults')}</div>
        ) : (
          <Grid item xs={8}>
            <Grid container>
              {moviesResponse?.Search &&
                moviesResponse.Search.length > 0 &&
                moviesResponse.Search.map((movie) => (
                  <Grid item xs={6} sm={4} md={4} lg={3} xl={2} key={movie.imdbID}>
                    <MovieCard
                      id={movie.imdbID}
                      title={movie.Title}
                      image={movie.Poster === 'N/A' ? '/assets/notfound.jpg' : movie.Poster}
                      handleClick={() => handleMovieSelection(movie.imdbID)}
                    />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        )}
        <Grid item xs={2} />
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button
            style={{
              background: '#e42441',
              display:
                moviesResponse && moviesResponse.Search && moviesResponse?.Search.length < moviesResponse?.totalResults
                  ? ''
                  : 'none',
            }}
            variant="contained"
            onClick={handleLoadMore}
          >
            <b>{t('app.search.loadMore')}</b>
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
