import classes from "./changepasswordseller.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";
import UsernameSellerContext from "../../store/usernameseller-context";
import Changepwfeedseller from "../../components/ChangePwFeedSeller/Changepwfeedseller";

function Changepasswordseller() {
  const sellerusernameCtx = useContext(UsernameSellerContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <SidebarSeller name={sellerusernameCtx.sellername} />
        <Changepwfeedseller />
      </div>
    </>
  );
}

export default Changepasswordseller;
