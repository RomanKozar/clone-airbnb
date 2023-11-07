import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import Google_icon from "../../assets/img/google_icon.svg";
import Apple_icon from "../../assets/img/apple.svg";
import Email_icon from "../../assets/img/email.svg";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Facebook_icon from "../../assets/img/facebook_icon.svg";

function Register() {
  const navigate = useNavigate();
  return (
    <form className="form">
      <div className="inputForm">
        <AccountCircleOutlinedIcon alt="google" width="20" height="20" />
        <input placeholder="Введіть своє ім'я:" className="input" type="text" />
      </div>

      <div className="inputForm">
        <AccountCircleRoundedIcon alt="google" width="20" height="20" />
        <input
          placeholder="Введіть своє прізвище:"
          className="input"
          type="password"
        />
      </div>
      <div className="inputForm">
        <img src={Email_icon} alt="google" width="20" height="20" />
        <input
          placeholder="Введіть свою електронну адресу:"
          className="input"
          type="password"
        />
      </div>
      <div className="inputForm">
        <HttpsRoundedIcon width="20" height="20" />
        <input
          placeholder="Введіть ваш пароль:"
          className="input"
          type="password"
        />
      </div>
      <div className="inputForm">
        <LockOpenRoundedIcon width="20" height="20" />
        <input
          placeholder="Повторіть ваш пароль:"
          className="input"
          type="password"
        />
      </div>

      <button className="button-submit">Зареєструватися</button>
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

export default Register;
