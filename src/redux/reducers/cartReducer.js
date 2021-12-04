import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types/actionTypes";
import _ from "lodash";

const initialState = {
  cart: [],
};

export function cartReducer(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case ADD_TO_CART:
      return {
        cart: [...state.cart, payload],
      };

    case REMOVE_FROM_CART:
      return { ...state, cart: payload };

    default:
      return state;
  }
}
