import Immutable from "immutable";
import CreateUserDTO from "../../immutable/CreateUserDTO";
import { signUpActionTypes } from "./signUpAction";

const defaultState = Immutable.OrderedMap({
  userData: new CreateUserDTO(),
});

const signUpReducer = (state = defaultState, action) => {
  switch (action.type) {
    case signUpActionTypes.SET_FIRST_NAME:
      console.log("first name action here");
      return state.setIn(["userData", "firstName"], action.firstName);

    case signUpActionTypes.SET_LAST_NAME:
      console.log("surname action here");
      return state.setIn(["userData", "lastName"], action.lastName);

    case signUpActionTypes.SET_EMAIL:
      console.log("email action here");
      console.log(action.email);
      return state.setIn(["userData", "email"], action.email);

    case signUpActionTypes.SET_PASSWORD:
      console.log("password action here");
      return state.setIn(["userData", "password"], action.password);

    case signUpActionTypes.SET_REPEAT_PASSWORD:
      console.log("repeat pass action here");
      return state.setIn(["userData", "repeatPass"], action.repeatPass);

    default:
      return state;
  }
};
export default signUpReducer;
