import classes from "./mybidsfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import Mybidslist from "../MyBidsList/Mybidslist";
import Profileproductlist from "../ProfileProductList/Profileproductlist";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import BidContext from "../../store/bids-context";

import axios from "axios";

let content;

function Mybidsfeed() {
  const [bid, setBid] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/buyerbid/userbids", {
        withCredentials: true,
      })
      .then((res) => {
        setBid(res.data.bids);
        console.log(res.data.bids);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(bid);

  const bidCtx = useContext(BidContext);

  if (bid.length === 0) {
    content = <span className={classes.displayText}>No New Bids</span>;
  } else {
    content = <Mybidslist title="My Bids" data={bid} />;
  } // my bid feed

  return (
    <div className={classes.myBidFeedWrapper}>
      <Advert />
      <div className={classes.bidContent}>{content}</div>
      <Endblock />
    </div>
  );
}

export default Mybidsfeed;
