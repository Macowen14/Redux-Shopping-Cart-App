import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
  numberOfIcecreams: 20,
};

const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIcecreams: state.numberOfIcecreams - action.payload,
      };
    default:
      return state;
  }
};

export default icecreamReducer;
