const initialState = {
  board: Array(9).fill(null), // Игровое поле
  currentPlayer: "X", // Текущий игрок
  winner: null, // Победитель
  status: "turn", // Статус игры: turn, win, draw
};

const checkWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      const { index } = action.payload;
      if (state.board[index] || state.status !== "turn") return state;

      const newBoard = [...state.board];
      newBoard[index] = state.currentPlayer;

      const winner = checkWinner(newBoard);
      const isDraw = newBoard.every((cell) => cell !== null);

      return {
        ...state,
        board: newBoard,
        currentPlayer: winner ? null : state.currentPlayer === "X" ? "O" : "X",
        winner,
        status: winner ? "win" : isDraw ? "draw" : "turn",
      };

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
