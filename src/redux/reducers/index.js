import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { razorpayReducer } from "./razorpayReducer";

export default combineReducers({
  authReducer,
  razorpayReducer,
});
