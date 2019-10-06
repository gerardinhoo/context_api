import React, { Component } from "react";

class Person extends Component {
  render() {
    return (
      <div>
        <h2>I'm {this.props.name}</h2>
      </div>
    );
  }
}

export default Person;
