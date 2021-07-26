import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreameContainer = () => {
  const numIceCream = useSelector((state) => state.iceCream.numIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number of ice creams - {numIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy ice creame</button>
    </div>
  );
};

export default IceCreameContainer;
