import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Navbar from './Components/Navbar'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
      </Navbar>
    </>
  );
}

export default App;
