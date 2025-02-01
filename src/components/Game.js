import React from "react";
import { connect } from "react-redux";
import { resetGame } from "../store/actions";
import Board from "./Board";

class Game extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center gap-4 p-4">
        <h1 className="text-2xl font-bold">Tic-Tac-Toe</h1>
        <Board />
        <p className="text-lg">
          {this.props.status === "win"
            ? `Winner: ${this.props.winner}`
            : this.props.status === "draw"
            ? "It's a draw!"
            : `Next Player: ${this.props.currentPlayer}`}
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={this.props.resetGame}
        >
          Restart Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  winner: state.winner,
  status: state.status,
});
export default connect(mapStateToProps, { resetGame })(Game);
