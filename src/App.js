import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    firstName: "GERARD"
  };

  render() {
    return (
      <div>
        <Main name={this.state.firstName} />
      </div>
    );
  }
}

const Navbar = ({ name }) => {
  return (
    <nav className="navbar bg-success">
      <span className="title">{name}'S PROFILE</span>
    </nav>
  );
};

const Main = ({ name }) => {
  return (
    <div>
      <Navbar name={name} />
    </div>
  );
};

export default App;
