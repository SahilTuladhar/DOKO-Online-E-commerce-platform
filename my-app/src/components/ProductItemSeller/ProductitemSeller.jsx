import classes from "./productitemseller.module.css";
import UpgradeOutlinedIcon from "@mui/icons-material/UpgradeOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Productitem(props) {
  const PF = "http://localhost:5000/images/";

  const handleClick = async (e) => {
    const id = props.Id;
    e.preventDefault();
    try {
      const response = await axios.delete(
        `http://localhost:5000/seller/product/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      window.location.href = "/seller/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.itemCover}>
      <Link to={`/product/${props.Id}`}>
        <li>
          <div className={classes.itemImage}>
            <img src={PF + props.image} alt="no image" />
          </div>

          <div className={classes.itemInfo}>
            <div className={classes.infoUp}>
              <h2>{props.productName}</h2>
            </div>

            <div className={classes.infoDown}>
              <span>{props.price}</span>

              <button className={classes.deleteBtn} onClick={handleClick}>
                <DeleteOutlineOutlinedIcon className={classes.icon} />
              </button>

              <button className={classes.updateBtn}>
                <Link to={`/product/update/${props.Id}`}>
                  <UpgradeOutlinedIcon className={classes.icon} />
                </Link>
              </button>
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default Productitem;
