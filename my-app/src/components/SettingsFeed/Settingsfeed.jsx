import classes from "./settingsfeed.module.css";
import Endblock from "../EndBlock/Endblock";
import { Link } from "react-router-dom";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

function Settingsfeed() {
  return (
    <div className={classes.settingsWrapper}>
      <div className={classes.settingsInfo}>
        <h1>Settings</h1>

        <Link to="/change-pw">
          <div className={classes.optionBox}>
            <span>Change Password</span>
            <PasswordOutlinedIcon className={classes.icon} />
          </div>
        </Link>

        <Link to="/update-profile">
          <div className={classes.optionBox}>
            <span>Update Profile</span>
            <Person2OutlinedIcon className={classes.icon} />
          </div>
        </Link>

        <Link to="/profile-page">
          {" "}
          <div className={classes.optionBox}>
            <span>History</span>
            <LocalShippingOutlinedIcon className={classes.icon} />
          </div>
        </Link>
      </div>
      <Endblock />
    </div>
  );
}

export default Settingsfeed;
