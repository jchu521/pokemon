import { LOADING, FETCH_COMPLETED, FETCH_FAILED } from "../types/fetchTypes";

export const fetchApi = (fetchFunc, dispatchFunc) => dispatch => {
  loading();

  fetchFunc()
    .then(data => {
      dispatchFunc(data);
    })
    .then(() => {
      dispatch(fetchCompleted());
    })
    .catch(err => {
      dispatch(fetchFailed(err));
      console.error("Failed to get data");
    });
};

export const loading = () => {
  return {
    type: LOADING
  };
};

export const fetchCompleted = result => {
  return {
    type: FETCH_COMPLETED
  };
};

export const fetchFailed = error => {
  return {
    type: FETCH_FAILED,
    payload: {
      error
    }
  };
};
