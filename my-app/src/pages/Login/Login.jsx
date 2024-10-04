import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import LoginNavbar from "../../components/LoginNavbar/LoginNavbar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/seller/login",
        {
          email,
          password,
        },

        {
          withCredentials: true,
        }
      );

      // Redirect the user to the home page or dashboard
      window.location.href = "/seller/dashboard";
    } catch (error) {
      console.error(error);
      alert("Failed to login");
    }
  };

  return (
    <>
      <LoginNavbar />
      <div className="body">
        <div className="background">
          <div className="center-block">
            <div className="center-block-left">
              <img
                className="loginImage"
                src="/images/dokologovertical.png"
                alt="doko logo"
              />
            </div>

            <div className="center-block-right">
              <div className="login-form">
                <h1 className="login-title">Log In</h1>
                <form
                  onSubmit={handleSubmit}
                  className="input-form"
                  autoComplete="new-password"
                >
                  <div className="input-box">
                    <div className="inner-wrapper">
                      <EmailOutlinedIcon className="icon" />
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        autoComplete="off"
                        className="input-value"
                        placeholder="Enter E-mail Address"
                      />
                    </div>
                  </div>

                  <div className="input-box">
                    <div className="inner-wrapper">
                      <PasswordOutlinedIcon className="icon" />
                      <input
                        type="password"
                        value={password}
                        autoComplete="off"
                        onChange={(event) => setPassword(event.target.value)}
                        className="input-value"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>

                  <button className="login-button">Log In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
