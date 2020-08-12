import { combineReducers, createStore } from "redux";
import signUpReducer from "./signUp/signUpReducer";
//
const rootReducer = combineReducers({
  signup: signUpReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
