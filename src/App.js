import React, { Component } from "react";
import PasswordStrengthMeter from "./component/PasswordStrengthMeter";

import "./App.css";

class App extends Component {
  state = {
    password: ""
  };
  render() {
    return (
      <div className="App">
        <div className="meter">
          <input
            autoComplete="off"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <PasswordStrengthMeter password={this.state.password} />
        </div>
      </div>
    );
  }
}

export default App;
