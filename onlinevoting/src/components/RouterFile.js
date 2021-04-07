import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";

function RouterFile(props) {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </BrowserRouter>
  );
}

export default RouterFile;
