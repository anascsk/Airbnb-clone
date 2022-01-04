import { BrowserRouter, Route, Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { FaSearchLocation, FaBars, FaUserAlt, FaGlobe } from "react-icons/fa";

const Navbar = (userEmail) => {
  const userData = () => {
    const email = userEmail.email;
  };

  const history = useHistory();
  return (
    <div className="container">
      <div className="left">
        <Link to="/">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/airbae.png"} />
          </div>
        </Link>
      </div>

      <div className="center">
        <div className="topButton" onClick={() => history.push("/search")}>
          <span>Where do you wanna go? </span>
          <div className="searchIcon">
            <FaSearchLocation size={16} />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="menuItems">Become a host</div>
        <div className="menuItems">
          <FaGlobe size={21} />
        </div>
        
        <Link to="/login">
          <div className="menuButton">
            <FaBars size={21} />, <FaUserAlt size={21} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
