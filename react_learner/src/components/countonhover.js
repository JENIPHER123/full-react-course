import React, { Component } from "react";
import UpdateComp from "./nestingcomponents";
export class CountHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  IncrementCount = () => {
    return this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseEnter={this.IncrementCount}>
          {this.props.name} 1 Hover over {count} times
        </button>
      </div>
    );
  }
}
export default UpdateComp(CountHover);
