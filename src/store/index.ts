import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { filterReducer } from "./reducers/filterReducer";
import { loadingReducer } from "./reducers/loadingReducer";
import { todosReducer } from "./reducers/todosReducer";

/**
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
*/

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const middleware = [thunk];

const store = createStore(
  combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    loading: loadingReducer,
  }),
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
