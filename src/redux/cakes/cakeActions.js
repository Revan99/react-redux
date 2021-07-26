import { BUY_CAKE } from "./cakeConstants";
/*
    All the actions that related to cake shop
*/
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

// export const buyMoreCake = () => () => {};
