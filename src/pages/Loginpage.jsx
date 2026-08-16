import React, { useState } from "react";
import style from "../style/Loginpage.module.css";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [login, setLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errlogin, setErrlogin] = useState(false);

  const verify = (username, password) => {
    
    if (username == "amir" && password == "123") {
      setErrlogin(false);
      navigate("/home");
    } else {
      setErrlogin(true);
      console.log(username,password)
    }
  };
  return (
    <div className={style.back}>
      <div className={style.viwe}>
        <div className={style.menulogin}>
          <p
            className={login ? style.selectmenu : ""}
            onClick={() => {
              setLogin(true);
            }}
          >
            ورود
          </p>
          <p
            className={login ? "" : style.selectmenu}
            onClick={() => {
              setLogin(false);
            }}
          >
            ثبت نام{" "}
          </p>
        </div>
        {login ? (
          <div className={style.login}>
            <label>نام کاربری</label>
            <input
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder=" نام کاربری خود را وارد کنید "
            />
            <label>رمز عبور</label>
            <input
              type="text"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder=" پسورد خود را وارد کنید "
            />
            <button
              onClick={() => {
                verify(username, password);
              }}
            >
              {" "}
              ورود به حساب کاربری
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {errlogin && (
        <div className={style.err}>
          <p>اطلاعات وارد شده صحیح نمی باشد</p>
          <h2 onClick={()=>setErrlogin(!errlogin)}>x</h2>
        </div>
      )}
    </div>
  );
};

export default Loginpage;
