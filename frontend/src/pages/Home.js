import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Titulo from "../components/Titulo";
import data from "../requests/tickets";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);

    console.log(data);
  }
  render() {
    return (
      <section>
        <div className="Header-background">
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Titulo></Titulo>
            <Button variant="contained" color="primary" disableElevation>
              <Link to="/login">Crear Cuenta</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
