import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./biditem.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";
import ProductContext from "../../store/product-context";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

function BidItem(props) {
  const productCtx = useContext(ProductContext);
  const PF = "http://localhost:5000/images/";
  const { id } = useParams();

  const handleClickAccept = async (req, res) => {
    try {
      const bidAccepted = true;
      const updateBid = {
        bidAccept: bidAccepted,
      };
      const response = await axios.patch(
        `http://localhost:5000/seller/bid/update/${props.id}`,
        updateBid,
        {
          withCredentials: true,
        }
      );
      window.location.href = "/seller/offers";
      console.log("clicked");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickReject = async (req, res) => {
    try {
      const bidAccepted = false;
      const updateBid = {
        bidAccept: bidAccepted,
      };
      const response = await axios.patch(
        `http://localhost:5000/seller/bid/update/${props.id}`,
        updateBid,
        {
          withCredentials: true,
        }
      );
      window.location.href = "/seller/offers";
      console.log("clicked");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.itemCover}>
      <li>
        <Link to="/product-page">
          <div className={classes.itemImage}>
            <img src={PF + props.image} alt="" />
          </div>
        </Link>

        <div className={classes.itemInfo}>
          <div className={classes.infoUp}>
            <h2>{props.name}</h2>
          </div>
          <div className={classes.infoDown}>
            <span>price:${props.price}</span>
          </div>
          <div className={classes.infoDown}>
            <span>Least amount: ${props.least}</span>
          </div>
          <div className={classes.infoDown}>
            <span>Bid received:${props.bid}</span>
            {props.bidAccept === undefined && (
              <>
                <div className={classes.buttons}>
                  {" "}
                  <button
                    onClick={handleClickAccept}
                    className={classes.addBtn}
                  >
                    <CheckCircleIcon className={classes.icon} />
                  </button>
                  <button
                    onClick={handleClickReject}
                    className={classes.addBtn}
                  >
                    <CancelIcon className={classes.icon} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </li>
    </div>
  );
}

export default BidItem;
