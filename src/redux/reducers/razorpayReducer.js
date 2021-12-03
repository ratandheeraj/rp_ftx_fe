import { FETCH_ORDER, FETCH_ORDER_ERROR } from "./types/actionTypes";

const initialState = {
  key: null,
  amount: null,
  order_id: null,
  retailer_name: null,
  retailer_email: null,
  distributor_name: null,
};

export function razorpayReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ORDER:
      return {
        ...state,
        key: payload.key,
        amount: payload.amount,
        order_id: payload.order_id,
        retailer_name: payload.retailer_name,
        retailer_email: payload.retailer_email,
        distributor_name: payload.distributor_name,
      };

    case FETCH_ORDER_ERROR:
      return {
        ...state,
        key: null,
        amount: null,
        order_id: null,
        retailer_name: null,
        retailer_email: null,
        distributor_name: null,
      };
    default:
      return state;
  }
}
