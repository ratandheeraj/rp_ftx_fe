import axios from "axios";
import {
  FETCH_ALL_PRODUCT,
  FETCH_ALL_PRODUCT_ERROR,
} from "./types/actionTypes";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiEndpoint}/api/products`);
    dispatch({ type: FETCH_ALL_PRODUCT, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_ALL_PRODUCT_ERROR });
  }
};
