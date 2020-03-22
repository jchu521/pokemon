import { HANDLE_OPEN_SIDEBAR, HANDLE_SEARCH } from "../types/otherTypes";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case HANDLE_OPEN_SIDEBAR:
      return { ...state, openSideBar: payload };

    case HANDLE_SEARCH:
      return { ...state, search: payload };

    default:
      return state;
  }
};
