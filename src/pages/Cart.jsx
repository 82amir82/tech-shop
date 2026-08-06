import React from "react";
import style from "../style/Cart.module.css";
import { useBasket } from "../condex/Basketcondex";
import pic from "../assets/pic/logo.jpeg";

const Cart = ({opencart,setOpencart}) => {
  const [state, dispatch] = useBasket();
  
  return (
    <div className={style.back}>
      <div className={style.dcart}>
        <div className={style.topdiv}>
          <h1>سبد خرید شما </h1>
          <p onClick={()=>{setOpencart(!opencart)}}>x</p>
        </div>
        <div>
          {state.listbasket.length > 0 &&
            state.listbasket.map((item) => (
              <div className={style.productdiv} key={item.ProductID}>
                <img src={pic} /> {item.Product_Name}
              </div>
            ))}
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
