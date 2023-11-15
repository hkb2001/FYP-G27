import React from "react";
import { makeStyles } from "@mui/styles";
import web from "../assets/web.png";
import exp from "../assets/exp.png";
import edit from "../assets/edit.png";
import resp from "../assets/resp.png";
import { Box } from "@mui/material";
import { Divider } from "@mui/material";
import res from "../assets/res.png";
import share from "../assets/share.png";
import easy from "../assets/easy.png";
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
    marginTop: "20px",
    margin: "auto",
    width: "750px",
    color: "#E7EBEB",
    marginBottom: "20px",
  },

  text: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    width: "500px",
    marginTop: "50px",
    margin: "auto",
    textAlign: "center",
    marginBottom: "30px",
    color: "#E7EBEB",
  },

  cont: {
    backgroundColor: "black",
    height: "280px",
  },

  column: {
    float: "left",
    width: "313px",
    marginBottom: "30px",
    padding: "0 8px",
    marginLeft: "17px",
  },

  card: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    margin: "8px",
    marginBottom: "20px",
  },

  container: {
    padding: "0 16px",
    height: "160px",
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
    width: "80px",
    height: "80px",
    marginTop: "30px",
  },

  para: {
    color: "grey",
  },

  row1: {
    marginLeft: "156px",
  },
  line: {
    border: "1px solid #00ebeb",
    width: "120px",
    marginBottom: "20px",
    marginLeft: "80px",
  },
}));

function Features() {
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
          <div className={classes.heading}>Our Features</div>
          <div className={classes.space1}> </div>
          <div className={classes.head}>
            <div className={classes.line}> </div>
          </div>

          <div className={classes.text}>
            Transforming ideas into reality - our innovative feature
            revolutionizes the way you work
          </div>
        </div>
        <div className={classes.cardCont}>
          <div className={classes.space}> </div>
          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.card}>
                <img src={web} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Web Interface</h2>
                  <div className={classes.para}>
                    The web interface is designed for ease of use and easy
                    navigation, making it possible to interact with the
                    platform's features
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={exp} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Export as JPG/PNG</h2>

                  <div className={classes.para}>
                    Effortlessly export your creations with convenience,
                    enabling you to save your work in popular image formats
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={edit} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Editable ERD</h2>

                  <div className={classes.para}>
                    Experience the convenience of an editable ERD, empowering
                    you to make real-time refinements to your database schema
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={resp} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Responsive Design</h2>

                  <div className={classes.para}>
                    Embrace seamless browsing on any device with our responsive
                    design, ensuring optimal layout and functionality
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.row1}>
            <div className={classes.column}>
              <div className={classes.card}>
                <img src={res} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Professional Results</h2>
                  <div className={classes.para}>
                    Professionally optimizes layout and design for a polished
                    and impressive final product with minimal effort required
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={share} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>One Click Sharing</h2>

                  <div className={classes.para}>
                    Allow you to distribute your content quickly and seamlessly,
                    enhancing collaboration and communication
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.column}>
              <div className={classes.card}>
                <img src={easy} className={classes.img} alt="" />
                <div className={classes.container}>
                  <h2>Quick and Easy</h2>

                  <div className={classes.para}>
                    Experience a quick and easy solution that simplifies complex
                    tasks ensuring efficient workflow. Just provide Text and
                    Relax
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Features;
