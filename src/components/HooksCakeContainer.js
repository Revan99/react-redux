import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

const HooksCakeContainer = () => {
  const numCake = useSelector((state) => state.cake.numCake);
  const dispatch = useDispatch();
  console.log(numCake);
  return (
    <div>
      <h2>Num of cakes - {numCake}</h2>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
