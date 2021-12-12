import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  divider: {
    fontSize: '14px',
    textTransform: 'uppercase',
    color: theme.palette.disabled.dark,
  },
  callIcon: {
    width: '8%',
    margin: '0px 15px 0px 15px',    
  },
  to: {
    color: theme.palette.disabled.dark,
  },
  badge: {
    left: '20px',
    top: '10px',
  },
  icon: {
    color: theme.palette.disabled.main,    
  },
  time: {
    color: theme.palette.disabled.dark,
  },
  archiveIcon: {
    color: theme.palette.disabled.dark,
    margin: '0px 10px 0px 15px',
  },
  archiveText: {
    fontSize: '16px',
    color: theme.palette.disabled.darkGrey,
  }
}));

export default useStyles;
