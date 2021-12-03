import {
  FETCH_ALL_DISTRIBUTORS,
  FETCH_ALL_DISTRIBUTORS_ERROR,
} from "../actions/types/actionTypes";

const initialState = {
  distributors: [],
};

export function distReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case FETCH_ALL_DISTRIBUTORS:
      return {
        ...state,
        distributors: payload,
      };
    case FETCH_ALL_DISTRIBUTORS_ERROR:
      return {
        ...state,
        distributors: [],
      };
    default:
      return state;
  }
}
