import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  navBarText: {
    textTransform: 'none',
  },
  title: {
    color: theme.palette.text.primary,
    paddingLeft: '65px',
    textTransform: 'none',
  },
  pageTitle: {
    color: theme.palette.text.primary,    
  },
  pageTitleSecondary: {
    color: theme.palette.text.secondary,
  },
  icon: {
    color: theme.palette.disabled.main,
    height: '5px',
  },
  tune: {
    transform: 'rotate(90deg)',
  },
}));

export default useStyles;
