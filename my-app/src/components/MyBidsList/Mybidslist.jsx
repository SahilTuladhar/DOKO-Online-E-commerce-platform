import classes from "./mybidslist.module.css";
import Mybidsitem from "../MyBidsItem/Mybidsitem";

function Mybidslist(props) {
  return (
    <div className={classes.listCover}>
      <h1>My Bids</h1>
      <ul className={classes.list}>
        {props.data.map((n) => (
          <Mybidsitem
            id={n._id}
            image={n.product.image}
            name={n.product.name}
            price={n.product.price}
            bid={n.bidAmount}
          />
        ))}
      </ul>
    </div>
  );
}

export default Mybidslist;
