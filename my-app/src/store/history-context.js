import { createContext } from "react";

const HistoryContext = createContext({
  itemsbought: [],
  totalItemsBought: 0,
});

export function HistoryContextProvider(props) {
  const userHistory = [];

  const context = {
    itemsbought: userHistory,
    totalItemsBought: userHistory.length,
  };

  return (
    <HistoryContext.Provider value={context}>
      {props.children}
    </HistoryContext.Provider>
  );
}

export default HistoryContext;
