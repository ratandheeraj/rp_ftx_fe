import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { distReducer } from "./distributorReducer";
import { productReducer } from "./productReducer";
import { razorpayReducer } from "./razorpayReducer";

export default combineReducers({
  authReducer,
  distReducer,
  productReducer,
  cartReducer,
  razorpayReducer,
});
