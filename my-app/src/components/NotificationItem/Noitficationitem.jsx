import classes from "./notificationitem.module.css";
import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import axios from "axios";
import AvTimerOutlinedIcon from "@mui/icons-material/AvTimerOutlined";

function Notificationitem(props) {
  const notiCtx = useContext(NotificationContext);
  const PF = "http://localhost:5000/images/";

  let icon = null;

  if (props.bidAccept === true) {
    icon = <CheckCircleOutlineOutlinedIcon className={classes.icon} />;
  } else if (props.bidAccept === false) {
    icon = <CancelOutlinedIcon className={classes.icon} />;
  } else if (props.bidAccept === undefined) {
    icon = <AvTimerOutlinedIcon className={classes.icon} />;
  }

  return (
    <li>
      <div className={classes.notificationCover}>
        <div className={classes.startContent}>
          <img src={PF + props.image} alt="" />
        </div>
        <div className={classes.midContent}>
          <div className={classes.infoUp}>
            <span>{props.productName} </span>
          </div>
          <div className={classes.infoDown}>
            <div className={classes.infoDownPrice}>
              <span className={classes.price}> ${props.price}</span>
            </div>
            <div className={classes.infoDownBid}>
              <span>Bid Amount: ${props.bidAmount}</span>
            </div>
          </div>
        </div>
        <div className={classes.endContent}>
          <div className={classes.responseCover}>{icon}</div>
        </div>
      </div>
    </li>
  );
}

export default Notificationitem;
