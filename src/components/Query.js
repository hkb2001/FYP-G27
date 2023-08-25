import { React, useState } from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
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
   marginLeft:'300px',
    height: "540px",
   marginTop:'-590px'
  },

  namebar: {
    background: "white",
    width: "963px",
    height: "50px",
    marginTop: "-45px",
marginLeft:'-30px'
  },

  text: {
    fontSize: "20px",
    paddingTop: "10px",
    marginRight: "860px",
  },
  count:{
marginLeft:'10px',
width:'300px',
textAlign:'left'
  },
  button:{
    alignItems: "center",
        justifyContent: "center",
        height: "30px", 
        width: "140px",
        marginTop:'0px',
        marginLeft:'750px',
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
  const load = () => navigate('/loader');
  return (
    
    <div className={classes.main}>
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.namebar}>
          <p className={classes.text}>untitled</p>
        </div>
        <div className={classes.query}>
          <TextField
            sx={{
              marginTop: "30px",
              width: 900,
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
          <button onClick={load} className={classes.button}>Create ERD</button>
       </div>
   
    </div>
    </div>
  );
}
export default QueryPage;
