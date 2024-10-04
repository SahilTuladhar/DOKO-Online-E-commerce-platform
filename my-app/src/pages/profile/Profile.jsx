import classes from "./profile.module.css";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Sidebar from "../../components/SideBar/Sidebar";
import Profilefeed from "../../components/ProfileFeed/Profilefeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Profile() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.profileContainer}>
        <Sidebar name={usernameCtx.name} />
        <Profilefeed />
      </div>
    </>
  );
}

export default Profile;
