import Advert from "../Advert/Advert";
import Categorylist from "../CategoryList/Categorylist";
import Productlist from "../ProductList/Productlist";
import classes from "./homefeed.module.css";
import Endblock from "../EndBlock/Endblock";
import axios from "axios";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import { useEffect, useState } from "react";

function Homefeed() {
  const [product, setProduct] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct", {
        withCredentials: true,
      })
      .then((res) => {
        setProduct(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSortByName = () => {
    const sortedProducts = [...product].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    console.log("Sorted by name:", sortedProducts);
    setProduct(sortedProducts);
   
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...product].sort((a, b) => a.price - b.price);
    console.log("Sorted by price:", sortedProducts);
    setProduct(sortedProducts);

  };
  return (
    <div className={classes.homeWrapper}>
      <Advert />
      <Categorylist />
      <div className={classes.titleContainer}>
        <button
        
          
          onClick={handleSortByPrice}
          className={classes.sortPriceBtn}
          
        >
         <PriceChangeOutlinedIcon className={classes.icon} />
        </button>
        <button
         className={classes.sortNameBtn}
          onClick={handleSortByName}
          
         
        >
          <AbcOutlinedIcon className={classes.icon} />
          
        </button>
      </div>

      <Productlist title="New Arrivals" data={product} />
      <Endblock />
    </div>
  );
}

export default Homefeed;