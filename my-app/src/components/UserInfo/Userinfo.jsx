import classes from "./userinfo.module.css";

function Userinfo(props) {
  return (
    <>
      <div className={classes.userInfoCover}>
        <h1>User Information</h1>
        <h3>
          Username: <span className={classes.info}>{props.name}</span>
        </h3>
        <h3>
          Shipping Address:{" "}
          <span className={classes.info}>{props.address}</span>
        </h3>
        <h3>
          Phone Number: <span className={classes.info}>{props.number}</span>
        </h3>
      </div>
      
    </>
  );
}

export default Userinfo;
