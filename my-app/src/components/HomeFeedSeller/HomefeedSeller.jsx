import Advert from "../Advert/Advert";
import ProductlistSeller from "../ProductListSeller/ProductlistSeller";
import classes from "./homefeedseller.module.css";
import Endblock from "../EndBlock/Endblock";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BarChart from "../Chart/BarChart";
import MuiTable from "../Table/table";

function HomefeedSeller() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    const fetchtabledata = async () => {
      const response1 = await axios.get(
        "http://localhost:5000/seller/tableanalytics",
        {
          withCredentials: true,
        }
      );
      //console.log('aaa',response.data.offers)
      setTabledata(response1.data.offers);
    };
    fetchtabledata();

    const fetchData = async () => {
      const response2 = await axios.get(
        "http://localhost:5000/seller/analytics",
        {
          withCredentials: true,
        }
      );
      // console.log('aaaa',response.data.salesByCategory)
      setData(response2.data.salesByCategory);
    };
    fetchData();

    const fetchProducts = async () => {
      const response3 = await axios.get(
        "http://localhost:5000/seller/product",
        {
          withCredentials: true,
        }
      );
      setProducts(response3.data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className={classes.homeWrapperseller}>
      <Advert />
      <ProductlistSeller product={products} />
      <div className={classes.app}>
        <h2>Analytics</h2>
        <div className={classes.wrapper}>
          <div className={classes.barContent}>
            <BarChart analysis={data} />
          </div>

          <div className={classes.graphContent}>
            <MuiTable analysis={tabledata} />
          </div>
        </div>
      </div>
      <Endblock />
    </div>
  );
}

export default HomefeedSeller;
