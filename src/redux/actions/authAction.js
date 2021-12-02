import { LOGIN_FAIL, LOGIN_SUCCESS } from "./types/actionTypes";
import axios from "axios";
import { apiEndpoint } from "../../utils/apiEndpoint";

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const body = JSON.stringify({ email, password });
      const res = await axios({
        url: `${apiEndpoint}/api/auth`,
        method: "POST",
        data: body,
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: LOGIN_FAIL });
    }
  };

export const verifyToken = (token) => async (dispatch) => {
  try {
    const res = await axios({
      method: "GET",
      url: `${apiEndpoint}/api/verify?token=${token}`,
    });
    dispatch({ type: VERIFY_TOKEN, payload: res.data });
  } catch (err) {
    dispatch({ type: VERIFY_TOKEN_ERROR });
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
