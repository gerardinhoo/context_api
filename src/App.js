import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    firstName: "Gerard"
  };

  render() {
    return (
      <div>
        <Navbar />
        <Main name={this.state.firstName} />
      </div>
    );
  }
}

const Navbar = () => {
  return (
    <nav className="navbar bg-success">
      <span className="title">GERARD'S PROFILE</span>
    </nav>
  );
};

const Main = ({ name }) => {
  return (
    <div>
      <div className="card text-center">
        <span>
          <h2>Full Name:{name}</h2>
        </span>
      </div>
    </div>
  );
};

export default App;
