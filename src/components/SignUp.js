import React from "react";
import signup from './signup.png';
import wel from './wel.jpg';
import reg from './reg1.png';
import './Signup.css';
function SignUp(){
return(
    <div class="parent clearfix">
    <div class="bg-illustration">
   
    <img class="image1" src={reg} alt=""/>
      
      <div class="burger-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>
    
    <div class="login">
      <div class="container">
      <div class="title">Sign Up</div>
      
        <div class="content">
          <form action="#">
         
          <div class="user-details">
          <div class="input-box">
            
            <input type="text" placeholder="FirstName" required/>
          </div>
          <div class="input-box">
            
            <input type="text" placeholder="LastName" required/>
          </div>
          <div class="input-box">
            
            <input type="text" placeholder="Email" required/>
          </div>
          <div class="input-box">
           
            <input type="text" placeholder="Enter your number" required/>
          </div>
          <div class="input-box">
            
            <input type="text" placeholder="Enter your password" required/>
          </div>
          <div class="input-box">
            <div>

            </div>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
        </div>
        <div class="gender-details">
        <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
         
          
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          
          </div>
          <div class="policy">
        <input type="checkbox"/>
        <h3>  I accept all <a href="">Terms & Condition</a></h3>
      </div>
        </div>
       
        <div class="button">
          <input type="submit" value="Register"/>
        </div>
        <div class="signup-link">
               Already have an Account? <a href="#">SignIn</a>
            </div>

          </form>
         
        </div>
        <div class="option1">or</div>
        <div class="google1">
          <a href="#"><i class="zmdi zmdi-google"></i>Continue with Google </a>
        </div>
        <div class="facebook1">
          <a href="#"><i class="zmdi zmdi-facebook-box"></i>Login With Facebook</a>
        </div>
        
        <div className="copy1">
        <span>@ 2023 ERDify Inc.</span>
      </div>
      </div>
      
      </div>
  </div>
   
)
}
export default SignUp;