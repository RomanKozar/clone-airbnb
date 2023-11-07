import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Google_icon from "../../assets/img/google_icon.svg";
import Apple_icon from "../../assets/img/apple.svg";
import Facebook_icon from "../../assets/img/facebook_icon.svg";
import Email_icon from "../../assets/img/email.svg";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

function Login() {
  const navigate = useNavigate();
  return (
    <form className="form">
      <div className="flex-column">
        <label>Електронна пошта</label>
      </div>
      <div className="inputForm">
        <img src={Email_icon} alt="google" width="20" height="20" />
        <input
          placeholder="Введіть свою електронну адресу:"
          className="input"
          type="text"
        />
      </div>

      <div className="flex-column">
        <label>Пароль</label>
      </div>
      <div className="inputForm">
        <HttpsRoundedIcon alt="google" width="20" height="20" />
        <input
          placeholder="Введіть ваш пароль: "
          className="input"
          type="password"
        />
      </div>

      <div className="flex-row">
        {/* <div>
          <input type="radio" />
          <label>Remember me</label>
        </div> */}
        <span className="span">Забули пароль?</span>
      </div>

      <button className="button-submit">Увійти</button>
      <p className="p">
        Немає облікового запису?{" "}
        <span
          className="span"
          onClick={() => {
            navigate("/register");
          }}
        >
          Зареєструватися
        </span>
      </p>
      <p className="p line">або</p>

      <div className="flex-row">
        <button className="btn apple">
          <img src={Apple_icon} alt="apple" width="25" height="25" />
          Продовжити через Apple
        </button>
        <button className="btn google">
          <img src={Facebook_icon} alt="google" width="20" height="20" />
          Продовжити через Facebook
        </button>
        <button className="btn google">
          <img src={Google_icon} alt="google" width="20" height="20" />
          Продовжити через Google
        </button>
      </div>
    </form>
  );
}

export default Login;
