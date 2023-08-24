
import React from 'react'
import logo from '../assets/logo.png'
import Signoutbtn from './signoutbtn'
import { Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {NavLink} from 'react-router-dom' 
import {Link} from 'react-router-dom' 
import { hover } from '@testing-library/user-event/dist/hover';
import dashboard from '../assets/dashboard.JPG';
import projects from '../assets/projects.JPG'
import { alignProperty } from '@mui/material/styles/cssUtils';
import { padding } from '@mui/system';
import help from '../assets/help.JPG'

const styles = makeStyles((theme) => ({
container:{
  background: "black",
  width: "300px",
  height: "560px",
  paddingBottom: "30px",
  marginBottom: "-30px"

},
dbuttonContainer :{
    height: "100px",
},
dbtnimage: {
  width: "60px",
  height: "40px",
  paddingLeft: "15px"

  },
dbutton: {  
    backgroundColor: 'black',
    border: '1px solid #00ebeb',
    borderRadius: "10px",
    cursor: "pointer",
    background: "black",
    color: "white",
    marginBottom: "10px",
    width: "265px",
    fontFamily: "Lato, sans-serif",
    fontWeight: 900,
    fontSize: "22px",
    height: "60px",
    display: "flex",
    alignItems: "center", // Vertically center the content

    justifyContent: "flex-start", 
    "&:hover": {
        background: "#000000",
        color: "#00ebeb",
        border: '1px solid #ffffff',

      },
},
dbtntext: {
  marginLeft: "20px",

},
pbtnimage: {
  width: "40px",
  height: "40px",
  paddingLeft: "30px",
  paddingRight: "5px"
  
},
bottombutton: {
  backgroundColor: 'black',
  border: '1px solid #00ebeb',
  borderRadius: "10px",
  cursor: "pointer",
  background: "black",
  color: "white",
  marginBottom: "-30px",
  marginTop: "240px",
  width: "265px",
  fontFamily: "Lato, sans-serif",
  fontWeight: 900,
  fontSize: "22px",
  height: "60px",
  display: "flex",
  alignItems: "center", // Vertically center the content
  justifyContent: "flex-start", 
  "&:hover": {
      background: "#000000",
      color: "#00ebeb",
      border: '1px solid #ffffff',

    },
},
hbtnimage:{
  width: "40px",
  height: "35px",
  paddingLeft: "30px",
  paddingRight: "5px"
}

}));

function Sidebar() {
  const classes = styles();

  return (

        <div className={classes.container}>
          <div className={classes.dbuttonContainer}></div>
            <div className={classes.dbutton}>
            <img className={classes.dbtnimage} src={dashboard} alt="" />
              <div className={classes.dbtntext}>Dashboard</div>
        </div>
        <div className={classes.dbutton}>
        <img className={classes.pbtnimage} src={projects} alt="" />
        <div className={classes.dbtntext}>Projects</div>
        </div>
      <div className={classes.bottombutton}>
      <img className={classes.hbtnimage} src={help} alt="" />
      <div className={classes.dbtntext}>Help</div>
      </div>

      </div>  
  )

}

export default Sidebar;
