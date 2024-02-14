import React from "react";
import { makeStyles } from "@mui/styles";
import { HashLoader } from "react-spinners";
import { Typewriter } from "react-simple-typewriter";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "1263px",
    height: "680px",
    background: "black",
  },

  text1: {
    fontFamily: "Monaco",
    fontSize: "20px",
    color: "white",
    paddingTop: "30px",
  },
  loader: {
    paddingTop: "250px",

    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: "white",
    textAlign: "center",
    background: "grey",
  },
}));
function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.loader}>
        <HashLoader size={100} color={"aqua"} speedMultiplier={1.0} />
      </div>

     
      <div className={classes.text1}>
        
        <Typewriter
          words={["Extracting Entities", "Extracting Attributes", "Identifying Relationship", "Cardinality Generation"]}
          typeSpeed={130}
          deleteSpeed={0}
          delaySpeed={200}
        />
      </div>
    </div>
  );
}

export default Loading;
