import React from "react";
import Header from "../component/Header";
import { Outlet } from "react-router-dom";
import style from "../style/Mainlayout.module.css";
import Footer from "../component/Footer";

const Mainlayout = () => {
  return (
    <div className={style.container}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Mainlayout;
