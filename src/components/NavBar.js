import React from 'react'
import logo from '../assets/logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom' 
import CustomBtn from '../CustomBtn';

import { color, style } from '@mui/system';
import Pricing from './pricing';
import Dashboard from './dashboard';
import { useNavigate } from 'react-router-dom';


const styles = makeStyles((theme) => ({
  bar: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    display: "flex",
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
    justifyContent: "space-between",
    // Center items vertically

  },
  logo: {
    width: "35px",
    backgroundColor: "#000000",
    marginRight: "-20px",
    height: "35px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "445px",

  },
  name: {
    color: "#00EBEB",
    
    fontWeight: "bold",
    fontSize:'20px',

    fontFamily: "'Lato', sans-serif",
    textAlign: "left",
    
    ['@media (max-width:10px)']: {
      paddingBottom: "1rem"
    }
  },
  subtitle: {
    fontFamily: "'Lato', sans-serif",
    color: "#00EBEB",
    textAlign: "left",
    fontSize: "12px",
    
  },
  btn: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
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
lin:{
  textDecoration: 'none',
}
  
}));

function NavBar() {
  const classes = styles()
const navigate=useNavigate()
const sign = () => navigate('/signup');
const logi = () => navigate('/login');
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

      {/* <div className={classes.menuItem}>
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
      </div> */}
      <nav>

  
    <NavLink className={classes.lin}  to="/" activeClassName="active">Home</NavLink>
  
    <NavLink className={classes.lin} to="/about" activeClassName="active">About</NavLink>
       
    <NavLink className={classes.lin} to="/features" activeClassName="active">Features</NavLink>

    <NavLink className={classes.lin} to="/products" activeClassName="active">Products</NavLink>

    <NavLink className={classes.lin} to="/pricing" activeClassName="active">Pricing</NavLink>

    </nav>
      <div >
        <CustomBtn onClick={sign}>SIGN UP</CustomBtn>
      </div>

      <div >
        <Signoutbtn onClick={logi}>Log In</Signoutbtn>
      </div>
    </Toolbar>
  )
}

export default NavBar;
