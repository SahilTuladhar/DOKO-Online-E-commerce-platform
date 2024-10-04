import classes from "./product.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Productfeed from "../../components/ProductFeed/Productfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Product() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.productContainer}>
        <Sidebar name={usernameCtx.name} />
        <Productfeed />
      </div>
    </>
  );
}

export default Product;
