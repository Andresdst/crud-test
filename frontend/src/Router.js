import React from "react";

import { BrowserRouter as ReactRouter, Route } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Place from "./pages/Place";
// import NewPlace from "./pages/places/NewPlace";
// import App from "./App";
// import { connect } from "react-redux";
// import { ConnectedRouter } from "react-router-redux";

export default class Router extends React.Component {
  render() {
    return (
      <ReactRouter>
        <App>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
        </App>
      </ReactRouter>
    );
  }
}
