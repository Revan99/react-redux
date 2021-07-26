import { BUY_ICECREAM } from "./iceCreamConstants";

const intialState = {
  numIceCream: 20,
};
const iceCreamReducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numIceCream: state.numIceCream - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
