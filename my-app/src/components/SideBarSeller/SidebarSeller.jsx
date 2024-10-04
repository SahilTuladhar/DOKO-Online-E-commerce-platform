import classes from "./sidebarseller.module.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";

function SidebarSeller(props) {
  return (
    <div className={classes.sidebarMain}>
      <div className={classes.profileWrapper}>
        <div className={classes.imgWrapper}>
          <img src="/images/profile-pic1.jpg" alt="profile picture" />
        </div>

        <div className={classes.nameWrapper}>
          <h1>{props.name}</h1>
          <span>{props.id}</span>
        </div>
      </div>

      <div className={classes.optionsWrapper}>
        <Link to="/seller/dashboard">
          <div className={classes.optionCover}>
            <HomeOutlinedIcon className={classes.icon} />
            <span>Home</span>
          </div>
        </Link>

        <hr />

        <Link to="/settings-page-seller">
          <div className={classes.optionCover}>
            <SettingsOutlinedIcon className={classes.icon} />
            <span>Settings</span>
          </div>
        </Link>

        <hr />

        <Link to="/seller/product/new">
          <div className={classes.optionCover}>
            <AddBusinessOutlinedIcon className={classes.icon} />
            <span>Create Product</span>
          </div>
        </Link>

        <hr />
        <div className={classes.optionCover}>
          <Link to="/seller/offers">
            <LocalOfferOutlinedIcon className={classes.icon} />
            <span>Your Offers</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarSeller;
