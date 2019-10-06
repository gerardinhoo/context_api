import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <p>Person component</p>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Person;
