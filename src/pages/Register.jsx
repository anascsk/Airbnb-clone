import {useState} from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState("");
  
  const registerHandler= async () => {
  try{
    const user= await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    )
    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <h2>Welcome to Airbae</h2>
      </div>
      <h3>Register Now</h3>
      <form>
        <input type="email" name="email" placeholder="Enter Email" onChange={(event) => setRegisterEmail(event.target.value)} />
        <input type="password" placeholder="Enter Password" onChange={(event) => setRegisterPassword(event.target.value)}/>
        <input type="password" placeholder="Confirm Password" />

        <span>
          By clicking you are agreeing to our <b>Privacy Policy</b>
        </span>
        <button onClick={registerHandler}>SignUp</button>
      </form>
      <Link to="/login">
        <div className="registerLink">
          Already have an account? <b>Login Now</b>
        </div>
      </Link>
    </div>
  );
};
export default Register;
