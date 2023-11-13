import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./login.css";

import Google_icon from "../../assets/img/google_icon.svg";
import Apple_icon from "../../assets/img/apple.svg";
import Facebook_icon from "../../assets/img/facebook_icon.svg";
import Email_icon from "../../assets/img/email.svg";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(\.*))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
          // const re =
          //   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\.*))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

          re.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;
        default:
        // Обробка неочікуваних випадків
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || maxLengthError || minLengthError || emailError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, maxLengthError, minLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    emailError,
    maxLengthError,
    inputValid,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
    setDirty(true);
  };

  // const onBlur = () => {
  //   setDirty(true);
  // };

  return {
    value,
    onChange,
    // onBlur,
    isDirty,
    ...valid,
  };
};

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  //Перевірка через Firebase
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //Перевірка валідації
  const emailValid = useInput("", {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });
  const passwordValid = useInput("", {
    isEmpty: true,
    minLength: 5,
    maxLength: 8,
  });

  return (
    <div>
      <div className="form">
        <div className="flex-column">
          <label>Електронна пошта</label>
        </div>
        <div className="flex-column-error">
          {emailValid.isDirty && emailValid.isEmpty && (
            <div style={{ color: "red" }}>Поле не може бути пустим</div>
          )}
          {emailValid.isDirty && emailValid.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
          {emailValid.isDirty && emailValid.emailError && (
            <div style={{ color: "red" }}>Некоректний email</div>
          )}
        </div>

        <div className="inputForm">
          <img src={Email_icon} alt="google" width="20" height="20" />

          <input
            onChange={(e) => {
              emailValid.onChange(e);
              setEmail(e.target.value);
            }}
            onBlur={emailValid.onBlur}
            value={emailValid.value}
            placeholder="Введіть свою електронну адресу:"
            className="input"
            type="text"
          />
        </div>

        <div className="flex-column">
          <label>Пароль</label>
        </div>
        <div className="flex-column-error">
          {passwordValid.isDirty && passwordValid.isEmpty && (
            <div style={{ color: "red" }}>Поле не може бути пустим</div>
          )}
          {passwordValid.isDirty && passwordValid.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
          {passwordValid.isDirty && passwordValid.maxLengthError && (
            <div style={{ color: "red" }}>Задовгий пароль</div>
          )}
        </div>
        <div className="inputForm">
          <HttpsRoundedIcon alt="google" width="20" height="20" />
          <input
            onChange={(e) => {
              passwordValid.onChange(e);
              setPass(e.target.value);
            }}
            onBlur={passwordValid.onBlur}
            value={passwordValid.value}
            placeholder="Введіть ваш пароль:"
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

        <button
          disabled={!emailValid.inputValid || !passwordValid.inputValid}
          className="button-submit"
          onClick={() => {
            handleLogin(email, pass);
          }}
        >
          Увійти
        </button>
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
            <img src={Facebook_icon} alt="facebook" width="20" height="20" />
            Продовжити через Facebook
          </button>
          <button className="btn google">
            <img src={Google_icon} alt="google" width="20" height="20" />
            Продовжити через Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
