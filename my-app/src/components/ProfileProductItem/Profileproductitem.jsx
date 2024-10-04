import classes from "./profileproductitem.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import NotificationContext from "../../store/notification-context";
import ProductContext from "../../store/product-context";

function Profileproductitem(props) {
  const cartCtx = useContext(CartContext);
  const notiCtx = useContext(NotificationContext);
  const productCtx = useContext(ProductContext);
  const itemIsAdded = cartCtx.itemInCart(props.id);
  const itemisWished = cartCtx.itemInWish(props.id);

  function productPageHandler() {
    
    productCtx.productClicked = {
      id: props.id,
      image: props.image,
      productName: props.productName,
      price: props.price,
    };

    console.log(productCtx.productClicked);
  }

  // function notificationAccept() {
  //   notiCtx.addNotification({
  //     id: props.id,
  //     image: props.image,
  //     productName: props.productName,
  //     price: props.price,
  //   });

  //   notiCtx.acceptNotification();
  // }

  // function notificationReject() {
  //   notiCtx.addNotification({
  //     id: props.id,
  //     image: props.image,
  //     productName: props.productName,
  //     price: props.price,
  //   });
  //   notiCtx.rejectNotification();
  // }
  const PF = 'http://localhost:5000/images/'
  return (
    <div className={classes.itemCover}>
      <li>
        <Link to="/product-page">
          <div className={classes.itemImage} onClick={productPageHandler}>
            <img src={PF + props.image} alt="" />
          </div>
        </Link>

        <div className={classes.itemInfo}>
          <div className={classes.infoUp}>
            <h2>{props.productName}</h2>
          </div>

          <div className={classes.infoDown}>
            <span>${props.price}</span>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Profileproductitem;
