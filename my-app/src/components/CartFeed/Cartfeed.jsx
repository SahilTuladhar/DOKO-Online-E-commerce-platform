import { useContext, useState } from "react";
import classes from "./cartfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import CartContext from "../../store/cart-context";
import HistoryContext from "../../store/history-context";
import Cartproductlist from "../CartProductList/Cartproductlist";

import axios from "axios";
function Cartfeed() {
  const cartCtx = useContext(CartContext);
  const historyCtx = useContext(HistoryContext);
  let total;
  let content;

  const [order, setOrder] = useState([]);

  const placeOrder = async (e) => {
    e.preventDefault();

    const newOrder = {
      productItems: cartCtx.itemsAdded,
    };
    const newOrders = [...order, newOrder];
    setOrder(newOrders);
    console.log("Order", newOrders);
    try {
      const response = await axios.post(
        "http://localhost:5000/order/newOrder",
        newOrder,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      historyCtx.itemsbought = cartCtx.itemsAdded.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        seller: item.seller,
      }));

      console.log("items bought", historyCtx);
      historyCtx.totalItemsBought = historyCtx.totalItemsBought + 1;

      console.log(historyCtx.itemsbought);
      localStorage.setItem("history", JSON.stringify(historyCtx.itemsbought));
      localStorage.removeItem("cart");
      window.location.href = "/profile-page";
    } catch (error) {
      console.log(error);
    }
  };

  function checkoutHandler() {
    // cartCtx.cartCheckout();
    // total = 0; // Not sure if it works need to test with real Database.
    // window.location.reload(false);
  }

  if (cartCtx.totalItemsAdded === 0) {
    content = <span className={classes.displayText}>No Items in Cart</span>;
    total = 0;
  } else {
    {
      console.log(cartCtx.itemsAdded);
    }
    content = <Cartproductlist title="Mero Doko" data={cartCtx.itemsAdded} />;

    total = cartCtx.totalAmount();
  }

  return (
    <div className={classes.cartWrapper}>
      <Advert />
      <div className={classes.content}>{content}</div>
      <div className={classes.checkoutInfo}>
        <span>total Amount = ${total} </span>
        <form onSubmit={placeOrder}>
          <button
            type="submit"
            className={classes.checkoutBtn}
            onClick={checkoutHandler}
          >
            CheckOut
          </button>
        </form>
      </div>

      <Endblock />
    </div>
  );
}

export default Cartfeed;
