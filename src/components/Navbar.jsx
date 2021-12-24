import {useState} from "react";
import "./Navbar.css";
import {FaSearchLocation, FaBars, FaUserAlt, FaGlobe} from 'react-icons/fa';
import Login from "../pages/Login";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false)
  return (
    <div className="container">
      <div className="left">
        <div className="logo"><img src={process.env.PUBLIC_URL + '/airbae.png'} /></div>
      </div>
      <div className="center">
        <div className="topButton">
          Where are you going? 
          <div className="search"><FaSearchLocation size={16}/>
          </div>
        </div>

      </div>
      <div className="right">
          <div className="menuItems">
              Become a host
          </div>
          <div className="menuItems">
            <FaGlobe size={21}/>
          </div>
          <div className="menuButton" onClick={() => {setLoginModal(true)}} >
          <FaBars size={21}/>, <FaUserAlt size={21}/>
          {loginModal && <Login toggle={setLoginModal}/>}
          </div>
      </div>
    </div>
  );
};

export default Navbar;
