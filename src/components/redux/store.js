import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import cart from "./reducers/cart";

import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

const composeEnhancers =
  typeof window !== "undefined" &&
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const store = createStore(
  combineReducers({
    cart,
  }),
  composeEnhancers(applyMiddleware(thunk, createStateSyncMiddleware()))
);
initMessageListener(store);

export default store;
