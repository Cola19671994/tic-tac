import React from "react";
import Square from "./Square"; // Импорт компонента Square
import store from "../store/store"; // Импорт хранилища

function Board() {
  const state = store.getState(); // Получаем текущее состояние из хранилища

  const handleSquareClick = (index) => {
    store.dispatch({ type: "MAKE_MOVE", payload: { index } }); // Диспатчим действие
  };

  return (
    <div className="board">
      {state.board.map((value, index) => (
        <Square
          key={index}
          value={value} // Значение текущего квадрата
          onClick={() => handleSquareClick(index)} // Функция для клика
        />
      ))}
    </div>
  );
}

export default Board;
