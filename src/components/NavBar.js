import React from 'react'
import logo from '../logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'
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
    fontSize: "12px",
    "&:hover": {
      color: "#ffffff",
    },
  },
  btn: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(0),
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
    <img src = {logo} className= {classes.logo} />
      <div className={classes.titleContainer}>
        <Typography variant='h6' className={classes.name}>
          ERDify
        </Typography>

        <Typography variant='body1' className={classes.subtitle}>
          One stop ER Diagram Builder
        </Typography>
      </div>

      <Typography variant='body1' className={classes.menuItem}>
        About Us
      </Typography>

      <Typography variant='body1' className={classes.menuItem}>
        Features
      </Typography>

      <Typography variant='body1' className={classes.menuItem}>
        Pricing
      </Typography>

      <Typography variant='body1' className={classes.menuItem}>
        Products
      </Typography>

      <Typography variant='body1' className={classes.btn}>
        <CustomBtn txt="Sign Up" />
      </Typography>

      <Typography variant='body1' className={classes.btnlogin}>
        <Signoutbtn txt="Log In" />
      </Typography>
    </Toolbar>
  )
}

export default NavBar;
