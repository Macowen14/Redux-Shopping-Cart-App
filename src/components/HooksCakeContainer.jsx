import React from "react";
import { useSelector, useDispatch } from "react-redux";
import buyCake from "./redux/cake/CakeActions";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCakes; // Access the state from the Redux store using useSelector hook. This is a functional component hook.
  });
  // usedispatch returns areference
  const dispatch = useDispatch();

  // You can also use the useSelector hook in class-based components using the `connect` function provided by `react-redux`.
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
