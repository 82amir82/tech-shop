import React from 'react'
import style from '../style/Footer.module.css'
import logo from '../assets/pic/logo.jpeg'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.leftdiv}>
        <img src={logo} alt="" />
      </div>
      <div className={style.centerdiv}>
        <p> راهنمای استنفاده از سایت  </p>
        <p>سوالات متداول </p>
        <p>تماس با ما </p>
        <p>09944270887</p>
      </div>
      <div className={style.rightdiv}>
        <p> لینک دانلود اپلیکشن </p>
        <div className={style.downloadlink}>
        <i className="fa-brands fa-android"></i>
        <p>android</p>
        </div>
        <div className={style.downloadlink}>
        <i className="fa-brands fa-apple"></i>
        <p>ios</p>
        </div>
      </div>
    </div>
  )
}

export default Footer