import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  VERIFY_TOKEN,
  VERIFY_TOKEN_ERROR,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
} from "./types/actionTypes";
import axios from "axios";
import { apiEndpoint } from "../../utils/apiEndpoint";
import { toast } from "react-toastify";

export const login =
  ({ email, password, type }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({ email, password, type });
      const res = await axios({
        url: `${apiEndpoint}/api/auth`,
        method: "POST",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      toast.success("welcome", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } catch (err) {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
      toast.error("login failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

export const verifyToken = (token) => async (dispatch) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${apiEndpoint}/api/auth/verify?token=${token}`,
    });

    console.log(res.data);
    dispatch({ type: VERIFY_TOKEN, payload: res.data.payload });
  } catch (err) {
    dispatch({ type: VERIFY_TOKEN_ERROR });
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const loadUser =
  ({ type, token }) =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${apiEndpoint}/api/auth?type=${type}&token=${token}`
      );
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };
