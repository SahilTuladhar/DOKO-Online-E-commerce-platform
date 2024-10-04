import { useContext } from "react";
import classes from "./wishlistfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import Productlist from "../ProductList/Productlist";
import CartContext from "../../store/cart-context";

function Wishlistfeed() {
  const cartCtx = useContext(CartContext);
  let content;

  if (cartCtx.totalItemsWished === 0) {
    content = <span className={classes.displayText}>No Items Wished yet.</span>;
  } else {
    content = <Productlist title="Wish List" data={cartCtx.itemsWished} />;
  }

  return (
    <div className={classes.wishlistWrapper}>
      <Advert />
      <div className={classes.content}>{content}</div>

      <Endblock />
    </div>
  );
}

export default Wishlistfeed;
