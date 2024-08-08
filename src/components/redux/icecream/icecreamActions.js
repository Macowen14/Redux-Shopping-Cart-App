import { BUY_ICECREAM } from "./icecreamTypes";

export const buyIcecream = (number) => {
  return {
    type: BUY_ICECREAM,
    payload: number || 1,
    info: "First action to buy icecream",
  };
};
