import classes from "./mainnavbar.module.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import { useRef , useContext ,useState } from "react";

function MainNavbar(props) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make an API request to the search endpoint with the search query as a parameter
      const response = await axios.get(`http://localhost:5000/product/${query}` , {
        withCredentials:true
      });
      // Set the matching products returned by the server
      setProducts(response.data);
     
      console.log('product', response.data)
      
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogout = async (req, res) => {
    try {
      const response = await axios.post("http://localhost:5000/seller/logout" , {}, {
        withCredentials:true
      });
      //Cookies.remove("auth_token", { path: "/seller" });
     localStorage.clear()
      window.location.href = "/seller/login";
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
              <Link to="/seller/dashboard">Home</Link>
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
            <input type="text" value = {query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for Items, Categories" />
           
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainNavbar;
