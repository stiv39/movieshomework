import { Theme } from '@mui/material'

const styles = (theme: Theme) => ({
  card: {
    maxWidth: '345px',
    margin: '10px',
    height: '385px',
    [theme.breakpoints.down('md')]: {
      height: '300px',
    },
    background: 'lightgrey',
  },
  action: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: 'auto',
    textAlign: 'center',
  },
  image: {
    height: '300px',
    width: '100%',
  },
  content: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
})

export { styles }
