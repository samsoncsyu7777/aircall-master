import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  alert: {
    fontSize: "2vw",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vw",
    },
  },
}));

export default useStyles;
