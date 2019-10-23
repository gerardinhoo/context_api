**How we pass data(state) between components as props:**

An example on on how to pass data between two components

```import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    firstName: "Gerard"
  };

  render() {
    return (
      <div>
        <Main name={this.state.firstName} />
      </div>
    );
  }
}

const Main = (props) => {
  return (
    <div>
      <div className="card text-center">
        <span>
          <h2>Full Name:{props.name}</h2>
        </span>
      </div>
    </div>
  );
};

export default App;
```
