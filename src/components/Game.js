import React from "react";
import { store } from "../store/store";
import Board from "./Board";

function Game() {
  const { board, currentPlayer, winner, status } = store.getState();

  const handleRestart = () => {
    store.dispatch({ type: "RESET_GAME" });
  };

  return (
    <div className="game">
      <Board board={board} />
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
