import React from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
import pic from "../assets/pic/logo.jpeg";
import style from '../style/Cartproduct.module.css'
import { useBasket } from "../condex/Basketcondex";


const Cartproduct = ({product}) => {
  const {
    Category_ID,
    Description,
    Discount,
    Price,
    ProductID,
    Product_Name,
    Status,
    CPU,
    RAM,
    Brand,
    count,
  } = product;

 const [state,dispatch]=useBasket();

  return (
    <div className={style.productdiv}>
      <img src={pic} />
      <p>{Product_Name}</p>
      <div className={style.dcount}>
        <FiPlus onClick={()=>{dispatch({ type: "plus", payload: ProductID })}}/>
        <p>{count}</p>
        <LuMinus onClick={()=>{dispatch({ type: "minus", payload: ProductID })}}/>
      </div>
      <p>{Price}تومان </p>
      
      <div>
        <GoTrash onClick={()=>{dispatch({ type: "delete", payload: ProductID })}}/>
      </div>
    </div>
  );
};

export default Cartproduct;
