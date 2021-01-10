import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoListStore } from "./components/TodoList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <TodoListStore />
      <TodoFilterStore />
    </Provider>
  );
};

export default App;
