import { Box, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from './useStyles.jsx';
import activitiesAPIs from '../../helpers/APIcalls/activities.js';
import { AlertSnackbar } from '../Alert/Alert.jsx';
import Activity from './Activity.jsx';
import ArchiveAll from './ArchiveAll.jsx';
import FootBar from '../FootBar/FootBar.jsx';

const ActivityFeed = ({ page }) => {
  const [activities, setActivities] = useState([]);
  const [activitiesByDates, setActivitiesByDates] = useState();
  const [missedCalls, setMissedCalls] = useState(0);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [updated, setUpdated] = useState(false);
  const classes = useStyles();
  const { getActivities } = activitiesAPIs;

  useEffect(() => {
    const activitiesPromise = getActivities();
    activitiesPromise.then((activities) => {
      if (activities.error) {
        setErrorMessage(activities.error.message);
        setOpenAlert(true);
      } else {
        setActivities(activities);
      }
    });
  }, []);

  useEffect(() => {
    const datesObject = {};
    let countedMissedCalls = 0;
    activities.forEach((activity) => {
      if (activity.call_type === 'missed') {
        countedMissedCalls += 1;
      }
      if (page === 'All calls' || (page === 'Inbox' && activity.direction === 'inbound')) {
        const date = new Date(activity.created_at);
        const dateString = date.toLocaleString('default', { month: 'long' }) + ', ' + date.getDate() + ' ' + date.getFullYear();
        let dateArray = [];
        if (datesObject[dateString]) {
          dateArray = [...datesObject[dateString]];
          const oldActivity = dateArray.find((thisActivity) => thisActivity.to === activity.to && thisActivity.from === activity.from);
          if (oldActivity) {
            let updatedActivity = oldActivity;
            let time = updatedActivity.time + 1;
            updatedActivity.time = time;
          } else {
            activity.time = 1;
            dateArray.push(activity);
            datesObject[dateString] = dateArray;
          }
        } else {
          activity.time = 1;
          datesObject[dateString] = [activity];
        }
      }
    });
    setActivitiesByDates(datesObject);
    setMissedCalls(countedMissedCalls);
  }, [activities, page, updated]);

  useEffect(() => {
  }, [activitiesByDates])

  function closeAlert(e) {
    setOpenAlert(false);
  }

  return (
    <Box>
      <Box height='550px'>
     <ArchiveAll setUpdated={setUpdated} activities={activities} />
      {
        activitiesByDates &&
        Object.keys(activitiesByDates).map((dateObject) => {
          return (
            <Box key={dateObject} width='100%'>
              <Divider className={classes.divider}>{dateObject}</Divider>
              {activitiesByDates[dateObject].map((activity, index) => {
                return <Activity key={activity.id} activity={activity} setUpdated={setUpdated} index={index} />;
              })}
            </Box>
          )
        })
      }
      </Box>
      <FootBar missedCalls={missedCalls} />
      <AlertSnackbar open={openAlert} closeAlert={closeAlert} errorMessage={errorMessage} />
    </Box>
  );
};

export default ActivityFeed;
