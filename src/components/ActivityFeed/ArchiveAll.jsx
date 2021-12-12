import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import useStyles from './useStyles.jsx';
import activitiesAPIs from '../../helpers/APIcalls/activities.js';
import { AlertSnackbar } from '../Alert/Alert.jsx';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { theme } from '../../theme.jsx';

const ArchiveAll = ({ setUpdated, activities }) => {
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyles();
  const { updateActivities } = activitiesAPIs;

  function closeAlert() {
    setOpenAlert(false);
  };

  function archiveAllClick() {
    activities.forEach((activity) => {
      const activityPromise = updateActivities(activity.id, true);
      activityPromise.then((activity) => {
        if (activity.error) {
          setErrorMessage(activity.error.message);
          setOpenAlert(true);
        }
      });
    })

    setUpdated(prev => !prev);
  };

  return (
    <Box width='100%' display='flex' justifyContent='center' onClick={archiveAllClick}>
      <Box
        display='flex'
        width='92%'
        height='50px'
        alignItems='center'
        border={1}
        borderRadius='0px 0px 15px 15px'
        borderColor={theme.palette.disabled.light}
        marginBottom='10px'
      >
        <Inventory2Icon style={{ fontSize: '20px' }} className={classes.archiveIcon} />
        <Typography variant='h7' className={classes.archiveText}>Archive all calls</Typography>
      </Box>
      <AlertSnackbar open={openAlert} closeAlert={closeAlert} errorMessage={errorMessage} />
    </Box>
  );
};

export default ArchiveAll;