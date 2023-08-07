import React from "react";
import log from './log2.png';

import './Login.css';
function Login(){
return(
    <div class="parent clearfix">
    <div class="bg-illustration">
    <img class="image2" src={log} alt=""/>

      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div class="login">
      <div class="container">
      <div class="title">Sign In</div>
    
        <div class="login-form">
          <form action="">
          
            <input type="email" placeholder="E-mail Address" />
            <input type="password" placeholder="Password" />

            
            <div class="forget-pass">
              <a href="#">Forgot Password ?</a>
            </div>

            <button type="submit">Log In</button>
            <div class="signup-link">
               Not a member? <a href="#">SignUp now</a>
            </div>
          </form>
          <div class="option">or</div>
          <div class="google">
          <a href="#"><i class="zmdi zmdi-google"></i>Continue with Google </a>
        </div>
        <div class="facebook">
          <a href="#"><i class="zmdi zmdi-facebook-box"></i>Login with Facebook</a>
        </div>
            </div>
            
            
      </div>
      <div className="copy">
        <span>@ 2023 ERDify Inc.</span>
      </div>
      </div>
      <div>
      </div>
  </div>
   
)
}
export default Login;