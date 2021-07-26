import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreameReducer";

const middlewares = [logger, thunk];
const reducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
