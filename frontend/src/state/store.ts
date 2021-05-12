import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import newsReducer from "./reducers/newsReducer";

const reducers = combineReducers({
  news: newsReducer,
});

export const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof reducers>;
