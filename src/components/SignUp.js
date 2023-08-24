import React from "react";

import { makeStyles } from "@mui/styles";

import reg from "../assets/reg1.png";

import fb from "../assets/fbook1.png";
import goog from "../assets/google.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  parentclear: {
    backgroundColor: "black",
    height: "780px",
  },

  login:{
    borderRadius: '18px',
    marginRight: '40px',
    
   
},
container:{
  maxWidth: '1600px',
  width: '540px',
  backgroundColor:'#fff',
  padding: '25px 30px',
  borderRadius: '18px',
 height:'630px',
 float:'right',
 marginTop:"40px",
  
},
bgillus: {
    position: 'relative',
    height: '100vh',
    width: 'fit-content',
   backgroundColor: 'black',
    float:'left',
   

  },

  image1: {
    width: "560px",
    height: "400px",
    marginTop: "170px",
  },

  title: {
    fontSize: "25px",
    fontWeight: "bold",
    position: "relative",
    marginTop: "20px",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  },

  inputbox: {
    marginBottom: "15px",
    width: "277px",
  },

  copy1: {
    marginTop: "20px",
    fontSize: "18",
    color: "black",
    fontWeight: "bold",
    fontFamily: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
  },
  inp: {
    height: "45px",
    width: "230px",
    outline: "none",
    fontSize: "16px",
    borderRadius: "5px",
    paddingLeft: "15px",
    border: "1px solid #ccc",
    borderBottomWidth: "2px",
    transition: "all 0.3s ease",
  },

  category: {
    display: "flex",
    width: "55%",
    margin: "14px 0",
    justifyContent: "space-between",
  },
  lab: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  dot: {
    display: "flex",
    height: "10px",
    width: "10px",
    borderRadius: "50%",
    marginRight: "10px",
    background: "#d9d9d9",
    border: "5px solid transparent",
    transition: "all 0.3s ease",
  },

  inp1: {
    height: "40px",
    width: "300px",
    borderRadius: "18px",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    margin: "auto",
    background: "black",

    "&:hover": {
      backgroundColor: "#8DEACE",
      color: "#fff",
    },
  },

  userdetails: {
    display: "flex",
    flexFlow: "row wrap",

    margin: "26px -10px 13px -10px",
  },
  gender: {
    marginRight: "70px",
  },
  signuplink: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  option1: {
    marginTop: "20px",
    marginBottom: "20px",
    fontWeight: "bold",
    fontSize: "20px",
    "&:before": {
      content: "",
      display: "block",
      height: "2px",
      width: "130px",
      position: "absolute",
      top: "50%",
      left: "100px",
      backgroundColor: "#ccc",
      marginTop: "315px",
    },
    "&:after": {
      content: "",
      display: "block",
      height: "2px",
      width: "135px",
      position: "absolute",
      top: "50%",
      left: "97px",
      backgroundColor: "#ccc",
      marginTop: "315px",
    },
  },

  ab: {
    display: "block",
    height: "45px",
    width: "300px",
    fontSize: "18px",
    textDecoration: "none",
    paddingRight: "7px",
    lineHeight: "20px",
    color: "#fff",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    marginTop: "180px",
  },

  policy: {
    display: "flex",
  },

  head: {
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "20px",
  },

  check: {
    marginTop: "-16px",
  },
  checkg: {
    height: "15px",
    width: "15px",
    borderRadius: "50%",
    marginRight: "10px",
    background: "#d9d9d9",
    border: "5px solid transparent",
    transition: "all 0.3s ease",
  },

  ab: {
    background: " linear-gradient( to right,  #3b5998 0%, #476bb8 100%)",
    margin: "-30px 0px 50px 73px",
    "&:hover": {
      background: "linear-gradient( to left,  #3b5998 0%, #476bb8 100%)",
    },
  },

  ab: {
    display: "block",
    height: "45px",
    width: "300px",
    fontSize: "18px",
    textDecoration: "none",
    paddingRight: "8px",
    lineHeight: "20px",
    color: "black",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    background: "white",
    borderStyle: "groove",
    margin: "10px 0px 45px 120px",
    "&:hover": {
      background: "rgb(245, 244, 242)",
      margin: "10px 0px 45px 120px",
    },
  },
  ab1: {
    display: "block",
    height: "45px",
    width: "300px",
    fontSize: "18px",
    textDecoration: "none",
    paddingRight: "8px",
    marginBottom: "10px",
    color: "white",
    borderRadius: "5px",
    transition: "all 0.3s ease",
    background: "#5F84EE",
    borderStyle: "groove",
    margin: "-30px 0px 20px 120px",
    "&:hover": {
      background: "#7B9BF9 ",
      margin: "-30px 0px 20px 120px",
      marginBottom: "10px",
    },
  },
  image2: {
    paddingRight: "190px",
    fontSize: "20px",
    color: "blue",
    marginTop: "8px",
  },
  tex: {
    marginTop: "-25px",
    marginLeft: "45px",
  },
  tex1: {
    marginTop: "-32px",
    marginLeft: "45px",
  },
}));


function SignUp(){
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.parentclear}>
      <div className={classes.bgillus}>
        <img className={classes.image1} src={reg} alt="" />

        <div className={classes.burgerbtn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={classes.login}>
        <div className={classes.container}>
          <div className={classes.title}>Sign Up</div>

          <div className={classes.content}>
            <form autoComplete="off" action="#">
              <div className={classes.userdetails}>
                <div className={classes.inputbox}>
                  <input
                    autoComplete="off"
                    className={classes.inp}
                    type="text"
                    placeholder="FirstName"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <input
                    autoComplete="off"
                    className={classes.inp}
                    type="text"
                    placeholder="LastName"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <input
                    className={classes.inp}
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <input
                    className={classes.inp}
                    type="text"
                    placeholder="Enter your number"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <input
                    className={classes.inp}
                    type="text"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <div></div>
                  <input
                    className={classes.inp}
                    type="text"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              <div className={classes.genderdet}>
                <div className={classes.category}>
                  <label className={classes.lab} for="dot-1">
                    <input className={classes.checkg} type="checkbox" />
                    <span className={classes.gender}>Male</span>

                    <input className={classes.checkg} type="checkbox" />
                    <span className={classes.gender}>Female</span>
                  </label>
                </div>
                <div className={classes.policy}>
                  <input className={classes.check} type="checkbox" />
                  <h3 className={classes.head}>
                    {" "}
                    I accept all <a href="">Terms & Condition</a>
                  </h3>
                </div>
              </div>

              <div className={classes.button}>
                <input
                  className={classes.inp1}
                  type="submit"
                  value="Register"
                />
              </div>
              <div className={classes.signuplink}>
                Already have an Account?{" "}
                <NavLink class="lin" to="/login">
                  SignIn
                </NavLink>
              </div>
            </form>
          </div>
          <div className={classes.option1}>or</div>
          <div className={classes.google1}>
            <a className={classes.ab} href="#">
              <img className={classes.image2} src={goog} alt="" />
              <p className={classes.tex}>Continue with Google</p>{" "}
            </a>
          </div>
          <div className={classes.facebook1}>
            <a className={classes.ab1} href="#">
              <img className={classes.image2} src={fb} alt="" />
              <p className={classes.tex1}>Login With Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
