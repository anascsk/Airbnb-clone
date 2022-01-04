import "./Login.css";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";


const Login = ({ setUserEmail }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(auth.currentUser.email);
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {
    await signOut(auth);
  };
  console.log(user);
  return (
    <div>
      {user && (
        <div className="authMenu">
          <h5>{user?.email}</h5>

          <div className="authMenu__btn" onClick={logout}>
            Logout
          </div>
        </div>
      )}
      <div className="loginContainer">
        <div className="loginHeader">
          <h2>Welcome to Airbae</h2>
        </div>

        <h3>Login Now</h3>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="on"
            onChange={(event) => setLoginEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            autoComplete="on"
            onChange={(event) => setLoginPassword(event.target.value)}
          />

          <button onClick={loginHandler}>LogIn</button>
        </form>
        <Link to="/register">
          <div className="registerLink">
            Don't have an account? <b>Register Now</b>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
