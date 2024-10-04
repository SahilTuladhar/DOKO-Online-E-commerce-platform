import classes from "./productlistseller.module.css";
import ProductitemSeller from "../ProductItemSeller/ProductitemSeller";

function Productlist(props) {
  return (
    <div className={classes.listCover}>
      <h1>Your Product</h1>
      <ul className={classes.list}>
        {props.product.map((p) => (
          <ProductitemSeller
            image={p.image}
            Id={p._id}
            productName={p.name}
            price={p.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default Productlist;
