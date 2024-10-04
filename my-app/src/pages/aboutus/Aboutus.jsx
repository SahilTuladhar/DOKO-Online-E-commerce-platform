import classes from "./aboutus.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Aboutusfeed from "../../components/AboutUsFeed/Aboutusfeed";

function Aboutus() {
  const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.aboutUsContainer}>
        <SideBar name={usernameCtx.name} />
        <Aboutusfeed />
      </div>
    </>
  );
}

export default Aboutus;
