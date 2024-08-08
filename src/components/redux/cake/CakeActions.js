import { BUY_CAKE } from "./CakeTypes";
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First action to buy cake",
  };
};

export default buyCake;
