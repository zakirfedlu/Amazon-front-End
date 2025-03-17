import { createContext, useReducer } from "react";
export const DataContext = createContext();

const DataProvider = ({ children, initialState, reducer }) => {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
