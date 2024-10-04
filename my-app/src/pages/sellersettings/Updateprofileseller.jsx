import classes from "./updateprofileseller.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Updatefeedseller from "../../components/UpdateFeedSeller/Updatefeedseller";
import { useContext } from "react";
import UsernameSellerContext from "../../store/usernameseller-context";

function Updateprofileseller() {
  const sellerusernameCtx = useContext(UsernameSellerContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.updateContainer}>
        <SidebarSeller name={sellerusernameCtx.sellername} />
        <Updatefeedseller />
      </div>
    </>
  );
}

export default Updateprofileseller;
