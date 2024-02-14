import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    backgroundColor: "white",
    height: "320px",
    width: "100%",
    maxWidth: "100%", // Set the container's maximum width to 100%
    overflowX: "hidden",
    position: "relative",
  },
  heading: {
    fontSize: "42px",
    fontWeight: "bold",
    fontFamily: "Lato, sans-serif",
    textAlign: "left",
    marginTop: "100px",
    marginLeft: "150px",
    width: "350px",
  },
  text: {
    fontSize: "20px",
    fontFamily: "Lato, sans-serif",
    textAlign: "left",
    marginTop: "100px",
    marginLeft: "200px",
    width: "350px",
  },
  redLine: {
    height: "1px",
    backgroundColor: "black",
    position: "absolute", // Add position absolute to adjust its position
    top: "50px", // Top position of 30px
    left: "40px", // Set left spacing to 40px
    right: "40px", // Set right spacing to 40px
  },
}));

const Middlebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentContainer}>
      <div className={classes.redLine}></div>
      <div className={classes.heading}>Built with your well-being in mind</div>
      <div className={classes.text}>
        Design your ER Diagram just by entering your stories or requirements and
        with in minutes get your Entity Relation Diagram.
      </div>
    </div>
  );
};

export default Middlebar;
