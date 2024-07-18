
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'; 
import ecommerceLogo from "../assets/Images/ecommerceLogo.png"



const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <div className="welcome-content">
        <p>Explore our products and enjoy shopping!</p>
        <div className="buttons">
          <Link to="/SignInPage"><button className="signin-btn">Sign In</button></Link>
          <Link to="/SignUpPage"><button className="signup-btn">Sign Up</button></Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
