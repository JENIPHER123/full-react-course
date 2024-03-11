import { Component, React } from "react";

export class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  updateclick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1 onClick={this.updateclick}>Clicked {count} times</h1>
      </div>
    );
  }
}
