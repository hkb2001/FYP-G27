import { React, useState } from "react";
import { Button, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import ERDVisualization from "./ERDVisualization";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "590px",
    width: "100%",
    background: "grey",
  },
  container: {
    width: "903px",
    backgroundColor: "#FAFAFA ",
    padding: "25px 30px",
    marginLeft: '300px',
    height: "540px",
    marginTop: '-590px'
  },
  query: {
    width: '100%',
    height: '90%',
  },
  namebar: {
    background: "white",
    width: "963px",
    height: "50px",
    marginTop: "-45px",
    marginLeft: '-30px'
  },
  text: {
    fontSize: "20px",
    paddingTop: "10px",
    marginRight: "860px",
  },
  count: {
    marginLeft: '10px',
    width: '300px',
    textAlign: 'left'
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: "30px",
    width: "140px",
    marginTop: '0px',
    marginLeft: '750px',
    boxSizing: "border-box",
    fontWeight: "bold",
    borderRadius: 4,
    backgroundColor: "#00EBEB",
    fontSize: '15px',
    color: "#000000",
    transform: "none",
    transition: "background .3s, border-color .3s, color.3s",
    border: 'none',
    "&:hover": {
      background: "#9d9fa3"
    },
    fontFamily: "'Lato', sans-serif",
  }
}));

function ErdDashboard() {
  const classes = useStyles();
  const navigate = useNavigate();
  const load = () => navigate('/loader');
  
  const handleExport = () => {
    fetch('http://localhost:5000/export', {
      method: 'POST',
      mode: 'no-cors', // Set the request's mode to 'no-cors'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // You can pass data if needed
    })
    .then(response => {
      console.log('Request successful');
      // Handle success response here, if needed
    })
    .catch(error => {
      console.error('Request failed', error);
      // Handle error here, if needed
    });
  };

  return (
    <div className={classes.main}>
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.query}>
          <ERDVisualization/>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button style={{ backgroundColor: '#00EBEB', margin: '0 10px' }}>Save</Button>
          <Button style={{ backgroundColor: '#00EBEB', marginLeft:'100px' }} onClick={handleExport}>Export</Button>
        </div>
      </div>
    </div>
  );
}

export default ErdDashboard;
