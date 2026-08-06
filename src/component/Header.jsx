import React, { useEffect, useState } from "react";

//--------------------------------------------
import style from "../style/Header.module.css";
import logo from "../assets/pic/logo.jpeg";
import { IoSearchSharp } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useSearchParams , useNavigate } from "react-router-dom";

//-------------------------------------------

const Header = () => {
  const [searchparams, setSearchparams] = useSearchParams();
  const navigate = useNavigate();
  //----------------------------------------------
  const changecategory = (category) => {
    const scategory = searchparams.get("category");
    const param = new URLSearchParams(searchparams);
    if (category != scategory) {
      param.delete("brand");
      param.delete("cpu");
      param.delete("ram");
      param.delete("minprice");
      param.delete("maxprice");
      param.delete("sort");
    }
    if(category){
    param.set("category",category);
    }
    else{
      param.delete("category");
    }
    navigate(`/product?${param.toString()}`)
  };
  return (
    <div className={style.parent}>
      <div className={style.topdiv}>
        <div className={style.dlogo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.dsearch}>
          <button className={style.iconsearch}>
            <IoSearchSharp />
          </button>
          <input type="text" placeholder=" جستوجو محصولات ..." />
        </div>
        <div className={style.dicon}>
          <div className={style.diconuser}>
            <p>امیرحسین خودکامه</p>
            <BsPersonCircle className={style.iconprofile} />
          </div>
          <MdOutlineShoppingCart className={style.iconcart} />
        </div>
      </div>
      <div className={style.bottomdiv}>
        <Link to="/home">صفحه اصلی</Link>
        <button onClick={()=>changecategory("")}>فروشگاه</button>
        <button onClick={()=>changecategory("laptop")}>لپتاپ</button>
        <button onClick={()=>changecategory("mobile")}>موبایل</button>
        <button onClick={()=>changecategory("pc")}>لوازم کامپیوتر</button>
      </div>
    </div>
  );
};

export default Header;
