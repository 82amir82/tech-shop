import React, { useState } from "react";
import style from "../style/Hambermenu.module.css";
import { FaAngleDown } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LuStore } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa";

const Hambermenu = ({ setShowhambermenu ,changecategory}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={style.back}
      onClick={(e) => {
        if (e.target == e.currentTarget) setShowhambermenu(false);
      }}
    >
      <div className={style.menu}>
        <div className={style.dmainpage} onClick={() => changecategory("")}>
          <FaHome />
          <p>صفحه اصلی </p>
        </div>

        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={style.dcategorytitle}
        >
          <p>دسته بندی محصولات</p>
          {open ? <FaAngleDown /> : <FaAngleLeft />}
        </div>
        {open && (
          <div className={style.dcategory}>
            <p onClick={() => changecategory("laptop")}>لپتاپ</p>
            <p onClick={() => changecategory("mobile")}>موبایل </p>
            <p onClick={() => changecategory("pc")}>لوازم کامپیوتر</p>
          </div>
        )}
        <div className={style.dabout}>
          <LuStore />
          <p>درباره ما </p>
        </div>
      </div>
    </div>
  );
};

export default Hambermenu;
