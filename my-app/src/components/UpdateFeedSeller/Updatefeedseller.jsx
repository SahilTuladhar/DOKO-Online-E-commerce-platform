import classes from "./updatefeedseller.module.css";
import Endblock from "../EndBlock/Endblock";
import React, { useRef } from "react";
import axios from "axios";

function Updatefeedseller() {
  const name = useRef();

  const phonenumber = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateProfile = {
      name: name.current.value,
      
      phonenumber: phonenumber.current.value,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/seller/updateprofile`,
        updateProfile,
        {
          withCredentials: true,
        }
      );
      
      window.location.href = "/seller/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.updateWrapper}>
      <form onSubmit={handleSubmit} className={classes.updateForm}>
        <div className={classes.inputBox}>
          <label htmlFor="username">Username</label>
          <input
            ref={name}
            type="text"
            required
            id="username"
            placeholder="Enter Username"
          />
        </div>

 

        <div className={classes.inputBox}>
          <label htmlFor="phone-number">Phone No</label>
          <input
            ref={phonenumber}
            type="integer"
            required
            id="phone-number"
            placeholder="Enter Phone Number"
          />
        </div>

        <button className={classes.submitBtn} type="submit">
          Update Profile
        </button>
      </form>

      <Endblock />
    </div>
  );
}
export default Updatefeedseller;
