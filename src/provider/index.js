import React, { useContext, createContext, useReducer } from "react";
import { initialState, reducer } from "../reducer";
const ContextProvider = createContext();

export const useProvider = () => {
  return useContext(ContextProvider);
};

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </ContextProvider.Provider>
  );
}

export default Provider;
