import { Container, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  appBar: {
    background: theme.color.primary,
    boxShadow: 'unset',
  },
  title: {
    flexGrow: 1,
  },
  toolBar: {
    padding: 0
  }
}));

const Navbar = () => {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Container maxWidth="lg">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            KERD
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;