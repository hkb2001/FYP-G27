import React from 'react'
import logo from '../assets/logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import CustomBtn from '../CustomBtn';
import NavBar from './NavBar';
import { hover } from '@testing-library/user-event/dist/hover';

const styles = makeStyles((theme) => ({
container:{
  background: "black",
  width: "300px",
  height: "100vh",
},
dbuttonContainer :{
    height: "100px"
},
dbutton: {  
    backgroundColor: 'black',
    border: '1px solid #00ebeb',
    borderRadius: "10px",
    cursor: "pointer",
    background: "black",
    color: "white",
    width: "296px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 900,
    fontSize: "22px",
    height: "70px",
    display: "flex",
    alignItems: "center", // Vertically center the content
    justifyContent: "center", 
    "&:hover": {
        background: "#9d9fa3"
      },
},
pbutton:{
    marginTop: "10px",
    backgroundColor: 'black',
    border: '1px solid #00ebeb',
    borderRadius: "10px",
    cursor: "pointer",
    background: "black",
    color: "white",
    width: "296px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 900,
    fontSize: "22px",
    height: "70px",
    display: "flex",
    alignItems: "center", // Vertically center the content
    justifyContent: "center", 
    "&:hover": {
        background: "#9d9fa3"
      },
}


}));

function Sidebar() {
  const classes = styles()

  return (
    <div className={classes.fullpage}>
    <div className={classes.container}>
      <div className={classes.dbuttonContainer}></div>
        <div className={classes.dbutton}>
          Dashboard
        </div>
        <div className={classes.pbutton}>
          Projects
        </div>
      
    </div>
  </div>

   
  )
}

export default Sidebar;
