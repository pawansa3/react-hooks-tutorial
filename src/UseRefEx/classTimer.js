import React from "react";

class ClassTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>UseRef Example 2 - Class Timer </h3>
        <p> Class Timer - {this.state.timer}</p>
        <button onClick={() => clearInterval(this.interval)}>
          Clear Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
