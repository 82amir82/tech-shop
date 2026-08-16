import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
//----------------------------------------------
import style from "../style/Product.module.css";
import Productcard from "../component/Productcard";
import Slider from "@mui/material/Slider";
import { useProduct } from "../condex/Productcondex";
//----------------------------------------------
const Product = () => {

  const [searchparams, setSearchparams] = useSearchParams();
  const [fcategory, setFcategory] = useState("");
  const [sort, setSort] = useState(String(searchparams.get("sort") || ""));
  const [price, setPrice] = useState([
    Number(searchparams.get("minprice") || 1000000),
    Number(searchparams.get("maxprice") || 100000000),
  ]);
  const [ispricefilter, setIspricefilter] = useState(true);
  const [brand, setBrand] = useState(searchparams.getAll("brand"));
  const [cpu, setCpu] = useState(searchparams.getAll("cpu"));
  const [ram, setRam] = useState(searchparams.getAll("ram"));
  const listproduct = useProduct();
  const [product, setProduct] = useState([]);

  // console.log(searchparams);
  //-----------------------------------
  useEffect(() => {
    let resulte = listproduct;
    const category = searchparams.get("category");
    //------------------------------------
    // setBrand(searchparams.getAll("brand"));
    // setSort(String(searchparams.get("sort") || ""));
    // setCpu(searchparams.getAll("cpu"));
    // setRam(searchparams.getAll("ram"));
    // setPrice([
    //   Number(searchparams.get("minprice") || 1000000),
    //   Number(searchparams.get("maxprice") || 100000000),
    // ]);

    //-----------------------------------
    // console.log(searchparams);
    // console.log(category)
    if (category == "laptop") {
      setFcategory("لپتاپ");
    }
    if (category == "mobile") {
      setFcategory("موبایل");
    }
    if (category == "pc") {
      setFcategory("لوازم کامپیوتر");
    }
    if (!category) {
      setFcategory("");
    }
    //--------------------------------------
    // const fetchProduct = async () => {
    //     try {
    //       const res = await axios.get(
    //         `http://localhost:5000/product?${searchparams.toString()}`,
    //       );
    //       setProduct(res.data);
    //     } catch (err) {
    //       console.log("eror", err);
    //     }
    // };
    // fetchProduct();
    // console.log(product) نمابش محصولات
    //---------------------------------
    // console.log(sort);
    // console.log(resulte);
    //--------------------------sort-----
    if (sort == 1)
      resulte = [...listproduct].sort((a, b) => b.Discount - a.Discount);
    else if (sort == 2)
      resulte = [...listproduct].sort((a, b) => a.Price - b.Price);
    else if (sort == 3)
      resulte = [...listproduct].sort((a, b) => b.Price - a.Price);
    else if (sort == 4)
      resulte = [...listproduct].sort((a, b) => b.SalesCount - a.SalesCount);
    //-------------------------price filter-----
    if (price[0] > 1000000 || price[1] < 100000000) {
      resulte = resulte.filter(item => (item.Price > price[0] && item.Price < price[1]));
    }
    //---------------------------category------
    // console.log(category)
    if (category)
      resulte = resulte.filter(item => item.Category_ID == category);
    //-----------------brand-----------
    console.log(brand);
    if (brand.length > 0)
      resulte = resulte.filter(item => brand.includes(item.Brand));
    //----------------------------ram----------------
    if (ram.length > 0)
      resulte = resulte.filter(item => ram.includes(item.RAM));
    //----------------------------cpu----------------
    console.log(cpu)
    if(cpu.length>0)
      resulte=resulte.filter(item=>cpu.includes(item.CPU));

    console.log("aaa", resulte)
    setProduct(resulte);

  }, [searchparams]);
  //--------------------------------
  useEffect(() => {
    if (!!sort) {
      const param = new URLSearchParams(searchparams);
      param.set("sort", String(sort));
      setSearchparams(param);
    }
  }, [sort]);

  //----------------------------------------------
  const priceChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setPrice(newValue);
  };

  const pricefilter = (newvalue) => {
    setIspricefilter(!ispricefilter);
    const param = new URLSearchParams(searchparams);
    param.set("minprice", price[0]);
    param.set("maxprice", price[1]);
    setSearchparams(param);
  };
  //----------------------------------------------
  const BrandChange = (e) => {
    const value = e.target.value;
    let newbrand;
    if (e.target.checked) {
      newbrand = [...brand, value];
    } else {
      newbrand = brand.filter((item) => item !== value);
    }
    setBrand(newbrand);
    // console.log(newbrand);
    const param = new URLSearchParams(searchparams);
    // param.set("brand",newbrand);
    param.delete("brand");
    newbrand.forEach((item) => {
      param.append("brand", item);
    });
    setSearchparams(param);
    //-------------
  };
  //------------------------------------------------------
  const cpuChange = (e) => {
    const value = e.target.value;
    let newcpu;
    if (e.target.checked) {
      newcpu = [...cpu, value];
    } else {
      newcpu = cpu.filter((item) => item !== value);
    }
    setCpu(newcpu);
    // console.log(newcpu);
    const param = new URLSearchParams(searchparams);
    // param.set("cpu",newcpu);
    param.delete("cpu");

    newcpu.forEach((item) => {
      param.append("cpu", item);
    });
    setSearchparams(param);
  };
  //------------------------------
  const ramChange = (e) => {
    const value = e.target.value;
    let newram;
    if (e.target.checked) {
      newram = [...ram, value];
    } else {
      newram = ram.filter((item) => item !== value);
    }
    setRam(newram);
    // console.log(newram);
    const param = new URLSearchParams(searchparams);
    // param.set("brand",newbrand);
    param.delete("ram");
    newram.forEach((item) => {
      param.append("ram", item);
    });
    setSearchparams(param);
  };
  //------------------------------------
  // useEffect(() => {
  //   const newlist = listproduct.filter(item => (item.Price > price[0] && item.Price < price[1]));
  //   setProduct(newlist);
  // }, [ispricefilter])
  //-------------------------------------
  return (
    <>
      <h1 className={style.hcategory}>{fcategory}</h1>
      <div className={style.back}>
        <div className={style.dright}>
          <div className={style.dfilter}>
            <p>مرتب سازی :</p>
            <div>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {/* <option value=""></option> */}
                <option value="1">پر تخفیف ترین</option>
                <option value="2">ارزان ترین</option>
                <option value="3">گران ترین</option>
                <option value="4">پرفروش ترین</option>
              </select>
            </div>
          </div>
          <div className={style.dproduct}>
            {product.length > 0 && product.map((item) => (
              <Productcard key={item.ProductID} product={item} />
            ))}
          </div>
        </div>
        <div className={style.dleft}>
          <div className={style.dprice}>
            <h3>فیلتر بر اساس</h3>
            <p>قیمت</p>
            <div className={style.dslider}>
              <Slider
                value={price}
                onChange={priceChange}
                valueLabelDisplay="auto"
                min={1000000}
                max={100000000}
                step={1000000}
              />
              <p>
                از {price[0].toLocaleString()} تا {price[1].toLocaleString()}{" "}
                تومان
              </p>
              <button onClick={pricefilter}>اعمال فیلتر</button>
            </div>
          </div>
          {(fcategory == "لوازم کامپیوتر" || fcategory == "لپتاپ") && (
            <div className={style.dbrand}>
              <p>برند</p>
              <label>
                <input
                  type="checkbox"
                  value="asus"
                  onChange={BrandChange}
                  checked={brand.includes("asus")}
                />
                asus
              </label>
              <label>
                <input
                  type="checkbox"
                  value="lenovo"
                  onChange={BrandChange}
                  checked={brand.includes("lenovo")}
                />
                lenovo
              </label>
              <label>
                <input
                  type="checkbox"
                  value="hp"
                  onChange={BrandChange}
                  checked={brand.includes("hp")}
                />
                hp
              </label>
              <label>
                <input
                  type="checkbox"
                  value="msi"
                  onChange={BrandChange}
                  checked={brand.includes("msi")}
                />
                msi
              </label>
            </div>
          )}
          {fcategory == "موبایل" && (
            <div className={style.dbrand}>
              <p>برند</p>
              <label>
                <input
                  type="checkbox"
                  value="iphone"
                  onChange={BrandChange}
                  checked={brand.includes("iphone")}
                />
                iphone
              </label>
              <label>
                <input
                  type="checkbox"
                  value="samsung"
                  onChange={BrandChange}
                  checked={brand.includes("samsung")}
                />
                samsung
              </label>
              <label>
                <input
                  type="checkbox"
                  value="xiaomi"
                  onChange={BrandChange}
                  checked={brand.includes("xiaomi")}
                />
                Xiaomi
              </label>
              <label>
                <input
                  type="checkbox"
                  value="google"
                  onChange={BrandChange}
                  checked={brand.includes("google")}
                />
                google
              </label>
            </div>
          )}
          {(fcategory == "موبایل" || fcategory == "لپتاپ") && (
            <div className={style.dbrand}>
              <p>پردازنده</p>
              <label>
                <input
                  type="checkbox"
                  value="Corei3"
                  onChange={cpuChange}
                  checked={cpu.includes("Corei3")}
                />
                Core i3
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Corei5"
                  onChange={cpuChange}
                  checked={cpu.includes("Corei5")}
                />
                Core i5
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Corei7"
                  onChange={cpuChange}
                  checked={cpu.includes("Corei7")}
                />
                Core i7
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Corei9"
                  onChange={cpuChange}
                  checked={cpu.includes("Corei9")}
                />
                Core i9
              </label>
            </div>
          )}
          {(fcategory == "موبایل" || fcategory == "لپتاپ") && (
            <div className={style.dbrand}>
              <p>محدوه حافطه RAM</p>
              <label>
                <input
                  type="checkbox"
                  value="8"
                  onChange={ramChange}
                  checked={ram.includes("8")}
                />
                8 گیگابایت
              </label>
              <label>
                <input
                  type="checkbox"
                  value="16"
                  onChange={ramChange}
                  checked={ram.includes("16")}
                />
                16 گیگابایت
              </label>
              <label>
                <input
                  type="checkbox"
                  value="32"
                  onChange={ramChange}
                  checked={ram.includes("32")}
                />
                32 گیگابایت
              </label>
              <label>
                <input
                  type="checkbox"
                  value="64"
                  onChange={ramChange}
                  checked={ram.includes("64")}
                />
                64 گیگابایت
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
