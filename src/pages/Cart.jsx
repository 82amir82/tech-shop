import React from "react";
import style from "../style/Cart.module.css";
import { useBasket } from "../condex/Basketcondex";
import Cartproduct from "../component/Cartproduct";

const Cart = ({ opencart, setOpencart }) => {
  const [state, dispatch] = useBasket();

  return (
    <div className={style.back}>
      <div className={style.dcart}>
        <div className={style.topdiv}>
          <h1>سبد خرید شما </h1>
          <p
            onClick={() => {
              setOpencart(!opencart);
            }}
          >
            x
          </p>
        </div>
        <div className={style.middlediv}>
          {state.listbasket.length > 0 &&
            state.listbasket.map((item) => (
              <Cartproduct product={item} key={item.ProductID} />
            ))}
        </div>
        <div className={style.bottomdiv}>
          <p>جمع کل : </p>
          <p>{state.total} تومان</p>
        </div>
        <div className={style.buttondiv}>
          <button onClick={()=>{setOpencart(!opencart)}} className={style.butback}>افزون محصول جدید  </button>
          <button className={style.endbuy} >تسویه حساب</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
