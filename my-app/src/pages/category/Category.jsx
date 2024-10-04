import classes from "./category.module.css";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import SideBar from "../../components/SideBar/Sidebar";
import Categoryfeed from "../../components/CategoryFeed/Categoryfeed";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";

function Category(props) {

    const usernameCtx = useContext(UsernameContext);

  return (
    <>
      <MainNavbar />
      <div className={classes.categoryContainer}>
        <SideBar name={usernameCtx.name} />
        <Categoryfeed title={props.title1} CategoryId={props.id} />
      </div>
    </>
  );
}

export default Category;
