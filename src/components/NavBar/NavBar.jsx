import Header from '../../Header.jsx';
import React from 'react';
import { Typography, Box } from '@mui/material';
import useStyles from './useStyles.jsx';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TuneIcon from '@mui/icons-material/Tune';
import { theme } from '../../theme.jsx';

const NavBar = ({ page, setPage }) => {
  const classes = useStyles();

  return (
    <Box>
      <Header className={classes.header} />
      <Box
        width='100%'
        height='60px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        position='absolute'
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={1}
      >
        <Box height='60px' width='376px'>
          <Box display='flex' width='376px' height='60px' >
            <Box display='flex' alignItems='center' width='35%'>
              <Typography variant='h5' className={classes.title}>Activity</Typography>
            </Box>
            <Box display='flex' alignItems='center' width='65%' paddingLeft="40px">
              <Box
                height='46px'
                display='flex'
                alignItems='center'
                paddingTop='10px'
                sx={{ borderBottom: 4, borderColor: page === 'Inbox' ? theme.palette.error.main : theme.palette.transparent.main, margin: '10px' }}
              >
                <Typography
                  variant='h7'
                  onClick={() => { setPage('Inbox'); }}
                  className={`${page === 'Inbox' ? classes.pageTitle : classes.pageTitleSecondary} ${classes.navBarText}`}
                >
                  Inbox
                </Typography>
              </Box>
              <MoreVertIcon style={{ fontSize: '20px' }} className={classes.icon} />
              <Box
                height='46px'
                display='flex'
                alignItems='center'
                paddingTop='10px'
                sx={{ borderBottom: 4, borderColor: page === 'All calls' ? theme.palette.error.main : theme.palette.transparent.main, margin: '10px' }}
              >
                <Typography
                  variant='h7'
                  onClick={() => { setPage('All calls'); }}
                  className={`${page === 'All calls' ? classes.pageTitle : classes.pageTitleSecondary} ${classes.navBarText}`}
                >
                  All calls
                </Typography>
              </Box>
              <MoreVertIcon style={{ fontSize: '20px' }} className={classes.icon} />
              <TuneIcon style={{ fontSize: '22px' }} className={classes.tune} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
