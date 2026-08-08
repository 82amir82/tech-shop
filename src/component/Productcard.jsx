import React, { useEffect, useState } from "react";
import tasvir from "../assets/pic/logo.jpeg";
import style from "../style/Productcard.module.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";


const Productcard = ({ product }) => {
  // console.log(product)
  const navigate = useNavigate()
  const [newprice, setNewprice] = useState();
  const {
    Category_ID,
    Description,
    Discount,
    Price,
    ProductID,
    Product_Name,
    Status,
  } = product;
  //-----------------------------
  useEffect(() => {
    const x = Price - (Price * Discount) / 100;
    setNewprice(x);
    // console.log(Price);
    // console.log(newprice);
    // console.log("-------")
  }, [product]);
  //----------------------------------------
  const todetailproduct =()=>{
    navigate(`/product/${ProductID}`)
  }
  //----------------------------------------
  return (
    <div className={style.maincard} onClick={todetailproduct}>
      <img src={tasvir} alt={Product_Name} />
      <h3>{Product_Name}</h3>
      {Discount > 0 && (
        <>
          <h6>{newprice} تومان</h6>
          <p>{Price} تومان</p>
          <div className={style.takhfifPercentage}>
            <h6>{Discount}%</h6>
          </div>
        </>
      )}
      {Discount == 0 && (
        <>
          <h6>{Price} تومان</h6>
        </>
      )}

  
    </div>
  );
};

export default Productcard;
