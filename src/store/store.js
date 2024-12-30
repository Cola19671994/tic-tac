import { createStore } from "redux";
import reducer from "./reducer";

// Создание хранилища Redux
const store = createStore(reducer);

export default store;
