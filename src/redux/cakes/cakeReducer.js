import { BUY_CAKE } from "./cakeConstants";

const intialState = {
  numCake: 10,
};
const cakeReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numCake: state.numCake - action.payload };
    default:
      return state;
  }
};
export default cakeReducer;
