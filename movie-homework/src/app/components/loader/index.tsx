import { Backdrop, CircularProgress } from '@mui/material'
import { LoaderProps } from './types'
import { styles } from './styles'
import { memo } from 'react'

export const Loader: React.FC<LoaderProps> = memo(
  ({ isLoading, useBackdrop, size = 40, thickness = 4 }: LoaderProps) => {
    return (
      <>
        {useBackdrop ? (
          <Backdrop open={isLoading} sx={styles.backdrop}>
            <CircularProgress sx={styles.loader} size={size} thickness={thickness} />
          </Backdrop>
        ) : (
          <CircularProgress size={size} thickness={thickness} />
        )}
      </>
    )
  }
)
