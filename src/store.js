import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducer as HomeReducer } from "./components/Home";

const rootReducer = combineReducers({
  Home: HomeReducer
});

const middleware = [];
middleware.push(thunk);

export default createStore(rootReducer, applyMiddleware(...middleware));
