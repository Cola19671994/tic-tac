import React from "react";
import Game from "./components/Game";
import "tailwindcss/tailwind.css";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <Game />
      </div>
    );
  }
}

export default App;
