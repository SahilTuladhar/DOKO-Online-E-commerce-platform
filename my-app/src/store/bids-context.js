import { createContext } from "react";
import { useState } from "react";

const BidContext = createContext({
  bids: [],
  totalBids: 0,
  addBid: (bidAdded) => {},
});

export function BidContextProvider(props) {
  const [userBid, setUserBid] = useState([]);

  function addBidHandler(bidAdded) {
    setUserBid((prevUserBid) => {
      return prevUserBid.concat(bidAdded);
    });
  }

  const context = {
    bids: userBid,
    totalBids: userBid.length,
    addBid: addBidHandler,
  };

  return (
    <BidContext.Provider value={context}>{props.children}</BidContext.Provider>
  );
}

export default BidContext;
