import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import { Route, Switch } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="contact container">
        <h3>Contact Me</h3>
        <h5>Clancy Briggs</h5>
        <h5>+16234745069</h5>
        <button>Call</button>
      </div>
      <div className="footer container">
      </div>
    </footer>
  );
};

export default Footer;
