import classes from "./categoryfeed.module.css";
import Advert from "../Advert/Advert";
import Categoryproductlist from "../CategoryProductLIst/Categoryproductlist";
import Endblock from "../EndBlock/Endblock";
import { useEffect, useState } from "react";
import axios from "axios";
// const products = [
//   // ELectronics = 1  Sports = 2 Food =3 Clothing = 4 Furniture = 5
//   {
//     id: "p1",
//     image: "./images/product1.jpg",
//     productName: "Iphone 14 pro max",
//     categoryID: "Electronics",
//     description: "Iphone 14 pro max",
//     price: "$1000",
//   },

//   {
//     id: "p2",
//     image: "./images/product2.jpg",
//     productName: "Addidas Boots",
//     categoryID: "Sports",
//     description: "Comfortable Boots",
//     price: "$130",
//   },

//   {
//     id: "p2",
//     image: "./images/product3.jpg",
//     productName: "Lays Chips",
//     categoryID: "Food",
//     description: "Onion and Sour Cream Flavour",
//     price: "$2",
//   },

//   {
//     id: "p2",
//     image: "./images/product4.jpg",
//     productName: "Nike Hoodie",
//     categoryID: "Clothing",
//     description: "Black comforatble Hoodie",
//     price: "$50",
//   },

//   {
//     id: "p2",
//     image: "./images/product5.jpg",
//     productName: "Queen Bed",
//     categoryID: "Furniture",
//     description: "Comfortable Bed",
//     price: "$1300",
//   },

//   {
//     id: "p2",
//     image: "./images/product6.jpg",
//     productName: "Addidas Shoes",
//     categoryID: "Sports",
//     description: "Running Shoes",
//     price: "$140",
//   },
// ];

function Categoryfeed(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/product/getallproduct", {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(products);

  return (
    <div className={classes.categoryWrapper}>
      <Advert />
      <Categoryproductlist
        categoryTitle={props.title}
        category={props.CategoryId}
        data={products}
      />
      <Endblock />
    </div>
  );
}

export default Categoryfeed;
