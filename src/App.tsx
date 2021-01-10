import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import { TodoFilterStore } from "./components/TodoFilter";
import { TodoListStore } from "./components/TodoList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <br />
      <TodoFilterStore />
      <TodoListStore />
      <AddTodoForm />
    </Provider>
  );
};

export default App;
