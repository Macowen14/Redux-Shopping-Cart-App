const redux = require("redux");
const { createStore, applyMiddleware, combineReducers, bindActionCreators } =
  redux;
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

// Action Types
const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

// Action Creators
function orderCake() {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
}

function restockCake(qty) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty || 1,
  };
}

function restockIcecream(qty) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty || 5,
  };
}

// Initial States
const cakeInitialState = {
  numberOfCakes: 10,
  cakePrice: 10,
  totalOrder: 0,
  orderCakes: 0,
};

const icecreamInitialState = {
  numberOfIcecream: 20,
};

// Reducers
function cakeOrderReducer(state = cakeInitialState, action) {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
        orderCakes: state.orderCakes + action.payload,
        totalOrder: state.totalOrder + action.payload * state.cakePrice,
      };

    case CAKE_RESTOCKED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };

    default:
      return state;
  }
}

function icecreamReducer(state = icecreamInitialState, action) {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numberOfIcecream: state.numberOfIcecream + action.payload,
      };
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  cake: cakeOrderReducer,
  icecream: icecreamReducer,
});

// Create Redux Store
const store = createStore(rootReducer, applyMiddleware(logger));

// Initial State
console.log("Initial state", store.getState());

// Subscribe to state changes
const unsubscribe = store.subscribe(() => {});

// Dispatch actions
const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderCake();
actions.orderCake();
actions.orderIcecream(7);
actions.restockIcecream();

// Unsubscribe from state changes
unsubscribe();
