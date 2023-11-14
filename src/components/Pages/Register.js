import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import "./register.css";

import Google_icon from "../../assets/img/google_icon.svg";
import Github_icon from "../../assets/img/github_icon.svg";
import Email_icon from "../../assets/img/email.svg";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Facebook_icon from "../../assets/img/facebook_icon.svg";

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
// Додайте функцію порівняння паролів
const passwordsMatch = (passwordValid, confirmPassword) => {
  return passwordValid === confirmPassword;
};

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Вход через email і пароль
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  // Функція для реєстрації через Google
  const handleGoogleRegister = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Помилка реєстрації через Google");
    }
  };

  // Функція для входу через Facebook
  const handleFacebookRegister = async () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Помилка входу через Facebook");
    }
  };

  // Функція для входу через Github
  const handleGithubRegister = async () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Помилка входу через GitHub");
    }
  };

  //Перевірка через Firebase
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const firstName = useInput("", { isEmpty: true, minLength: 3 });
  const lastName = useInput("", { isEmpty: true, minLength: 2 });
  const emailValid = useInput("", {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });
  const passwordValid = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 10,
  });
  const confirmPassword = useInput("", { isEmpty: true });

  // Використайте функцію порівняння для визначення, чи паролі співпадають
  confirmPassword.matches = passwordsMatch(
    passwordValid.value,
    confirmPassword.value
  );
  return (
    <div className="form">
      <div className="inputForm">
        <AccountCircleOutlinedIcon alt="google" width="20" height="20" />
        <input
          placeholder="Введіть своє ім'я:"
          className="input"
          type="text"
          {...firstName}
        />
        <div className="flex-column-error">
          {firstName.isDirty && firstName.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
        </div>
      </div>

      <div className="inputForm">
        <AccountCircleRoundedIcon alt="google" width="20" height="20" />
        <input
          placeholder="Введіть своє прізвище:"
          className="input"
          type="text"
          {...lastName}
        />
        <div className="flex-column-error">
          {lastName.isDirty && lastName.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
        </div>
      </div>
      <div className="flex-column-error">
        {emailValid.isDirty && emailValid.isEmpty && (
          <div style={{ color: "red" }}>Поле не може бути пустим</div>
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
        <div className="flex-column-error">
          {emailValid.isDirty && emailValid.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
        </div>
      </div>
      <div className="flex-column-error">
        {passwordValid.isDirty && passwordValid.isEmpty && (
          <div style={{ color: "red" }}>Поле не може бути пустим</div>
        )}

        {passwordValid.isDirty && passwordValid.maxLengthError && (
          <div style={{ color: "red" }}>Задовгий пароль</div>
        )}
      </div>

      <div className="inputForm">
        <HttpsRoundedIcon width="20" height="20" />
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
        <div className="flex-column-error">
          {passwordValid.isDirty && passwordValid.minLengthError && (
            <div style={{ color: "red" }}>Замала довжина</div>
          )}
        </div>
      </div>
      <div
        className={`inputForm ${
          confirmPassword.isDirty && !confirmPassword.matches ? "hasError" : ""
        }`}
      >
        <LockOpenRoundedIcon width="20" height="20" />
        <input
          placeholder="Повторіть ваш пароль:"
          className="input"
          type="password"
          {...confirmPassword}
        />
        <div className="flex-column-error">
          {confirmPassword.isDirty && !confirmPassword.matches && (
            <div style={{ color: "red" }}>Паролі не співпадають</div>
          )}
        </div>
      </div>

      <button
        disabled={
          !firstName.inputValid ||
          !lastName.inputValid ||
          !emailValid.inputValid ||
          !passwordValid.inputValid ||
          !confirmPassword.inputValid ||
          !confirmPassword.matches
        }
        className="button-submit"
        onClick={() => {
          handleRegister(email, pass);
        }}
      >
        Зареєструватися
      </button>
      <p className="p line">або</p>

      <div className="flex-row">
        <button className="btn github" onClick={handleGithubRegister}>
          <img src={Github_icon} alt="apple" width="20" height="20" />
          Продовжити через GitHub
        </button>
        <button className="btn google" onClick={handleFacebookRegister}>
          <img src={Facebook_icon} alt="google" width="20" height="20" />
          Продовжити через Facebook
        </button>
        <button className="btn google" onClick={handleGoogleRegister}>
          <img src={Google_icon} alt="google" width="20" height="20" />
          Продовжити через Google
        </button>
      </div>
    </div>
  );
}

export default Register;
