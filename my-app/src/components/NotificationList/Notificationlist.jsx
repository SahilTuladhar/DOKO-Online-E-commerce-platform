import classes from "./notificationlist.module.css";
import Notificationitem from "../NotificationItem/Noitficationitem";

function Notificationlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>Bid Status</h1>
      <ul className={classes.list}>
        {props.Bid.map((n) => (
          <Notificationitem
            key={n.id}
            id={n.id}
            bidAccept={n.bidAccept}
            image={n.product.image}
            productName={n.product.name}
            price={n.product.price}
            bidAmount={n.bidAmount}
          />
        ))}
      </ul>
    </div>
  );
}

export default Notificationlist;
