import React from 'react'
import logo from '../logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar, Typography, makeStyles } from '@material-ui/core'
import insta from '../insta.png'
import fb from '../fb.png'
import lkd from '../lkd.png'

const styles = makeStyles((theme) => ({
    bottombar: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      display: "flex",
      maxWidth: "100%", // Set the container's maximum width to 100%
      overflowX: "hidden",
      justifyContent: "space-between",
      position: "relative",
      height: '350px',
      alignItems: "flex-start", 
      
    },
    logo: {
      width: "35px",
      backgroundColor: "#000000",
      marginRight: "-40px",
      marginTop: '30px',
      height: "35px",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "200px",
      alignItems: 'flex-start',
    },
    name: {
      color: "#00EBEB",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: '30px',
      fontFamily: "'Lato', sans-serif",
      marginTop: "20px",
      "&:hover": {
        color: "#ffffff",
      },
    },
    subtitle: {
      fontFamily: "'Lato', sans-serif",
      color: "#00EBEB",
      textAlign: "left",
      marginLeft: '30px',

      fontSize: "12px",
      width: '190px',
      "&:hover": {
        color: "#ffffff",
      },
    },
    note :{
      width: '550px',
      fontFamily: "'Lato', sans-serif",
      marginTop: '20px',
      textAlign: 'left',
      marginLeft: '30px',

    },
    
    menuItem: {
      cursor: "pointer",
      color: "#ffffff",
      marginTop: '20px',
      fontFamily: "'Lato', sans-serif",
      fontWeight: 'bold',
      fontSize: "18px",
      flexGrow: 1.5,
      width: '80px',
      marginLeft: "180px",
      marginRight: '200px',
      "&:hover": {
        color: "#00EBEB",
      },
    },

    company: {
      cursor: "pointer",
      color: "#ffffff",
      marginTop: '55px',
      fontFamily: "'Lato', sans-serif",
      fontWeight: 'bold',
      fontSize: "25px",
      flexGrow: 1,
      width: '80px',
      marginLeft: "170px",
      marginRight: '0px',
      "&:hover": {
        color: "#00EBEB",
      },
    },

    iconContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: 'flex-start',
      alignItems: "flex-start",
      marginLeft: '10px', 
      marginTop: '40px',
    },
    icon: {
      width: "30px",
      height: "30px",
      margin: theme.spacing(1),
      marginTop: '10px',
      marginLeft: theme.spacing(2),
    },

  }));
function Bottombar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" className={classes.bottombar}>
    <img src = {logo} className= {classes.logo} />
      <div className={classes.titleContainer}>
        <Typography variant='h6' className={classes.name}>
          ERDify
        </Typography>

        <Typography variant='body1' className={classes.subtitle}>
          One stop ER Diagram Builder
        </Typography>

        <Typography variant='body1' className={classes.note}>
        ERdify is your intelligent companion for creating Entity-Relationship Diagrams (ERDs) effortlessly. With cutting-edge AI algorithms, ERdify streamlines the process of visualizing complex data structures, helping you design robust databases and applications with ease. Say goodbye to tedious manual modeling and embrace the power of automation with ERdify, the ultimate ERD generator for modern data-driven projects.
        </Typography>

        <div className={classes.iconContainer}>
      <img src = {insta} className= {classes.icon} />
      <img src = {fb} className= {classes.icon} />
      <img src = {lkd} className= {classes.icon} />
      </div>
      </div>
      <div className={classes.menucontainer}>

      <Typography variant='h5' className={classes.company}>
        Company
      </Typography>

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
      </div>
     
      


    </Toolbar>
    )
}

export default Bottombar
