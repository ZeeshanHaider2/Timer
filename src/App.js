import React, { Component } from "react";
import { ChildClass } from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will
    // result in a state change:
    this.setState({ totalClicks: total + 1 });
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <div>
        <h1>Counter is {this.state.totalClicks}</h1>
        <ChildClass onClick={this.handleClick} />
      </div>
    );
  }
}

export default Parent;
