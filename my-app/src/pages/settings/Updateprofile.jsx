import classes from "./updateprofile.module.css";
import Sidebar from "../../components/SideBar/Sidebar";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Updatefeed from "../../components/UpdateFeed/Updatefeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Updateprofile() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.updateContainer}>
        <Sidebar name={usernameCtx.name} />
        <Updatefeed />
      </div>
    </>
  );
}

export default Updateprofile;
