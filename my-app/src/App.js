import React from "react";
import Home from "./pages/home/Home";
import Sellersettings from "./pages/sellersettings/Sellersettings";
import ProductForm from "./pages/ProductForm/ProductForm";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Signup from "./pages/signup/Signup";
import HomeSeller from "./pages/homeseller/HomeSeller";
import Update from "./pages/update/update";
import Category from "./pages/category/Category";
import Addtocart from "./pages/addtocart/Addtocart";
import Wishlist from "./pages/wishlist/Wishlist";
import Aboutus from "./pages/aboutus/Aboutus";
import Profile from "./pages/profile/Profile";
import Notification from "./pages/notification/Notification";
import Product from "./pages/product/Product";
import SignupBuyer from "./pages/signupBuyer/signupBuyer";
import LoginBuyer from "./pages/loginBuyer/loginBuyer";
import Settings from "./pages/settings/Settings";
import Changepassword from "./pages/settings/Changepassword";
import Search from "./pages/search/Search";
import Updateprofile from "./pages/settings/Updateprofile";
import Mybids from "./pages/mybids/Mybids";
import { Route, Routes } from "react-router-dom";
import Bid from "./pages/Bid/bid";
import Changepasswordseller from "./pages/sellersettings/Changepasswordseller";
import Updateprofileseller from "./pages/sellersettings/Updateprofileseller";

function App() {
  return (
    <Routes>
      {/*<Route exact path = '/seller/dashboard' element = {<SellerDashboard/>}/> */}
      <Route path="/" element={<SignupBuyer />} />
      <Route path="/login" element={<LoginBuyer />} />
      <Route exact path="/seller/product/new" element={<ProductForm />} />
      <Route exact path="/product/:id" element={<ProductDetail />} />
      <Route exact path="/seller/login" element={<Login />} />
      <Route exact path="/seller/signup" element={<Signup />} />
      <Route exact path="/product/update/:id" element={<Update />} />
      <Route path="/settings-page" element={<Settings />} />
      <Route path="/settings-page-seller" element={<Sellersettings />} />
      <Route path="/change-pw" element={<Changepassword />} />
      <Route path="/change-pw-seller" element={<Changepasswordseller />} />
      <Route path="/update-profile" element={<Updateprofile />} />
      <Route path="/update-profile-seller" element={<Updateprofileseller />} />
      <Route path="/search-page" element={<Search />} />
      <Route exact path="/seller/dashboard" element={<HomeSeller />} />
      <Route exact path="/seller/offers" element={<Bid />} />
      <Route
        path="/category-page-electronics"
        element={<Category title1="Electronics" id="Electronics" />}
      />
      <Route
        path="/category-page-sports"
        element={<Category title1="Sports" id="Sports" />}
      />

      <Route
        path="/category-page-food"
        element={<Category title1="Food" id="Food" />}
      />
      <Route
        path="/category-page-clothing"
        element={<Category title1="Clothing" id="Clothing" />}
      />
      <Route
        path="/category-page-furniture"
        element={<Category title1="Furniture" id="Furniture" />}
      />

      <Route path="/home-page" element={<Home />} />
      <Route path="/mero-doko" element={<Addtocart />} />
      <Route path="/wishlist-page" element={<Wishlist />} />
      <Route path="/aboutus-page" element={<Aboutus />} />
      <Route path="/profile-page" element={<Profile />} />
      <Route path="/notification-page" element={<Notification />} />
      <Route path="/product-page" element={<Product />} />
      <Route path="/bids-page" element={<Mybids />} />
    </Routes>
  );
}

export default App;
