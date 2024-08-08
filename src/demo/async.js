const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default; // Ensure correct import
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

// Actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Action Creators
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, users: [], error: action.payload };
    default:
      return state;
  }
};

// Thunk Action Creator
const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUsersSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err.message));
      });
  };
};

// Create Store with Middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

// Subscribe and Dispatch
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());
