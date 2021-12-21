import React from "react";
import "./Navbar.css";
import {FaSearchLocation, FaBars, FaUserAlt, FaGlobe} from 'react-icons/fa';

const Navbar = () => {
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
          <div className="menuButton">
          <FaBars size={21}/>, <FaUserAlt size={21}/>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
