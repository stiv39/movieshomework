import { Box, Card, CardActionArea, CardContent, Typography, useTheme } from '@mui/material'
import { MovieCardProps } from './types'
import { styles } from './styles'

export const MovieCard: React.FC<MovieCardProps> = ({ id, title, image, handleClick }: MovieCardProps) => {
  const theme = useTheme()
  const useStyles = styles(theme)
  return (
    <Card id={id} sx={useStyles.card}>
      <CardActionArea>
        <Box sx={useStyles.action} onClick={handleClick}>
          <img src={image} alt="cardimg" style={{ height: '300px', width: '100%' }} />
        </Box>
        <CardContent sx={useStyles.content}>
          <Typography gutterBottom variant="subtitle2" component="div">
            <b>{title}</b>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
