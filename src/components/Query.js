import { React, useState } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { height, width } from "@mui/system";
import CustomBtn from "../CustomBtn";
const useStyles = makeStyles((theme) => ({
  main: {
    height: "571px",
    width: "100%",
    background: "grey",
  },
  bgillus: {
    position: "absolute",
    height: "571px",
    width: "200px",
    backgroundColor: "black",
    float: "left",
  },

  container: {
    width: "1050px",
    backgroundColor: "#FAFAFA ",
    padding: "25px 30px",
    float: "right",
    height: "521px",
  },

  namebar: {
    background: "white",
    width: "1080px",
    height: "50px",
    marginTop: "-45px",
  },

  text: {
    fontSize: "20px",
    paddingTop: "10px",
    marginRight: "930px",
  },
  count:{
marginRight:'790px'
  },
  button:{
    alignItems: "center",
        justifyContent: "center",
        height: "30px", 
        width: "140px",
        marginTop:'0px',
        marginLeft:'830px',
        boxSizing: "border-box",
        fontWeight: "bold",
        borderRadius: 4,
        backgroundColor: "#00EBEB",
        fontSize: '15px',
        color: "#000000",
        transform: "none",
        transition: "background .3s, border-color .3s, color.3s" ,
        border:'none',
        "&:hover":{
            background: "#9d9fa3"
        },
        fontFamily: "'Lato', sans-serif",
  }
}));
function QueryPage() {
  const [text, setText] = useState("");
//character count
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
//word count
  const getWordCount = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    return words.length;
  };

  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.bgillus}>
        <div className={classes.burgerbtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.namebar}>
          <p className={classes.text}>untitled</p>
        </div>
        <div className={classes.query}>
          <TextField
            sx={{
              marginTop: "30px",
              width: 1000,
              height: 355,
              background: "white",
              border: "white",
              borderRadius: 1,
            }}
            className={classes.text1}
            variant="outlined"
            placeholder="Paste your text here ..."
            multiline
            onChange={handleTextChange}
            rows={14}
            maxRows={50}
          ></TextField>
          <div className={classes.count}>
            {getWordCount()} words / {text.length} characters
          </div>
          <button className={classes.button}>Create ERD</button>
        </div>
      </div>
    </div>
  );
}
export default QueryPage;
