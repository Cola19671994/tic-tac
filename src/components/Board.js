import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  render() {
    return (
      <div className="grid grid-cols-3 gap-2 mx-auto mt-5 w-[310px]">
        {this.props.board.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => this.props.onClick(index)}
          />
        ))}
      </div>
    );
  }
}

export default Board;
