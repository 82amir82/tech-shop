import React, { useEffect, useState } from "react";
import { useLike } from "../condex/Likecondex";
import { useBasket } from "../condex/Basketcondex";
import style from "../style/Cartproduct.module.css";
import { GoTrash } from "react-icons/go";

const Likeproduct = ({ product }) => {
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
    pic1,
  } = product;
  const [incart,setIncart]=useState(false);
  const [listlike, setListlike] = useLike();
  const [state, dispatch] = useBasket();
  useEffect(() => {
    setIncart(state.listbasket.some(item=>item.ProductID==ProductID))
  }, [product]);
  const addcart =() => { 
   dispatch({ type: "add", payload: product });
   setIncart(true);
  }

  return (
    <div className={style.productdiv}>
      <div className={style.rightdiv}>
        <img src={pic1} />
        <p>{Product_Name}</p>
      </div>
      <div className={style.leftdiv}>
        <p>{Number(Price).toLocaleString("fa-IR")}تومان </p>
        <button className={`${style.addcart} ${incart && style.viweaddcart }`} onClick={ incart ? undefined : addcart}>افزون به سبد خرید</button>
        <div className={style.dtrash}>
          <GoTrash
            onClick={() => {
              const x = listlike.filter((item) => item.ProductID != ProductID);
              setListlike(x);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Likeproduct;
