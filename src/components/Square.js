import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button
        className="w-[100px] h-[100px] text-2xl flex items-center justify-center border border-black"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
