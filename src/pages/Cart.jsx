import React, { useEffect, useState } from "react";
import style from "../style/Cart.module.css";
import { useBasket } from "../condex/Basketcondex";
import { useLike } from "../condex/Likecondex";
import Cartproduct from "../component/Cartproduct";
import Likeproduct from "../component/Likeproduct";

const Cart = ({ opencart, setOpencart }) => {
  const [state, dispatch] = useBasket();
  const [listlike, setListlike] = useLike();
  const [showcart, setShowcart] = useState(true);
  
  return (
    <div className={style.back}>
      <div className={style.dcart}>
        <div className={style.topdiv}>
          <div className={style.title}>
            <h1
              className={showcart ? style.viwe : ""}
              onClick={() => {
                setShowcart(true);
              }}
            >
              سبد خرید شما{" "}
            </h1>
            <h1
              className={!showcart ? style.viwe : ""}
              onClick={() => {
                setShowcart(false);
              }}
            >
              محصولات مورد علاقه شما{" "}
            </h1>
          </div>

          <p
            onClick={() => {
              setOpencart(!opencart);
            }}
          >
            x
          </p>
        </div>
        <div className={`${style.middlediv} ${!showcart && style.middledivforlike }`}>
          {state.listbasket.length > 0 &&
            showcart &&
            state.listbasket.map((item) => (
              <Cartproduct product={item} key={item.ProductID} />
            ))}
          {listlike.length > 0 &&
            !showcart &&
            listlike.map((item) => (
              <Likeproduct product={item} key={item.ProductID} />
            ))}
        </div>
        {showcart && (
          <>
            <div className={style.bottomdiv}>
              <p>جمع کل : </p>
              <p>{state.total.toLocaleString("fa-IR")} تومان</p>
            </div>
            <div className={style.buttondiv}>
              <button
                onClick={() => {
                  setOpencart(!opencart);
                }}
                className={style.butback}
              >
                افزون محصول جدید{" "}
              </button>
              <button className={style.endbuy}>تسویه حساب</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
