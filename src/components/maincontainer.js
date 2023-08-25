import React from 'react';
import { makeStyles } from '@mui/styles';
import CustomBtn from '../CustomBtn';

import {NavLink} from 'react-router-dom' 
import { useNavigate } from 'react-router-dom';

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
  lin:{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "30px", 
    width: "140px",
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#00EBEB",
    fontSize: '15px',
    color: "#000000",
    transform: "none",
    transition: "background .3s, border-color .3s, color.3s" ,
    "&:hover":{
        background: "#9d9fa3"
    },
    fontFamily: "'Lato', sans-serif",
  }

}));

const ContentContainer = () => {
  const classes = useStyles();
  const navigate=useNavigate()
  const dash = () => navigate('/dashboard');
  return (
    <div className={classes.contentContainer}>
      <div className={classes.heading}>
        Work Directly with us for easing your Back-End needs
      </div>
      <div className={classes.subtitle}>
        We develop products to automate things in this fast-paced world by using cutting-edge technologies and methods
      </div>
      <div className={classes.btn}>


        {/* <CustomBtn>Make ERD</CustomBtn> */}
        

        <CustomBtn onClick={dash}>Make ERD</CustomBtn>


      </div>
    </div>
  );
};  

export default ContentContainer;
