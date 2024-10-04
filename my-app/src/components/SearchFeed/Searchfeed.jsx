import classes from "./searchfeed.module.css";
import Advert from "../Advert/Advert";
import Endblock from "../EndBlock/Endblock";
import Productlist from "../ProductList/Productlist";
import { useState, useEffect } from "react";

const product = [
  // ELectronics = 1  Sports = 2 Food =3 Clothing = 4 Furniture = 5
  {
    id: "p1",
    image: "./images/product1.jpg",
    productName: "Iphone 14 pro max",
    categoryID: 1,
    description: "Iphone 14 pro max",
    price: 1000,
  },

  {
    id: "p2",
    image: "./images/product2.jpg",
    productName: "Addidas Boots",
    categoryID: 2,
    description: "Comfortable Boots",
    price: 130,
  },

  {
    id: "p3",
    image: "./images/product3.jpg",
    productName: "Lays Chips",
    categoryID: 3,
    description: "Onion and Sour Cream Flavour",
    price: 2,
  },
];

function Searchfeed(props) {
  //const [searchData, setSearchData] = useState([]);

 

  return (
    <div className={classes.searchWrapper}>
      <Advert />
      <Productlist title="Search Contents" data={props.products} />
      <Endblock />
    </div>
  );
}

export default Searchfeed;
