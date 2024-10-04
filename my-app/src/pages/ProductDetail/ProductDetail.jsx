import React, { useState, useEffect } from "react";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import classes from "./productdetail.module.css";
import Productdetailfeed from "../../components/ProductDetailFeed/Productdetailfeed";
import MainNavBar from "../../components/MainNavbar/MainNavbar";
import UsernameSellerContext from "../../store/usernameseller-context";
import { useContext } from "react";

function ProductDetail() {
  const sellerusernameCtx = useContext(UsernameSellerContext);

  return (
    <>
      <MainNavBar />
      <div className={classes.productContainer}>
        <SidebarSeller name={sellerusernameCtx.sellername} />
        <Productdetailfeed />
      </div>
    </>
  );
}

export default ProductDetail;
