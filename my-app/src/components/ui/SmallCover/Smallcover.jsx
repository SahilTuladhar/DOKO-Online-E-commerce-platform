import classes from "./smallcover.module.css";

function Smallcover(props) {
  return <div className={classes.cover}>{props.children}</div>;
}

export default Smallcover;
