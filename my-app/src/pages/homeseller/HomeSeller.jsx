import classes from "./homeseller.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import HomefeedSeller from "../../components/HomeFeedSeller/HomefeedSeller";
import UsernameSellerContext from "../../store/usernameseller-context";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

function HomeSeller() {
  const [seller, setSeller] = useState();
  const sellerusernameCtx = useContext(UsernameSellerContext);

  useEffect(() => {
    const fetchSeller = async () => {
      const response = await axios.get("http://localhost:5000/seller/product", {
        withCredentials: true,
      });
      setSeller(response.data.sellerName);
    };
    fetchSeller();
  }, []);

  sellerusernameCtx.sellername = seller;

  return (
    <>
      <MainNavbar />
      <div className={classes.homeContainer}>
        <SidebarSeller name={sellerusernameCtx.sellername} />
        <HomefeedSeller />
      </div>
    </>
  );
}

export default HomeSeller;
