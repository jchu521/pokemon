import { LOADING, FETCH_COMPLETED, FETCH_FAILED } from "../types/fetchTypes";

const initialState = {
  loading: true,
  error: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOADING:
      return initialState;

    case FETCH_COMPLETED:
      return {
        loading: false,
        error: null
      };

    case FETCH_FAILED:
      return {
        loading: false,
        error: payload.error
      };

    default:
      return state;
  }
};
