import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '56px',
  },
  icon: {
    fontSize: '20px',
    color: theme.palette.disabled.dark,
  },
  selectedIcon: {
    fontSize: '20px',
    color: theme.palette.text.primary,
  },
  largeIcon: {
    fontSize: '100px',
    marginBottom: '50px',
    color: theme.palette.action.active,
    backgroundColor: theme.palette.background.default,
  }
}));

export default useStyles;
