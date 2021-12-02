import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  VERIFY_TOKEN,
  VERIFY_TOKEN_ERROR,
} from "../actions/types/actionTypes";

const initialState = {
  isAuthenticated: null,
  token: localStorage.getItem("token"),
  isDistributor: null,
  user: null,
  loading: true,
};

/**
 * payload
 * {
 *    "token": "jwt",
 *     "user": {},
 *     "isDistributor": true / false
 * }
 */

export function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", payload.user);
      return {
        ...state,
        isAuthenticated: true,
        isDistributor: payload.isDistributor,
        loading: false,
      };

    case VERIFY_TOKEN:
      const _user = JSON.parse(localStorage.getItem("user"));
      return {
        ...state,
        isDistributor: _user.isDistributor,
        user: _user,
      };

    case VERIFY_TOKEN_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        isDistributor: null,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
}
