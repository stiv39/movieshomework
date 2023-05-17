import { Box, CircularProgress, Tooltip, Typography } from '@mui/material'
import { RatingProps } from './types'
import { styles } from './styles'

export const Rating: React.FC<RatingProps> = ({ value, tooltipTitle }) => {
  const formatValue = isNaN(value) ? 0 : value

  return (
    <Tooltip title={tooltipTitle}>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress sx={styles.rating} size={50} variant="determinate" value={formatValue} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
            {formatValue + '%'}
          </Typography>
        </Box>
      </Box>
    </Tooltip>
  )
}
