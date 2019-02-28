import React, { Component } from "react";

export class ChildClass extends Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>Click Me!</button>
    );
  }
}
