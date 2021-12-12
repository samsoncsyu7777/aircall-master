import { Box, Badge, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './useStyles.jsx';
import activitiesAPIs from '../../helpers/APIcalls/activities.js';
import { AlertSnackbar } from '../Alert/Alert.jsx';
import { FcEndCall } from 'react-icons/fc';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Details from './Details.jsx';
import { theme } from '../../theme.jsx';
import { Collapse } from "@mui/material";

const Activity = ({ activity, setUpdated, index }) => {
  const [showActivity, setShowActivity] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [details, setDetails] = useState();
  const classes = useStyles();
  const { getDetails } = activitiesAPIs;
  let toFirstName = activity.to;
  if (activity.to && activity.to.split(' ').length < 3) {
    toFirstName = activity.to.split(' ')[0];
  }
  const date = new Date(activity.created_at);
  let hour = date.getUTCHours();
  const minute = date.getMinutes();
  let amPm = 'AM';
  if (hour < 12) {
    if (hour === 0) {
      hour = 12;
    }
  } else {
    amPm = 'PM';
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  const hourString = ('0' + hour.toString()).slice(-2);

  useEffect(() => {
    setTimeout(() => {
      setShowActivity(true);
    }, 200 * index);
  }, []);

  function closeAlert() {
    setOpenAlert(false);
  };

  function activityClick() {
    const activityPromise = getDetails(activity.id);
    activityPromise.then((activity) => {
      if (activity.error) {
        setErrorMessage(activity.error.message);
        setOpenAlert(true);
      } else {
        setDetails(activity);
      }
    });

    setOpenDetails(true);
  };

  return openDetails && details ? <Details activity={details} setOpenDetails={setOpenDetails} setUpdated={setUpdated} /> :
    (
      <Box width='100%' display='flex' justifyContent='center' onClick={activityClick}>
        <Collapse width='100%' timeout={2000} orientation="horizontal" in={showActivity}>
          <Box width='330px' borderRadius='15px' border={1} borderColor={theme.palette.disabled.light} margin='10px'>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <FcEndCall size='50px' className={classes.callIcon} />
              <Box width='64%'>
                <Box display='flex'>
                  <Typography variant='h7'>{activity.from}</Typography>
                  {
                    activity.time > 1 &&
                    <Badge badgeContent={activity.time} color="error" className={classes.badge} />
                  }
                </Box>
                <Typography variant='subtitle2' className={classes.to}>Try to call on {toFirstName}</Typography>
              </Box>
              <Box width='28%' display='flex' justifyContent='flex-end'>
                <MoreVertIcon style={{ fontSize: '20px' }} className={classes.icon} />
                <Typography variant='subtitle2' className={classes.time}>{hourString + ':' + minute}</Typography>
                <Box border={1} borderColor={theme.palette.disabled.light} marginLeft='5px' padding='0px 5px 0px 5px'>
                  <Typography variant='subtitle2' className={classes.time}>{amPm}</Typography>
                </Box>
              </Box>
            </Box>
            <AlertSnackbar open={openAlert} closeAlert={closeAlert} errorMessage={errorMessage} />
          </Box>
        </Collapse>
      </Box>
    );
};

export default Activity;