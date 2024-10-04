import classes from "./notificationfeed.module.css";
import Endblock from "../EndBlock/Endblock";
import { useContext, useEffect, useState } from "react";
import Notificationlist from "../NotificationList/Notificationlist";
import Advert from "../Advert/Advert";
import NotificationContext from "../../store/notification-context";
import axios from "axios";
let content;

function NotificationFeed() {
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
  const notiCtx = useContext(NotificationContext);

  if (!bid || bid.length === 0) {
    content = <span className={classes.displayText}>No New Bids</span>;
  } else {
    content = <Notificationlist Bid={bid} />;
  }

  return (
    <div className={classes.notificationWrapper}>
      <Advert />
      <div className={classes.content}>{content}</div>

      <Endblock />
    </div>
  );
}

export default NotificationFeed;
