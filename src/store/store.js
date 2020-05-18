import logger from "redux-logger";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import combinedReducers from "./rootReducer";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

const middlewares = [routerMiddleware(history), thunk];
const initialState = {};

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = createStore(
  combinedReducers(history),
  initialState,
  compose(applyMiddleware(...middlewares))
);

export default store;
