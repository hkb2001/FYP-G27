import React from "react";
import { makeStyles } from "@mui/styles";
import { test } from "../assets/test.jpg";
import { test1 } from "../assets/test1.jpg";
import { test2 } from "../assets/test2.png";
import { test3 } from "../assets/test3.jpg";
import { Box } from "@mui/material";
import { Divider } from '@mui/material';
const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
    position: "relative",
    flexDirection: "column",
    backgroundColor: "#EDEDEE",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    textAlign: "center",
    marginTop: "100px",
    margin: "auto",
    width: "350px",
    color: "white",




  },
  heading1: {
    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    textAlign: "center",
    marginTop: "60px",
    margin: "auto",
    width: "350px",
  },
  text: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
width:'330px',
    marginTop: "50px",
    margin: "auto",
    textAlign: "center",
    marginBottom: "20px",
    color: "white",
  },

  
  cont: {
    backgroundColor: "black",
    marginTop: "1px",
    marginLeft: "2px",
    marginRight: "2px",
  },

  column: {
    float: "left",
    width: "293px",
    marginBottom: "50px",
    padding: "0 8px",
    marginLeft: "1px",
  },

  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "8px",
  },

  container: {
    padding: "0 16px",
  },

  // container::after, row::after :{
  //   content: "",
  //   clear: 'both',
  //   display: 'table',
  // },

  title: {
    color: "grey",
  },

  button: {
    border: "none",
    outline: "0",
    display: "inline-block",
    padding: "8px",
    color: "white",
    backgroundColor: "#000",
    textAlign: "center",
    cursor: "pointer",
    width: "100%",
    marginBottom: "20px",

    "&:hover": {
      backgroundColor: "#555",
    },
  },
  cardCont: {
    backgroundColor: "white",
    marginBottom: "4px",
    marginLeft: "2px",
    marginRight: "2px",
  },
  space: {
    marginTop: "30px",
  },
div:{
 height:"1px"
},

head:{
  width:"10%",
  marginLeft:"565px"
}
}));

function About() {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      margin="auto"
      display="flex"
      sx={{
        maxWidth: "xl",
        backgroundColor: "white",
        
      }}
    >
      <div className={classes.contentContainer}>
        <div className={classes.cont}>
         <div className={classes.heading}>About Us</div>
         <div className={classes.space}> </div>
         <div className={classes.head}>   <Divider className={classes.div} sx={{ bgcolor: '#00EBEB' }} variant="middle" /></div>
      
          
          <div className={classes.text}>
          Turn every software project into a successful one.
          Yield  influential  illustrations to  enrich your Ideas,  Plans and Processes 
          </div>
        </div>
        <div className={classes.cardCont}>
          <div className={classes.heading1}>Our Team</div>
          <div className={classes.space}> </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.card}>
                <img
                  src="https://www.kasandbox.org/programming-images/avatars/marcimus.png"
                  alt=""
                />
                <div className={classes.container}>
                  <h2>Hasnain</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>hasnain@example.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img
                  src="https://www.kasandbox.org/programming-images/avatars/marcimus-red.png"
                  alt=""
                />
                <div className={classes.container}>
                  <h2>Soban</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>soban@example.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img
                  src="https://www.kasandbox.org/programming-images/avatars/marcimus-purple.png"
                  alt=""
                />
                <div className={classes.container}>
                  <h2>Malaika</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>malaika@example.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img
                  src="https://www.kasandbox.org/programming-images/avatars/marcimus-orange.png"
                  alt=""
                />
                <div className={classes.container}>
                  <h2>Zain</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>zain@example.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default About;
