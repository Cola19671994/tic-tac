import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/store";

const render = () => {
  const rootElement = document.getElementById("root");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

store.subscribe(render);
render();
