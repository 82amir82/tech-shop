import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useReducer } from "react";
import axios from "axios";
import style from "../style/Detailproduct.module.css";
//---------------------------------------
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiHeadsetLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { GoTrash } from "react-icons/go";

import { useBasket } from "../condex/Basketcondex";
//--------------------------------------------
import { func_count } from "../service/myfunctions";

//---------------------------------------
// function reducer(state, action) {}

const Detailproduct = () => {
  const params = useParams();
  const [product, setProduct] = useState("");
  const [newprice, setNewprice] = useState(1000);
  const [descriptionviwe, setDescriptionviwe] = useState(1);
  const [like, setLike] = useState(false);
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
    pic1,
    pic2,
    pic3,
    pic4,
  } = product;
  const [demopic, setDemopic] = useState("");
  const [state, dispatch] = useBasket();
  // console.log(dispatch);
  // console.log(state);
  //--------------------------------------
  const tedad = func_count(state, ProductID);
  // console.log(tedad);
  // console.log(params.id);
  //--------------------------------------
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/product/${params.id}`,
        );
        setProduct(res.data);
        // console.log("res", res.data);
      } catch (err) {
        console.log("eror", err);
      }
    };
    fetchProduct();
  }, [params]);
  //------------------
  useEffect(() => {
    const x = Price - (Price * Discount) / 100;
    setNewprice(x);
    setDemopic(pic1);
  }, [product]);
  //------------------------
  const changeDemopic = (pic) => {
    setDemopic(pic);
  };
  const changedescriptionviwe = (viwe) => {
    setDescriptionviwe(viwe);
  };
  return (
    <div>
      <div className={style.topdiv}>
        <div className={style.productdetail}>
          <div>
            <h1>{Product_Name}</h1>
          </div>
          <div>
            <div className={style.dprice}>
              {/* <div className={style.dnewprice}> */}
              {Discount > 0 && (
                <div className={style.dDiscount}>
                  <h5> {Discount}%</h5>
                </div>
              )}
              <h6> {Number(newprice).toLocaleString("fa-IR")} تومان</h6>
              {/* </div>   */}
              {Discount > 0 && (
                <p>{Number(Price).toLocaleString("fa-IR")} تومان</p>
              )}
            </div>
            <div className={style.dinformation}>
              {Category_ID == 1 && (
                <div>
                  <p>برند : {Brand}</p>
                  <p>پردازنده : {CPU}</p>
                  <p>رم : {RAM}</p>
                  <p>برند : {Brand}</p>
                  <p>پردازنده : {CPU}</p>
                  <p>رم : {RAM}</p>
                  {Status ? (
                    <h6 className={style.dexist}>موجود در انبار </h6>
                  ) : (
                    <h6 className={style.dnotexist}> عدم موجودی </h6>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={style.productpic}>
          <div className={style.largpic}>
            {demopic && <img src={demopic} />}
          </div>
          <div className={style.smallpic}>
            <img src={pic1} alt="" onClick={() => changeDemopic(pic1)} />
            <img src={pic2} alt="" onClick={() => changeDemopic(pic2)} />
            <img src={pic3} alt="" onClick={() => changeDemopic(pic3)} />
            <img src={pic4} alt="" onClick={() => changeDemopic(pic4)} />
          </div>
        </div>
      </div>
      <div className={style.dbuy}>
        <div
          className={like ? style.dliket : style.dlikef}
          onClick={() => {
            setLike(!like);
          }}
        >
          {like ? <FaHeart /> : <CiHeart />}
        </div>
        {tedad < 1 ? (
          <button
            className={style.buttonbuy}
            onClick={() => {
              dispatch({ type: "add", payload: product });
            }}
          >
            افزون به سبد خرید{" "}
          </button>
        ) : (
          <div className={style.productnumbers}>
            <div
              className={style.dplus}
              onClick={() => {
                dispatch({ type: "plus", payload: ProductID });
              }}
            >
              <FiPlus />
            </div>
            <div className={style.numbers}>
              <p>{tedad}</p>
            </div>
            <div
              className={style.dmines}
              onClick={() => {
                dispatch({ type: "minus", payload: ProductID });
              }}
            >
              <LuMinus />
            </div>
            <div
              className={style.dtrash}
              onClick={() => {
                dispatch({ type: "delete", payload: ProductID });
              }}
            >
              <GoTrash />
            </div>
          </div>
        )}
      </div>
      <div className={style.middelmdiv}>
        <div className={style.parentfeature}>
          <div className={style.rightfeature}>
            <div className={style.dsupport}>
              <PiHeadsetLight />
              <div>
                <h6>پشتبانی 24 ساعته</h6>
              </div>
            </div>
            <div className={style.dPayment}>
              <IoWalletOutline />
              <div>
                <h6>پرداخت امن </h6>
              </div>
            </div>
          </div>
          <div className={style.leftfeature}>
            <div className={style.dWarranty}>
              <MdOutlineWatchLater />
              <div>
                <h6> ضمانت بازگشت کالا </h6>
              </div>
            </div>
            <div className={style.dpost}>
              <MdOutlineLocalShipping />
              <div>
                <h6> ارسال رایگان </h6>
              </div>
            </div>
          </div>
        </div>
        <div className={style.buttomdiv}>
          <div className={style.menudescription}>
            <div
              className={descriptionviwe == 1 ? style.viwe : ""}
              onClick={() => {
                changedescriptionviwe(1);
              }}
            >
              <h6>توضیحات محصول</h6>
            </div>
            <div
              className={descriptionviwe == 2 ? style.viwe : ""}
              onClick={() => {
                changedescriptionviwe(2);
              }}
            >
              <h6>مشخصات فنی</h6>
            </div>
            <div
              className={descriptionviwe == 3 ? style.viwe : ""}
              onClick={() => {
                changedescriptionviwe(3);
              }}
            >
              <h6>نظرات</h6>
            </div>
          </div>
          <div className={style.dDescription}>
            <p>
              {Description},{Description},{Description},{Description},
              {Description},{Description},{Description},{Description},
              {Description},
            </p>
          </div>
          <div className={style.dSpecifications}>
            {Category_ID == 1 && (
              <table>
                <tbody>
                  <tr>
                    <th> برند </th>
                    <td> {Brand}</td>
                  </tr>
                  <tr>
                    <th>پردازنده</th>
                    <td>{CPU}</td>
                  </tr>
                  <tr>
                    <th>حافظه رم</th>
                    <td>{RAM}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailproduct;
