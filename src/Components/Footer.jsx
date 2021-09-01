import React from "react";
import { links } from "../util/consts";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        {links
          .filter((link) => link.text !== "Error")
          .map((link) => {
            const { id, url, text } = link;

            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
      </div>
      <div className="addressContainer">
        <h3>Address</h3>
        <h4>24710 W. Dove Trail, Buckeye, AZ 85326</h4>
        <button>Call!</button>
      </div>
      
    </footer>
  );
};

export default Footer;
