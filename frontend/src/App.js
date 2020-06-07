import React, { Component } from "react";
import "./App.css";
import MyAppBar from "./components/navigation/MyAppBar";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <MyAppBar></MyAppBar>
        {this.props.children}
      </section>
    );
  }
}

export default App;
