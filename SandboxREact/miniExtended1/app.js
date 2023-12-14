import "./styles.css";
import appitems from "./appitem.js";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: "11",
    };
  }
  render() {
    return (
      <div className="App">
        <span>Counter : </span>
        <span>{this.state.counter > 10 ? 10 : this.state.counter}</span>
        <br />
        <br />
        <span>Counter1 : </span> <span> {this.state.counter}</span>
        <br />
        <br />
        <button>PLAY</button>
      </div>
    );
  }
}

export default App;
