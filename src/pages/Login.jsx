import "./Login.css";
import {FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'


const Login = ({setLoginModal}) => {
  return (
    <div className="mainContainer">
    <div className="loginContainer">
      <div className="loginHeader">
        
        <h2>Login or Register</h2><div id="closeBtn" onClick={ () => setLoginModal(false)} >
        <FaRegTimesCircle size={'30px'} /></div>
      </div>
     
      <h3>Welcome to Airbae</h3>
      <form>
        <input type="email" name="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        
        <button>LogIn</button>
      </form>
      <Link to="/register"><div className="registerLink">
        Don't have an account? <b>Register Now</b>
      </div>
      </Link>
    </div>
    </div>
  );
};

export default Login;
