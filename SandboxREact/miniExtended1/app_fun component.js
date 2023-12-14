//
import "./styles.css";
import React, { useState, useEffect } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [count]);

  // render
  //const { counter } = this.State; // object destruture insteade of calling this.state.counter we can directly call this.counter
  return (
    <div className="App">
      <span>Counter : </span>
      <span>{count > 10 ? 10 : count}</span>
      <br />
      <br />
      <span>Counter1 : </span> <span> {count}</span>
      <br />
      <br />
      <button>PLAY</button>
    </div>
  );
  //
};

export default App;
