import React, { createContext, useContext, useReducer } from "react";
import useThunkReducer from "../utils/useThunkReducer";

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useThunkReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
