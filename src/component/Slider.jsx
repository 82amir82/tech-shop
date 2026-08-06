import React from 'react'


//--------------------------------
import laptopslider from '../assets/pic/laptopslider.webp'
import mobileslider from '../assets/pic/mobileslider.webp'
import pcslider from "../assets/pic/pcslider.webp"
import style from '../style/Slider.module.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import { Navigation,Autoplay, Pagination } from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/Slider.css";
//---------------------------------------------------

const Slider = () => {
  return (
    <Swiper className={style.swiperset}
    modules={[Navigation,Pagination,Autoplay]}
    navigation
    pagination={{clickable:true}}
    autoplay={{
        delay:3000,
        disableOnInteraction:false,
    }}
    loop
    >
        <SwiperSlide className={style.sliderimg}>
            <Link to='product/laptop'>
                <img src={laptopslider} alt="Laptop" />
            </Link>
        </SwiperSlide>
        <SwiperSlide className={style.sliderimg}>
            <Link to='product/mobile'>
                <img src={mobileslider} alt="mobile" />
            </Link>
        </SwiperSlide>
        <SwiperSlide className={style.sliderimg}>
            <Link to='product/pc'>
                <img src={pcslider} alt="pc" />
            </Link>
        </SwiperSlide>
    </Swiper>
    
  )
}

export default Slider