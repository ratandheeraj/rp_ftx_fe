import axios from "axios";
import {
  FETCH_ALL_PRODUCT,
  FETCH_ALL_PRODUCT_ERROR,
  FETCH_PRODUCT_DETAILS_BY_ID,
  FETCH_PRODUCT_DETAILS_BY_ID_ERROR,
  FETCH_PRODUCTS_BY_DISTRIBUTOR_ID,
  FETCH_PRODUCTS_BY_DISTRIBUTOR_ID_ERROR,
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

export const fetchProductDetailsById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiEndpoint}/api/products/${id}`);
    dispatch({ type: FETCH_PRODUCT_DETAILS_BY_ID, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_PRODUCT_DETAILS_BY_ID_ERROR });
  }
};

export const fetchProductsByDistributorId = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${apiEndpoint}/api/productsByDistributor/${id}`
    );
    dispatch({ type: FETCH_PRODUCTS_BY_DISTRIBUTOR_ID, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_PRODUCTS_BY_DISTRIBUTOR_ID_ERROR });
  }
};
