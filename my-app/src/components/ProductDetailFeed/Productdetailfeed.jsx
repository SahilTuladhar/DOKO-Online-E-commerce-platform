import classes from "./productdetailfeed.module.css";
import Endblock from "../../components/EndBlock/Endblock";
import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Productdetailfeed() {
  const PF = "http://localhost:5000/images/";
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(
        `http://localhost:5000/seller/product/${id}`,
        {
          withCredentials: true,
        }
      );
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className={classes.productFeedWrapper}>
        <div className={classes.productWrapper}>
          <div className={classes.imageContent}>
            <div className={classes.imageWrapper}>
              <img src={PF + product.image} alt="" />
            </div>
          </div>

          <div className={classes.infoContent}>
            <div className={classes.infoUp}>
              <div className={classes.itemInfoUp}>
                <h1>{product.name}</h1>
                <span> Lowest Price: ${product.bid}</span>
              </div>
              <div className={classes.itemInfoDown}>
                <span> Price: ${product.price}</span>
              </div>
              <br />
            </div>

            <div className={classes.infoDown}>
              <h1> Product Description</h1>
              <hr />
              <span className={classes.description}>{product.description}</span>
            </div>
          </div>
        </div>
        <Endblock />
      </div>
    </>
  );
}

export default Productdetailfeed;
