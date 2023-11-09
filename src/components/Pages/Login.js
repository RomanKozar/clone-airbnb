import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  };

  const onBlur = () => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

function Login() {
  const navigate = useNavigate();

  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 5, maxLength: 8 });

  return (
    <div>
      <div className="form">
        <div className="flex-column">
          <label>Електронна пошта</label>
        </div>
        <div className="flex-column-error">
          {email.isDirty && email.isEmpty && (
            <div style={{ color: "red" }}>Поле не може бути пустим</div>
          )}
          {email.isDirty && email.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
          {email.isDirty && email.emailError && (
            <div style={{ color: "red" }}>Некоректний email</div>
          )}
        </div>

        <div className="inputForm">
          <img src={Email_icon} alt="google" width="20" height="20" />

          <input
            onChange={email.onChange}
            onBlur={email.onBlur}
            value={email.value}
            placeholder="Введіть свою електронну адресу:"
            className="input"
            type="text"
          />
        </div>

        <div className="flex-column">
          <label>Пароль</label>
        </div>
        <div className="flex-column-error">
          {password.isDirty && password.isEmpty && (
            <div style={{ color: "red" }}>Поле не може бути пустим</div>
          )}
          {password.isDirty && password.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
          {password.isDirty && password.maxLengthError && (
            <div style={{ color: "red" }}>Задовгий пароль</div>
          )}
        </div>
        <div className="inputForm">
          <HttpsRoundedIcon alt="google" width="20" height="20" />
          <input
            onChange={password.onChange}
            onBlur={password.onBlur}
            value={password.value}
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
          disabled={!email.inputValid || !password.inputValid}
          className="button-submit"
          onClick={() => {
            navigate("/");
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
