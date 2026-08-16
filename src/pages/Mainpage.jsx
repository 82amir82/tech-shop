import React from 'react'
//--------------------------------------
import Header from '../component/Header'
import Slider from '../component/Slider'
import style from '../style/Mainpage.module.css'
//--------------------------------------
import { PiHeadsetLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Productcard from '../component/Productcard';

//--------------------------------------
const Mainpage = () => {
  const [product,setProduct]=useState([]);
  const [Sales,setSales]=useState([]);
  //------------------------------------
  useEffect(()=>{
    const fetchdata=async()=>{
      try{
        const res = await axios.get("http://localhost:5000/product?sort=1");
        const res2 = await axios.get("http://localhost:5000/product?sort=4");
        setProduct(res.data);
        setSales(res2.data);
      }
      catch(err){
        console.log(err.massege)
      }
    }
    fetchdata();
    // console.log(product)
  },[])
  //------------------------------------
  return (
    <div className={style.parent}>
      <Slider />
      <div className={style.parentfeature}>
        <div className={style.dsupport}>
          <PiHeadsetLight />
          <div>
            <h6>پشتبانی 24 ساعته</h6>
            <p>پاسخگوی شما هستیم</p>
          </div>
        </div>
        <div className={style.dPayment}>
          <IoWalletOutline />
          <div>
            <h6>پرداخت امن </h6>
            <p>با کلیه کارت های بانکی</p>
          </div>

        </div>
        <div className={style.dWarranty}>
          <MdOutlineWatchLater />
           <div>
           <h6> ضمانت بازگشت کالا </h6>
            <p> تا 7 روز پس از خرید</p>
          </div>

        </div>
        <div className={style.dpost}>
            <MdOutlineLocalShipping />
           <div>
            <h6> ارسال رایگان </h6>
            <p> سفارشات بالای 2 میلیون</p>
          </div>
        </div>
      </div>
      <div className={style.headertakhfif}>
        <h3>پیشنهادهای ویژه</h3>
        <Link to={"/product?sort=1"} >
          مشاهده همه
        </Link>
      </div>
      <div className={style.dtakhfif}>
        {product.slice(0,4).map(item=><Productcard key={item.ProductID} product={item}/>)}
      </div>
      <div className={style.headertakhfif}>
        <h3>پرفروش ترین ویژه</h3>
        <Link to={"/product?sort=4"}>
          مشاهده همه
        </Link>
      </div>
       <div className={style.dtakhfif}>
        {Sales.slice(0,4).map(item=><Productcard key={item.ProductID} product={item}/>)}
      </div>
    </div>
  )
}

export default Mainpage