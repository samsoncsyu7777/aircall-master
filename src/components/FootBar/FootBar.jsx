import React, { useState } from 'react';
import { Box, Paper, Badge } from '@mui/material';
import useStyles from './useStyles.jsx';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { RiSettings5Fill } from 'react-icons/ri';
import { theme } from '../../theme.jsx';

const FootBar = ({ missedCalls }) => {
  const [footIndex, setFootIndex] = useState(0);
  const classes = useStyles();

  function handleClick(index) {
    setFootIndex(index);
  }

  return (
    <Paper className={classes.paper} elevation={5}>
      <Box width='100%' height='56px' display='flex' justifyContent='center' alignItems='center'>
        <Box
          height='50px'
          display='flex'
          alignItems='center'
          onClick={() => handleClick(0)}
          sx={{ borderBottom: 4, borderColor: footIndex === 0 ? theme.palette.action.active : theme.palette.transparent.main, margin: '0px 18px 0px 18px' }}
        >
          <Box >
            <Badge badgeContent={missedCalls} color='error'>
              <PhoneIcon sx={{ fontSize: '20px' }} className={footIndex === 0 ? classes.selectedIcon : classes.icon}/>
            </Badge>
          </Box>
        </Box>
        <Box
          height='50px'
          display='flex'
          alignItems='center'
          onClick={() => handleClick(1)}
          sx={{ borderBottom: 4, borderColor: footIndex === 1 ? theme.palette.action.active : theme.palette.transparent.main, margin: '0px 18px 0px 18px' }}
        >
          <ContactPageOutlinedIcon className={footIndex === 1 ? classes.selectedIcon : classes.icon} />
        </Box>
        <RadioButtonCheckedIcon fontSize='100px' className={classes.largeIcon} />
        <Box
          height='50px'
          display='flex'
          alignItems='center'
          onClick={() => handleClick(2)}
          sx={{ borderBottom: 4, borderColor: footIndex === 2 ? theme.palette.action.active : theme.palette.transparent.main, margin: '0px 18px 0px 18px' }}
        >
          <RiSettings5Fill className={footIndex === 2 ? classes.selectedIcon : classes.icon} />
        </Box>
        <Box
          height='50px'
          display='flex'
          alignItems='center'
          onClick={() => handleClick(3)}
          sx={{ borderBottom: 4, borderColor: footIndex === 3 ? theme.palette.action.active : theme.palette.transparent.main, margin: '0px 18px 0px 18px' }}
        >
          <RadioButtonCheckedIcon sx={{color: footIndex === 3 ? theme.palette.action.click : theme.palette.action.active}} className={classes.icon} />
        </Box>
      </Box>
    </Paper>
  );
};

export default FootBar;
