import "./loginnavbar.css";
import { Link } from "react-router-dom";

function LoginNavbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src="/images/dokologohorizontal.png" alt="Doko Logo" />
      </div>

      <div className="navbar-right">
        <span className="navbar-options">Home</span>
        <span className="navbar-options">About Us</span>
        <span className="navbar-options">Contact Us</span>
        <button className="navbar-button">
          {" "}
          <Link to="/seller/signup">Sign Up As Seller</Link>{" "}
        </button>
        <button className="navbar-button">
          {" "}
          <Link to="/">Sign Up As Buyer</Link>{" "}
        </button>
      </div>
    </div>
  );
}

export default LoginNavbar;
