import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        {/* <FaRegTimesCircle size={'30px'}/> */}
        <h2>Register</h2>
      </div>
      <h3>Welcome to Airbae</h3>
      <form>
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" name="name" placeholder="Your Full Name" />
        <span>
          By clicking you are agreeing to our <b>Privacy Policy</b>
        </span>
        <button>SignUp</button>
      </form>
      <div className="registerLink">
        Already have an account? <b>Login Now</b>
      </div>
    </div>
  );
};
export default Register;
