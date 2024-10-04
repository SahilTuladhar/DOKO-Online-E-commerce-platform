import classes from "./changepwfeed.module.css";
import Endblock from "../EndBlock/Endblock";
import { useRef } from "react";
import axios from "axios";
function Changepwfeed() {
  const oldPassword = useRef();
  const newPassword = useRef();
  const cnewPassword = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword.current.value) {
      if (cnewPassword.current.value !== newPassword.current.value) {
        cnewPassword.current.setCustomValidity("Passwords don't match");
      } else {
        const users = {
          newPassword: newPassword.current.value,
          newpassword: cnewPassword.current.value,
        };
        try {
          await axios.put(`http://localhost:5000/user/updatepassword`, users, {
            withCredentials: true,
          });
          window.location.href = "/home-page";
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div className={classes.changeWrapper}>
      <div className={classes.formInfo}>
        <form onSubmit={handleSubmit} className={classes.pwForm}>
          <div className={classes.inputBox}>
            <label htmlFor="old-password">Old Password</label>
            <input
              ref={oldPassword}
              type="text"
              required
              id="old-password"
              placeholder="Enter Old Password"
            />
          </div>

          <div className={classes.inputBox}>
            <label htmlFor="new-password">New Password</label>
            <input
              ref={newPassword}
              type="text"
              required
              id="new-password"
              placeholder="Enter New Password"
            />
          </div>

          <div className={classes.inputBox}>
            <label htmlFor="retype-new-password">Re-enter Password</label>
            <input
              ref={cnewPassword}
              type="text"
              required
              id="retype-new-password"
              placeholder="Re-enter New Password"
            />
          </div>
          <button className={classes.submitBtn} type="submit">
            Change
          </button>
        </form>
      </div>

      <Endblock />
    </div>
  );
}

export default Changepwfeed;
