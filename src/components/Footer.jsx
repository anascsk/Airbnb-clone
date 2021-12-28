import React from "react";
import "../components/Footer.css";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="uls">
          <div>
            <h3>Support</h3>
            <ul>
              <li>Help Centre</li>
              <li>Safety information</li>
              <li>Cancellation options</li>
              <li>Our COVID-19 Response</li>
              <li>Supporting people with disabilities</li>
              <li>Report a neighbourhood concern </li>
            </ul>
          </div>
          <div>
            <h3>Community</h3>
            <ul>
              <li>Airbnb.org: disaster relief housing</li>
              <li>Support Afghan refugees</li>
              <li>Celebrating diversity & belonging</li>
              <li>Combating discrimination</li>
              <li>Letter from our founders</li>
              <li>Learn about new features</li>
            </ul>
          </div>
          <div>
            <h3>Hosting</h3>
            <ul>
              <li>Try hosting</li>
              <li>AirCover: protection for Hosts</li>
              <li>Explore hosting resources</li>
              <li>Visit our community forum</li>
              <li>How to host responsibly</li>
              <li>Careers </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="lowerFooter"></div>
        <div className="leftFooter">
          <ul>
            <li>© 2021 Airbnb, Inc.</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Company details</li>
          </ul>
        </div>
        <div className="rightFooter">
            
          
          <h6> <FaGlobe /> &emsp; English(IN)</h6>
          <h6>₹ INR</h6>
          <h6><FaFacebookSquare />&ensp;
          <FaTwitterSquare />&ensp;
          <FaLinkedin />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
