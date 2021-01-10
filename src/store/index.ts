import { createStore, combineReducers, compose } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { todosReducer } from "./reducers/todosReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
  }),
  composeEnhancers()
);
