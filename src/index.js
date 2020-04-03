import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./containers/FormContainer";
import './index.css'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div className="col-lg-6">
        <h6> Chat JS Config Website </h6>
        <FormContainer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
