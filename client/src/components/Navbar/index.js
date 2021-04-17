import { Container, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.color.primary,
    boxShadow: 'unset',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'inherit'
  },
  toolBar: {
    padding: 0
  },
  navLink: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'capitalize'
  }
}));

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Link to='/' className={classes.title}>
            <Typography variant="h6">
              KERD
            </Typography>
          </Link>
          <Link to='/schedule' className={classes.navLink}>
            <Button color="inherit">Schedule</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;