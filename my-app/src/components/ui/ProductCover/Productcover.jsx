import classes from "./productcover.module.css";

function Productcover(props) {
  return <div className={classes.itemCover}>{props.children}</div>;
}

export default Productcover;
