import { HANDLE_OPEN_SIDEBAR, HANDLE_SEARCH } from "../types/otherTypes";

export const handleOpenSidebar = payload => ({
  type: HANDLE_OPEN_SIDEBAR,
  payload
});

export const handleSearch = payload => ({
  type: HANDLE_SEARCH,
  payload
});
