import React from "react";
import logo from "../assets/logo.png";
import { Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import lkd from "../assets/lkd.png";
import Box from "@mui/material/Box";

const styles = makeStyles((theme) => ({


    bottombar: {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      display: "flex",
      maxWidth: "100%", // Set the container's maximum width to 100%
      overflowX: "hidden",
      justifyContent: "space-between",
      // position: "relative",
      height: '350px',
      alignItems: 'flex-start', 
      
      
    },
    logo: {
      width: "35px",
      backgroundColor: "#000000",
      marginRight: "-40px",
      marginLeft:'-10px',
      display:'flex',
      alignItems:'flex-start',
      marginTop: '0px',
      marginBottom:'-53px',
      height: "35px",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      paddingRight: "200px",
      alignItems: 'flex-start',
      marginLeft:'px'
    },
    name: {
      color: "#00EBEB",
      
      fontWeight: "bold",
      marginLeft: '30px',
      fontFamily: "'Lato', sans-serif",
      marginTop: "20px",
      
    },
    subtitle: {
      fontFamily: "'Lato', sans-serif",
      color: "#00EBEB",
      textAlign: "left",
      marginLeft: '30px',

      fontSize: "12px",
      width: '190px',
      
    },
    note :{
      width: '550px',
      fontFamily: "'Lato', sans-serif",
      marginTop: '20px',
      textAlign: 'justify',
      marginLeft: '30px',

    },
    
    menuItem: {
      cursor: "pointer",

      color: "#ffffff",
    },
  
  subtitle: {
    fontFamily: "'Lato', sans-serif",
    color: "#00EBEB",
    textAlign: "left",
    marginLeft: "30px",

    fontSize: "12px",
    width: "190px",
    "&:hover": {
      color: "#ffffff",
    },
  },
  note: {
    width: "550px",
    fontFamily: "'Lato', sans-serif",
    marginTop: "20px",
    textAlign: "justify",
    marginLeft: "30px",
  },

  menuItem: {
    cursor: "pointer",
    color: "#ffffff",
    marginTop: "20px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "bold",
    fontSize: "18px",
    width: "80px",
    marginLeft: "180px",
    marginRight: "200px",
    "&:hover": {
      color: "#00EBEB",
    },
  },

  company: {
    cursor: "pointer",
    color: "#ffffff",
    marginTop: "55px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "bold",
    fontSize: "25px",
    // flexGrow: 1,
    width: "80px",
    marginLeft: "170px",
    marginRight: "0px",
    "&:hover": {
      color: "#00EBEB",
    },
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: "50px",
    marginTop: "-40px",
  },

  iconContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: 'flex-start',
    alignItems: "flex-start",
    marginLeft: "10px",
    marginTop: "40px",
  },
  icon: {
    width: "30px",
    height: "30px",
    margin: "8px",
    marginTop: "10px",
    marginLeft: "16px",
  },
}));
function Bottombar() {
  const classes = styles();
  return (
    <Toolbar
      sx={{
        flexGrow: "1.5",
      }}
      position="sticky"
      className={classes.bottombar}
    >
      <Box
        sx={{
          marginLeft: "8px",
        }}
      >
        <img src={logo} className={classes.logo} />
        <div className={classes.titleContainer}>
          <div className={classes.name}>ERDify</div>

          <div className={classes.subtitle}>One stop ER Diagram Builder</div>

          <div className={classes.note}>
            ERdify is your intelligent companion for creating
            Entity-Relationship Diagrams (ERDs) effortlessly. With cutting-edge
            AI algorithms, ERdify streamlines the process of visualizing complex
            data structures, helping you design robust databases and
            applications with ease. Say goodbye to tedious manual modeling and
            embrace the power of automation with ERdify, the ultimate ERD
            generator for modern data-driven projects.
          </div>

          <div className={classes.iconContainer}>
            <img src={insta} className={classes.icon} />
            <img src={fb} className={classes.icon} />
            <img src={lkd} className={classes.icon} />
          </div>
        </div>
      </Box>
      <div className={classes.menuContainer}>
        <div className={classes.company}>Company</div>

        <div className={classes.menuItem}>About Us</div>

        <div className={classes.menuItem}>Features</div>

        <div className={classes.menuItem}>Pricing</div>

        <div className={classes.menuItem}>Products</div>
      </div>
    </Toolbar>
  );
}

export default Bottombar;
