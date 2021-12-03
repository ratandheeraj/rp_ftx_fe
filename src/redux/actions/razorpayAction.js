import axios from "axios";
import { FETCH_ORDER, FETCH_ORDER_ERROR } from "./types/actionTypes";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const createRazorpayOrder =
  ({ amount, retailer_id, distributor_id }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({ amount, retailer_id, distributor_id });
      const res = await axios({
        url: `${apiEndpoint}/api/razorpay`,
        method: "POST",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({ type: FETCH_ORDER, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: FETCH_ORDER_ERROR });
    }
  };
