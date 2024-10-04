import classes from "./endblock.module.css";

function Endblock() {
  return (
    <div className={classes.endBlockCover}>
      <div className={classes.endBlockImage}>
        <img src="/images/dokoendblock.png" alt="" />
      </div>


      <div className={classes.endBlockInfo}>
        <div className={classes.infoBlock1}>
          <h3>Categories</h3>
          <h4>Sports</h4>
          <h4>Electronics</h4>
          <h4>Food</h4>
          <h4>Clothing</h4>
          <h4>Furniture</h4>
        </div>
        <div className={classes.infoBlock2}>
          <h3>Company</h3>
          <h4>Contact Us</h4>
          <h4>About Us</h4>
        </div>
        <div className={classes.infoBlock3}>
          <h3>Support</h3>
          <h4>FAQs</h4>
          <h4>Cookie Policies</h4>
          <h4>Terms and Conditions</h4>
        </div>
      </div>
    </div>
  );
}

export default Endblock;
