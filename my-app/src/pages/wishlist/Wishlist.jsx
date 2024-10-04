import classes from "./wishlist.module.css";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import SideBar from "../../components/SideBar/Sidebar";
import Wishlistfeed from "../../components/WishlistFeed/Wishlistfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Wishlist() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.wishListContainer}>
        <SideBar name={usernameCtx.name} />
        <Wishlistfeed />
      </div>
    </>
  );
}

export default Wishlist;
