import React from 'react'
import logo from '../assets/logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CustomBtn from '../CustomBtn';

const styles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    display: "flex",
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
    justifyContent: "space-between",
    alignItems: "center", // Center items vertically

  },
  logo: {
    width: "35px",
    backgroundColor: "#000000",
    marginRight: "0px",
    height: "35px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "400px",

  },
  name: {
    color: "#00EBEB",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize:'20px',

    fontFamily: "'Lato', sans-serif",
    textAlign: "left",
    "&:hover": {
      color: "#ffffff",
    },
    ['@media (max-width:10px)']: {
      paddingBottom: "1rem"
    }
  },
  subtitle: {
    fontFamily: "'Lato', sans-serif",
    color: "#00EBEB",
    textAlign: "left",
    fontSize: "15px",
    "&:hover": {
      color: "#ffffff",
    },
  },
  btn: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(0),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "34px",
    width: "150px",
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: 10,
    backgroundColor: "#00EBEB",
    fontSize: '20px',
    color: "#000000",
    transform: "none",
    transition: "background .3s, border-color .3s, color.3s",
    "&:hover": {
      background: "#9d9fa3"
    },
    fontFamily: "'Lato', sans-serif",

  },

  menuItem: {
    cursor: "pointer",
    color: "#ffffff",
    fontFamily: "'Lato', sans-serif",
    fontSize: "15px",
    flexGrow: 0.1,
    marginLeft: theme.spacing(2),
    "&:hover": {
      color: "#00EBEB",
    },
  },
}));

function NavBar() {
  const classes = styles()

  return (
    <Toolbar position="sticky" className={classes.bar}>
      <img src={logo} className={classes.logo} />
      <div className={classes.titleContainer}>
        <div className={classes.name}>
          ERDify
        </div>

        <div className={classes.subtitle}>
          One stop ER Diagram Builder
        </div>
      </div>

      <div className={classes.menuItem}>
        About Us
      </div>

      <div className={classes.menuItem}>
        Features
      </div>

      <div className={classes.menuItem}>
        Pricing
      </div>

      <div className={classes.menuItem}>
        Products
      </div>

      <div >
        <CustomBtn onClick={()=>console.log("check")}>SIGN UP</CustomBtn>
      </div>

      <div >
        <Signoutbtn>Log In</Signoutbtn>
      </div>
    </Toolbar>
  )
}

export default NavBar;
