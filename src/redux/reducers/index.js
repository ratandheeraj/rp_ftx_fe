import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { cartReducer } from "./cartReducer";
import { distReducer } from "./distributorReducer";
import { productReducer } from "./productReducer";

export default combineReducers({
  authReducer,
  distReducer,
  productReducer,
  cartReducer,
});
