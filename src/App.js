import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
        </Switch>
      <Footer />
    </>
  );
}

export default App;
