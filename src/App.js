import React, { Component } from "react";
import Family from "./Family";

class App extends Component {
  state = {
    name: "Gerard"
  };
  render() {
    return (
      <div>
        <p>App Component</p>
        <Family name={this.state.name} />
      </div>
    );
  }
}

export default App;
