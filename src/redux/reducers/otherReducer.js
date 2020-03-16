import { HANDLE_OPEN_SIDEBAR } from "../types/otherTypes";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case HANDLE_OPEN_SIDEBAR:
      return {
        ...state,
        openSideBar: payload
      };
    default:
      return state;
  }
};
