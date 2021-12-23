import "./Login.css";

import React from "react";
// import {
//     FaRegTimesCircle

//   } from "react-icons/fa";frr

const Login = () => {
  return (
    <div className="mainContainer">
    <div className="loginContainer">
      <div className="loginHeader">
        {/* <FaRegTimesCircle size={'30px'}/> */}
        <h2>Login or Register</h2>
      </div>
      <h3>Welcome to Airbae</h3>
      <form>
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        {/* <span>
          By clicking you are agreeing to our <b>Privacy Policy</b>
        </span> */}
        <button>LogIn</button>
      </form>
      <div className="registerLink">
        Don't have an account? <b>Register Now</b>
      </div>
    </div>
    </div>
  );
};

export default Login;
