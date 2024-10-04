import classes from "./notification.module.css";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Sidebar from "../../components/SideBar/Sidebar";
import NotificationFeed from "../../components/NotificationFeed/Notificationfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";


function Notification() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.notificationContainer}>
        <Sidebar name={usernameCtx.name} />
        <NotificationFeed />
      </div>
    </>
  );
}

export default Notification;
