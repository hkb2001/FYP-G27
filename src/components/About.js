import React from "react";
import { makeStyles } from "@mui/styles";
import hasnain from "../assets/hasnain.jpg";
import soban from "../assets/soban.jpg";
import zain from "../assets/zain1.png";
import img4 from "../assets/img1.jpg";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import insta from "../assets/insta1.png";
import fb from "../assets/fb1.png";
import lkd from "../assets/lin1.png";
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
    marginTop: "50px",
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
  heading2: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    textAlign: "center",
    marginTop: "60px",
    margin: "auto",
    width: "750px",
    color: "#E7EBEB",
    marginBottom: "40px",
  },

  text: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    width: "100%",
    marginTop: "25px",
    margin: "auto",
    textAlign: "center",
    marginBottom: "20px",
    color: "#E7EBEB",
  },

  cont: {
    backgroundColor: "black",
  },

  column: {
    float: "left",
    width: "320px",
    marginBottom: "20px",
    padding: "0 8px",
    marginLeft: "11px",
  },

  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "8px",
  },

  container: {
    padding: "0 16px",
  },

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
  },
  space: {
    marginTop: "50px",
  },

  space1: {
    marginTop: "30px",
  },
  div: {
    height: "1px",
  },

  head: {
    width: "10%",
    marginLeft: "565px",
  },

  img: {
    width: "305px",
    height: "325px",
    borderBottom: "5",
  },
  icon: {
    width: "50px",
    height: "50px",

    marginRight: "20px",
    "&:hover": {
      boxShadow: "0 4px 15px 0 rgba(120,120,120)",
      // backgroundColor: "grey",
      borderRadius: 13,
    },
  },
  icons: {
    marginLeft: "1000px",
    marginBottom: "10px",
  },
  line: {
    border: "1px solid #00ebeb",
    width: "120px",
    marginBottom: "50px",
    marginLeft: "75px",
  },
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
          <div className={classes.space1}> </div>
          <div className={classes.head}>
            <div className={classes.line}> </div>
          </div>

          <div className={classes.text}>
            Let's make every software project a success.
          </div>
          <div className={classes.heading}>Who Are We?</div>
          <div className={classes.heading2}>
            ERDify is an innovative tool that can be used to ease the time
            taking and hectic process of Entity-Relationship Diagram generation.
            ERDify allows businesses to reduce the time and resources spent on
            these task and focus more on highvalued tasks. By using NLP
            techniques, we aim to identify and extract information for ERDs and
            generate Entity Relation Diagram. With the help of our ERDify, users
            can design ER Diagrams efficiently without having the need to be a
            database expert.
          </div>
        </div>
        <div className={classes.cardCont}>
          <div className={classes.heading1}>Our Team</div>
          <div className={classes.space}> </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.card}>
                <img src={hasnain} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Hasnain Khalid</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>hasnainkbhatti@gmail.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={img4} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Malaika Munawar</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>malaikamunawar@gmail.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={zain} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Zain Hassan</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>zhassan9246@gmail.com</p>
                  <p>
                    <button className={classes.button}>Contact</button>
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={soban} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Sheikh Soban</h2>
                  <p className={classes.title}>CEO & Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>sheikhsoban4@gmail.com</p>
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
