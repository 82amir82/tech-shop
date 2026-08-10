import React from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { GoTrash } from "react-icons/go";
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
    pic1
  } = product;

 const [state,dispatch]=useBasket();

  return (
    <div className={style.productdiv}>
      <img src={pic1} />
      <p>{Product_Name}</p>
      <div className={style.dcount}>
        <FiPlus onClick={()=>{dispatch({ type: "plus", payload: ProductID })}}/>
        <p>{count}</p>
        <LuMinus onClick={()=>{dispatch({ type: "minus", payload: ProductID })}}/>
      </div>
      <p>{Number(Price).toLocaleString("fa-IR")}تومان </p>
      
      <div>
        <GoTrash onClick={()=>{dispatch({ type: "delete", payload: ProductID })}}/>
      </div>
    </div>
  );
};

export default Cartproduct;
