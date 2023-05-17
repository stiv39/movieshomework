import { Stack, Box, Button, AppBar } from '@mui/material'
import { MenuProps } from './types'
import { menuItems } from './items'
import { styles } from './styles'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Menu: React.FC<MenuProps> = ({ id = 'app-menu', navigate, location, isMovieSelected }: MenuProps) => {
  const { t } = useTranslation()
  const handleNavigation = (path: string) => {
    navigate(`/${path}`)
  }

  useEffect(() => {
    if (!isMovieSelected && location.pathname === '/details') {
      navigate('/')
    }
  }, [])

  return (
    <Box id={id} minWidth={0}>
      <AppBar sx={styles.appBar}>
        <Stack minWidth={0} direction="row" alignItems="flex-end" spacing={0.5}>
          {menuItems.map((menuItem, index) => (
            <Button
              key={`${id}-item-${index}`}
              disableRipple={true}
              sx={styles.menuButton}
              onClick={() => handleNavigation(menuItem.route)}
              disabled={menuItem.selectedMovieRequired && !isMovieSelected}
            >
              {t(`app.navbar.${menuItem.label}`).toUpperCase()}
            </Button>
          ))}
        </Stack>
      </AppBar>
    </Box>
  )
}
