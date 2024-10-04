import BidList from "../BidList/BidList.jsx";
import classes from "./bidfeed.module.css";
import Endblock from "../EndBlock/Endblock";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Advert from "../Advert/Advert.jsx";

function Bidfeed() {
  const [offers, setOffers] = useState([])
useEffect(()=>{
  axios.get('http://localhost:5000/seller/offers' ,{
   withCredentials:true
  })
  .then(res=>{
  
   setOffers(res.data.offers)
   
  })
  .catch(err=>{
     console.log(err)
  })
},[])
console.log(offers)

  return (
    <div className={classes.homeWrapper}>
      <Advert />
      <BidList title="Offers" product={offers} />
      <Endblock />
    </div>
  );
}

export default Bidfeed;