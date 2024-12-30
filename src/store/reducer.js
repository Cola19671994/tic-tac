const initialState = {
  board: Array(9).fill(null), // Инициализация пустого поля
  currentPlayer: "X",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAKE_MOVE":
      const newBoard = [...state.board];
      if (!newBoard[action.payload.index]) {
        newBoard[action.payload.index] = state.currentPlayer;
        return {
          ...state,
          board: newBoard,
          currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
