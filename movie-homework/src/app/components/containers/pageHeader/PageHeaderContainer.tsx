import { useLocation, useNavigate } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { PageHeaderContainerProps } from './types'
import { styles } from './styles'
import { Menu } from '../../menu'

export const PageHeaderContainer: React.FC<PageHeaderContainerProps> = ({
  isMovieSelected,
}: PageHeaderContainerProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box position={'sticky'} sx={styles.header}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
        <Menu navigate={navigate} isMovieSelected={isMovieSelected} location={location} />
      </Stack>
    </Box>
  )
}
