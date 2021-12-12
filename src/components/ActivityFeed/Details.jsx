import { Box, Badge, Typography, Button } from '@mui/material';
import React from 'react';
import activitiesAPIs from '../../helpers/APIcalls/activities.js';
import useStyles from './useStyles.jsx';
import { FcEndCall } from 'react-icons/fc';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { theme } from '../../theme.jsx';

const Details = ({ activity, setOpenDetails, setUpdated }) => {
  const classes = useStyles();
  const { updateActivities } = activitiesAPIs;

  let toFirstName = activity.to;
  if (activity.to && activity.to.split(' ').length < 3) {
    toFirstName = activity.to.split(' ')[0];
  }
  const date = new Date(activity.created_at);
  let hour = date.getUTCHours();
  console.log(activity.created_at);
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
  console.log(hour + amPm);

  function activityClick() {
    console.log('open details');
    setOpenDetails(false);
  };

  function handleArchive() {
    updateActivities(activity.id, !activity.is_archived);
    setUpdated(prev => !prev);
  }

  return (
    <Box width='100%' display='flex' justifyContent='center' onClick={activityClick}>
      <Box width='92%' borderRadius='15px' border={1} borderColor='#CCCCCC' margin='10px'>
        <Box display='flex' justifyContent='center' alignItems='center'>
          <FcEndCall size='50px' className={classes.callIcon} />
          <Box width='64%'>
            <Box display='flex'>
              <Typography variant='h7' className={classes.from}>{activity.from}</Typography>
              {
                activity.time > 1 &&
                <Badge badgeContent={activity.time} color="error" className={classes.badge} />
              }
            </Box>
            <Typography variant='subtitle2' className={classes.to}>Try to call on {toFirstName}</Typography>
            <Typography variant='subtitle2' className={classes.to}>Duration: {activity.duration}</Typography>
            <Typography variant='subtitle2' className={classes.to}>Call type: {activity.call_type}</Typography>
            <Typography variant='subtitle2' className={classes.to}>Direction: {activity.direction}</Typography>
            <Typography variant='subtitle2' className={classes.to}>Via: {activity.via}</Typography>
          </Box>
          <Box width='28%' display='flex' justifyContent='flex-end'>
            <Button style={{ fontSize: '10px', padding: '1px' }} variant='outlined' color='secondary' onClick={handleArchive}>{activity.is_archived ? 'unarchive' : 'archive'}</Button>
            <MoreVertIcon style={{ fontSize: '20px' }} className={classes.icon} />
            <Typography variant='subtitle2' className={classes.time}>{hourString + ':' + minute}</Typography>
            <Box border={1} borderColor={theme.palette.disabled.light} marginLeft='5px' padding='0px 5px 0px 5px'>
              <Typography variant='subtitle2' className={classes.time}>{amPm}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Details;