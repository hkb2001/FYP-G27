import React from "react";

import { makeStyles } from "@mui/styles";
import reg from "../assets/reg1.png";
import log from "../assets/log2.png";
import fb from "../assets/fbook1.png";
import goog from "../assets/google.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  parentclear: {
    backgroundColor: "black",
    height: "750px",
  },
  login: {
    borderRadius: "18px",
    marginRight: "40px",
  },
  container: {
    maxWidth: "1600px",
    width: "540px",
    backgroundColor: "#fff",
    padding: "25px 30px",
    borderRadius: "18px",
    height: "600px",
    float: "right",
    marginTop: "40px",
  },
  bgillus: {
    position: "relative",
    backgroundColor: "black",
    float: "left",
    width: "400px",
    height: "100vh",
  },

  img1: {
    width: "670px",
    height: "480px",
    marginTop: "140px",
  },

  title: {
    fontSize: "25px",
    fontWeight: "bold",
    position: "relative",
    marginTop: "20px",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  },

  inp: {
    fontSize: "16px",
    fontWeight: "normal",
    background: "rgba(57, 57, 57, 0.07)",
    margin: "12.5px 0",
    height: "60px",
    border: "1px",
    padding: "0 30px",
    borderRadius: "10px",
    width: "320px",
  },

  signinlink: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  option: {
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

  loginform: {
    marginTop: "30px",
    height: "800px",
  },

  submit: {
    margin: "auto",
    height: "50px",
    width: "300px",
    borderRadius: "18px",
    border: "none",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "1px",
    cursor: "pointer",
    marginTop: "80px",
    background: "black",
    "&:hover": {
      backgroundColor: "#8DEACE",
      color: "white",
    },
  },

  forgetpass: {
    position: "absolute",
    marginLeft: "100px",
    marginTop: "16px",
  },

  for: {
    fontSize: "16px",
    position: "relative",
    fontWeight: "normal",
    color: "#349EE8",
    "&:hover": {
      color: "rgb(63, 63, 215)",
    },
  },

  signuplink: {
    marginTop: "20px",
    fontWeight: "bold",
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
  img: {
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
  userdetails: {
    margin: "-6px 50px -20px 60px",
  },
}));
function Login() {
  const classes = useStyles();
  return (
    <div className={classes.parentclear}>
      <div className={classes.bgillus}>
        <img className={classes.img1} src={log} alt="" />

        <div className={classes.burgerbtn}>
          <span className={classes.spa}></span>
          <span className={classes.spa}></span>
          <span className={classes.spa}></span>
        </div>
      </div>

      <div className={classes.login}>
        <div className={classes.container}>
          <div className={classes.title}>Log In</div>

          <div className={classes.loginform}>
            <form action="">
              <div className={classes.userdetails}>
                <div className={classes.inputbox}>
                  <input
                    autoComplete="off"
                    className={classes.inp}
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className={classes.inputbox}>
                  <input
                    autoComplete="off"
                    className={classes.inp}
                    type="text"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className={classes.forgetpass}>
                <a className={classes.for} href="#">
                  Forgot Password ?
                </a>
              </div>

              <button className={classes.submit} type="submit">
                Log In
              </button>
              <div className={classes.signinlink}>
                Not a member?{" "}
                <NavLink className={classes.lin} to="/signup">
                  SignUp
                </NavLink>
              </div>
            </form>
            <div className={classes.option}>or</div>

            <div className={classes.google}>
              <a className={classes.ab} href="#">
                <img className={classes.img} src={goog} alt="" />
                <p className={classes.tex}>Continue with Google</p>{" "}
              </a>
            </div>
            <div className={classes.facebook}>
              <a className={classes.ab1} href="#">
                <img className={classes.img} src={fb} alt="" />
                <p className={classes.tex1}>Login With Facebook</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
