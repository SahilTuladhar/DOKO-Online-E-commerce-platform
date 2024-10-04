import classes from "./bid.module.css";
import SideBarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import UsernameSellerContext from "../../store/usernameseller-context";
import Bidfeed from "../../components/BidFeed/Bidfeed";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [userName, setUserName] = useState([]);
  const sellerusernameCtx = useContext(UsernameSellerContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.bidContainer}>
        <SideBarSeller name={sellerusernameCtx.sellername} />
        <Bidfeed />
      </div>
    </>
  );
}

export default Home;
