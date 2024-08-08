import React from "react";
import { buyIcecream } from "./redux/icecream/icecreamActions";
import { useSelector, useDispatch } from "react-redux";

const Icecream = () => {
  const dispatch = useDispatch();
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );

  return (
    <div>
      <h2>Icecreams - {numberOfIcecreams} </h2>
      <button onClick={() => dispatch(buyIcecream(5))}>Buy icecream</button>
    </div>
  );
};

export default Icecream;
