export const MAKE_MOVE = "MAKE_MOVE";
export const RESET_GAME = "RESET_GAME";

export const makeMove = (index) => ({
  type: MAKE_MOVE,
  payload: index,
});

export const resetGame = () => ({
  type: RESET_GAME,
});

// store/reducer.js
const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  winner: null,
  status: "turn", // "turn", "win", "draw"
};

const checkWinner = (board) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_MOVE:
      if (state.board[action.payload] || state.winner) return state;
      const newBoard = [...state.board];
      newBoard[action.payload] = state.currentPlayer;
      const winner = checkWinner(newBoard);
      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        winner,
        status: winner ? "win" : newBoard.includes(null) ? "turn" : "draw",
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
