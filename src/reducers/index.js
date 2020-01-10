/*Page for combining  all the reducers */


import loggedReducer from "./isLogged";
import flipReducer from "./flipReducer";
import registerReducer from "./registerReducer";
import loginReducer from "./loginReducer";

//combineReducer imported from redux
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  flip: flipReducer,
  register: registerReducer,
  login: loginReducer
});

export default allReducers;
