import { Box } from '@mui/material'
import { PageContainerProps } from './types'

export const PageContainer: React.FC<PageContainerProps> = ({ children }: PageContainerProps) => {
  return (
    <Box marginX={2} marginTop={1} marginBottom={6}>
      {children ? children : undefined}
    </Box>
  )
}
