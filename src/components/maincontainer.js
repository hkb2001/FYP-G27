import React from 'react';
import { makeStyles } from '@mui/styles';
import CustomBtn from '../CustomBtn';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    backgroundColor: 'black',
    padding: '20px',
    color: 'white',
    height: '450px',
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
  },

  heading: {
    fontSize: '50px',
    fontWeight: 'bold',
    fontFamily: 'Lato, sans-serif',
    textAlign: "left",
    width: '600px',
    marginTop: '40px',
    marginLeft: '10px',
  },
  subtitle: {
    fontSize: '18px',
    fontFamily: 'Lato, sans-serif',
    textAlign: "left",
    width: '550px',
    marginLeft: '10px',
    marginTop: '10px',
  },
  btn:{
    marginTop: "60px",
    marginLeft: theme.spacing(1.5),
  },

}));

const ContentContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.contentContainer}>
      <div className={classes.heading}>
        Work Directly with us for easing your Back-End needs
      </div>
      <div className={classes.subtitle}>
        We develop products to automate things in this fast-paced world by using cutting-edge technologies and methods
      </div>
      <div className={classes.btn}>
        <CustomBtn>Make ERD</CustomBtn>
      </div>
    </div>
  );
};

export default ContentContainer;
