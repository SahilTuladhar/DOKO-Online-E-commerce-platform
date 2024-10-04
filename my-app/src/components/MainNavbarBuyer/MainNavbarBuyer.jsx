import classes from "./mainnavbar.module.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import Productlist from "../ProductList/Productlist";
import Homefeed from '../HomeFeed/Homefeed'
import { useRef , useContext ,useState } from "react";


function MainNavbarBuyer(props) {

  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);



  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.replace(`/search-page?q=${searchQuery}`);
    setSearchQuery('');
  };


  const handleLogout = async (req, res) => {
    try {
      const response = await axios.post("http://localhost:5000/user/logout",{},{
        withCredentials:true
      });
      //Cookies.remove("buyer_token", { path: "/" });
      localStorage.clear()
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarleft}>
        <img src="/images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className={classes.navbarmid}>
        <nav>
          <ul>
            <li>
              <Link to="/home-page">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <span onClick={handleLogout}>Logout</span>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/aboutus-page">About Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={classes.navbarright}>
        <div className={classes.searchbar}>
          <form onSubmit={handleSubmit}>
            <SearchOutlinedIcon className={classes.icon} />
            <input type="text" value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for Items, Categories" />
           
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default MainNavbarBuyer;
