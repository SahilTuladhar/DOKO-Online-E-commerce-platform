import classes from "./sellersettings.module.css";
import SidebarSeller from "../../components/SideBarSeller/SidebarSeller";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import UsernameSellerContext from "../../store/usernameseller-context";
import Sellersettingsfeed from "../../components/SellerSettingsFeed/Sellersettingsfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Sellersettings() {
  const sellerusernameCtx = useContext(UsernameSellerContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <SidebarSeller name={sellerusernameCtx.sellername} />
        <Sellersettingsfeed />
      </div>
    </>
  );
}

export default Sellersettings;
