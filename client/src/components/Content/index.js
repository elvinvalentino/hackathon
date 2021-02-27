import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(12)
  }
}))

const Content = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  )

}

export default Content;