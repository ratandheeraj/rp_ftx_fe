import axios from "axios";
import {
  FETCH_ALL_DISTRIBUTORS,
  FETCH_ALL_DISTRIBUTORS_ERROR,
} from "./types/actionTypes";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const fetchAllDistributors = () => async (dispatch) => {
  try {
    const res = await axios.get(`${apiEndpoint}/api/distributors`);
    dispatch({ type: FETCH_ALL_DISTRIBUTORS, payload: res.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: FETCH_ALL_DISTRIBUTORS_ERROR });
  }
};
