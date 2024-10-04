import classes from "./addtocart.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Cartfeed from "../../components/CartFeed/Cartfeed";


//this is add to carts
function Addtocart() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.addToCartContainer}>
        <SideBar name={usernameCtx.name} />
        <Cartfeed />
      </div>
    </>
  );
}
export default Addtocart;
