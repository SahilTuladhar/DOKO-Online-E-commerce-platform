import classes from "./productfeed.module.css";
import { useContext, useEffect } from "react";
import Endblock from "../EndBlock/Endblock";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ProductContext from "../../store/product-context";
import CartContext from "../../store/cart-context";
import BidContext from "../../store/bids-context";
import NotificationContext from "../../store/notification-context";
import RemoveShoppingCartOutlinedIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";

import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

function Productfeed() {
  const bidAmount = useRef();
  const bidCtx = useContext(BidContext);

  const handleOnEnter = async (e) => {
    e.preventDefault();

    const newBid = {
      bidAmount: bidAmount.current.value,
      product: productSelected.id,
      seller: productSelected.seller,
      price: productSelected.price,
    };

    console.log("bid", newBid);
    try {
      const response = await axios.post(
        "http://localhost:5000/buyerbid/addbid",
        newBid,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      window.location.href = "/bids-page";
    } catch (error) {
      console.log(error);
      alert("Bid amount insufficient")
    }

      console.log("Submit Clicked");
    bidCtx.addBid({
      id: productSelected.id,
      image: productSelected.image,
      productName: productSelected.productName,
      price: productSelected.price,
    });
  };

  const PF = "http://localhost:5000/images/";
  const cartCtx = useContext(CartContext);
  const notiCtx = useContext(NotificationContext);
  const productCtx = useContext(ProductContext);
  const productSelected = productCtx.productClicked;
  const itemIsAdded = cartCtx.itemInCart(productSelected.id);
  const itemisWished = cartCtx.itemInWish(productSelected.id);

  function notificationAccept() {
    notiCtx.addNotification({
      id: productSelected.id,
      image: productSelected.image,
      productName: productSelected.productName,
      price: productSelected.price,
    });

    notiCtx.acceptNotification();
  }

  function notificationReject() {
    notiCtx.addNotification({
      id: productSelected.id,
      image: productSelected.image,
      productName: productSelected.productName,
      price: productSelected.price,
    });
    notiCtx.rejectNotification();
  }

  function toggleWishAddStatusHandler() {
    if (itemisWished) {
      cartCtx.removeWish(productSelected.id);
    } else {
      cartCtx.addWish({
        id: productSelected.id,
        image: productSelected.image,
        productName: productSelected.productName,
        price: productSelected.price,
      });
    }
  }

  function toggleItemAddStatusHandler() {
    if (itemIsAdded) {
      cartCtx.removeItem(productSelected.id);
    } else {
      cartCtx.addItem({
        id: productSelected.id,
        image: productSelected.image,
        productName: productSelected.productName,
        price: productSelected.price,
      });
    }
  }


  return (
    <div className={classes.productFeedWrapper}>
      <div className={classes.productWrapper}>
        <div className={classes.imageContent}>
          <div className={classes.imageWrapper}>
            <img src={PF + productSelected.image} alt="" />
          </div>
        </div>

        <div className={classes.infoContent}>
          <div className={classes.infoUp}>
            <div className={classes.itemInfoUp}>
              <h1>{productSelected.productName}</h1>
            </div>
            <div className={classes.itemInfoDown}>
              <span> Price: ${productSelected.price}</span>
              <button
                className={classes.addBtn}
                onClick={() => {
                  toggleItemAddStatusHandler();
                  notificationAccept();
                }}
              >
                {" "}
                {itemIsAdded ? (
                  <RemoveShoppingCartOutlinedIcon className={classes.icon} />
                ) : (
                  <ShoppingBasketOutlinedIcon className={classes.icon} />
                )}
              </button>
              <button
                className={classes.bargainBtn}
                onClick={() => {
                  toggleWishAddStatusHandler();
                  notificationReject();
                }}
              >
                {itemisWished ? (
                  <DoNotDisturbOnOutlinedIcon className={classes.icon} />
                ) : (
                  <LocalOfferIcon className={classes.icon} />
                )}
              </button>
            </div>
          </div>
          <form onSubmit={handleOnEnter}>
            <div className={classes.infoMid}>
              <span>Bid Amount</span>
              <input
                type="integer"
                placeholder="Enter Bid Amount"
                ref={bidAmount}
              />
              <button
                className={classes.submitBtn}
                type="submit"
                
              >
                Submit
              </button>
            </div>
          </form>
          <div className={classes.infoDown}>
            <h2 className={classes.descriptionHeader}>Description</h2>
            <span className={classes.description}>
              <span>{productSelected.description}</span>
            </span>
          </div>
        </div>
      </div>
      <Endblock />
    </div>
  );
}

export default Productfeed;
