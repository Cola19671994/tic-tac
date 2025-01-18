import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Board from "./Board";

function Game() {
  const { winner, status, currentPlayer } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      <Board />
      <div className="status">
        {status === "win" && <p>Winner: {winner}</p>}
        {status === "draw" && <p>It's a draw!</p>}
        {status === "turn" && <p>Next Player: {currentPlayer}</p>}
      </div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}

export default Game;
