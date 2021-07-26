import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";
function CakeContainer({ buyCake, numCake }) {
  return (
    <div>
      <h2>number of cakes - {numCake}</h2>
      <button onClick={buyCake}>buy cake</button>
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
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
