import React from "react";
import { links } from "../util/consts";
import { Link } from "react-router-dom";
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="links">
          {links
            .filter((link) => link.text !== "Error")
            .map((link) => {
              const { id, url, text } = link;
              return (
                <h5 key={id}>
                  <Link to={url}>{text}</Link>
                </h5>
              );
            })}
        </div>
        <div className="socials">
            <h5><FaFacebookF /></h5>
            <h5><FaFacebookMessenger /></h5>
            <h5><FaInstagram /></h5>
            <h5><FaTwitter /></h5>
        </div>
        <div className="contact">
        <h5>Clancy Briggs</h5>
        <h5>+16234745069</h5>
        </div>
        <div className="address">
          <h5>Buckeye, Arizona</h5>
        </div>
      </div>

    </footer>
  );
};
{/* <div className="contactContainer">
        
        <h5>Clancy Briggs</h5>
        <h5>+16234745069</h5>
      </div>
      <div className="addressContainer">
        <h5>Address</h5>
        <h5>24710 W. Dove Trail, Buckeye, AZ 85326</h5>
      </div> */}
export default Footer;
