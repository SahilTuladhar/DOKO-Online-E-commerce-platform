import classes from "./mybidsitem.module.css";
import { useContext } from "react";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";

function Mybidsitem(props) {
  const PF = "http://localhost:5000/images/";
  return (
    <li>
      <div className={classes.myBidsItemCover}>
        <div className={classes.startContent}>
          <img src={PF + props.image} alt="" />
        </div>
        <div className={classes.midContent}>
          <div className={classes.infoUp}>
            <span>{props.name} </span>
          </div>

          <div className={classes.infoDown}>
            <div className={classes.infoDownPrice}>
              
              <span className={classes.price}> ${props.price}</span>
            </div>
            <div className={classes.infoDownBid}>
              <span>Bid Amount: ${props.bid}</span>
            </div>
          </div>
        </div>
        <div className={classes.endContent}>
          <div className={classes.responseCover}>
            <GavelOutlinedIcon className={classes.icon} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default Mybidsitem;
