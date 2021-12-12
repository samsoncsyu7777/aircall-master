import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import useStyles from "./useStyles.jsx";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const AlertSnackbar = ({ open, closeAlert, errorMessage }) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={closeAlert}
    >
      <Alert
        className={classes.alert}
        onClose={closeAlert}
        severity='error'
      >
        <div>{errorMessage}</div>
      </Alert>
    </Snackbar>
  );
};