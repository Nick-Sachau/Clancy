import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import {links} from './util/consts'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {links
          .filter((link) => link.text != "Home")
          .map((link) => {
            const { id, url, page } = link;
            return (
              <Route key={id} path={url}>
                {page}
              </Route>
            );
          })}
      </Switch>
      <Footer />
    </>
  );
}

export default App;
