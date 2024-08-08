import React from "react";
import { connect } from "react-redux";
import buyCake from "./redux/cake/CakeActions";

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Cake Container {props.numberOfCakes}</h1>
      <p>Here is your cake.</p>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
