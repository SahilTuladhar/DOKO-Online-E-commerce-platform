import classes from "./search.module.css";
import SideBar from "../../components/SideBar/Sidebar";
import MainNavbarBuyer from "../../components/MainNavbarBuyer/MainNavbarBuyer";
import Searchfeed from "../../components/SearchFeed/Searchfeed";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import UsernameContext from "../../store/username-context";
import axios from "axios";

function Search() {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get("q");
  const usernameCtx = useContext(UsernameContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${searchQuery}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  return (
    <>
      <MainNavbarBuyer />
      <div className={classes.searchContainer}>
        <SideBar name={usernameCtx.name} />
        <Searchfeed products={products} />
      </div>
    </>
  );
}
export default Search;
