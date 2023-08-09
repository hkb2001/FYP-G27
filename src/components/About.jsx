import React from 'react';
import { makeStyles } from '@mui/styles';

import { Box, Divider, Typography, } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: 'flex',
    // backgroundColor: 'white',
    
    width: '100%',
    maxWidth: '100%', // Set the container's maximum width to 100%
    overflowX: 'hidden',
    position: 'relative',
    flexDirection:'column'
  },
  heading: {
    fontSize: '42px',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'left',
    marginTop: '100px',
    marginLeft: '150px',
    width: '350px',
  },
  heading1: {
    fontSize: '42px',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'left',
    marginTop: '60px',
    marginLeft: '150px',
    width: '350px',
  },
  text: {
    fontSize: '20px',
    fontFamily: 'Lato, sans-serif',
    textAlign: 'justify',
    marginTop: '50px',
    marginLeft: '200px',
    marginRight:'200px'
    
  },
  redLine: {
    height: '1px',
    backgroundColor: 'black',
     // Add position absolute to adjust its position
    left: '60px', // Set left spacing to 40px
    right: '40px', // Set right spacing to 40px
  },
  spacer:{
    marginTop:'10px',
    marginBottom:'10px'
  }
}));



const About = () => {

  const classes = useStyles();


  return (

    <Box
      alignItems='center'

      margin='auto'
      display='flex'
      sx={{

        maxWidth: 'xl',
        backgroundColor: 'primary.main',

        marginTop: '20px'



      }}

    >
      <div className={classes.contentContainer}>
        <div >
          <div className={classes.heading}>Introduction</div>
          <div className={classes.text}>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
            orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
            eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
            Interdum praesent ut penatibus fames eros ad consectetur sed</div>
        </div>
        <div className={classes.spacer}>
          <div className={classes.heading1}>Mission</div>
          <div className={classes.redLine}></div>
          <div className={classes.text}>Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
            orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
            eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
            Interdum praesent ut penatibus fames eros ad consectetur sed</div>
        </div>

        <div className={classes.spacer}>
          <div className={classes.heading1}>Team</div>
          <div className={classes.text}>
            <ul>
              <li>Sheikh Soban</li>
              <div>hi</div>
            </ul>
          </div>
        </div>

      </div>



    </Box>

  )
}

export default About;