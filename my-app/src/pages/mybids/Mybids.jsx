import classes from "./mybids.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Mybidsfeed from "../../components/MyBidsFeed/Mybidsfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Mybids() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.myBidsContainer}>
        <Sidebar name={usernameCtx.name} />
        <Mybidsfeed />
      </div>
    </>
  );
}

export default Mybids;
