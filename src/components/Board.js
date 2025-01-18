import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Square from "./Square";

function Board() {
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleSquareClick = (index) => {
    dispatch({ type: "MAKE_MOVE", payload: { index } });
  };

  return (
    <div className="board">
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => handleSquareClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;
