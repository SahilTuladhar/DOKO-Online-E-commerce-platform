import classes from "./changepassword.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Changepwfeed from "../../components/ChangePwFeed/Changepwfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Changepassword() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.settingsContainer}>
        <Sidebar name={usernameCtx.name} />
        <Changepwfeed />
      </div>
    </>
  );
}

export default Changepassword;
