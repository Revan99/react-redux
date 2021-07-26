import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";
function NewCakeContainer({ buyCake, numCake }) {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h2>number of cakes - {numCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>
        buy {number} {number == 1 ? "cake" : "cakes"}
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numCake: state.cake.numCake,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => {
      dispatch(buyCake(number));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
