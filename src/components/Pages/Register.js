import app from "../../firebase";
import Google_icon from "../../assets/img/google_icon.svg";
import Github_icon from "../../assets/img/github_icon.svg";
import Email_icon from "../../assets/img/email.svg";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Facebook_icon from "../../assets/img/facebook_icon.svg";
import Header from "../Header/Header";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import "./register.css";

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

//Перевірка чи такий email вже існує
// async function checkIfEmailExists(email) {
//   const auth = getAuth(app);
//   try {
//     const methods = await fetchSignInMethodsForEmail(auth, email);
//     return methods && methods.length > 0;
//   } catch (error) {
//     console.error("Error checking email:", error);
//     return false;
//   }
// }

function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Вход через email і пароль
  const handleRegister = async (email, password, firstName, lastName) => {
    try {
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const db = getDatabase(app);
      const usersRef = ref(db, "users/" + user.uid);

      await set(usersRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        id: user.uid,
        token: user.accessToken,
      });

      dispatch(
        setUser({
          firstName: firstName,
          lastName: lastName,
          email: email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Цей email вже зареєстрований");
        // Тут ви можете відобразити повідомлення користувачеві про те, що електронний лист вже використовується
      } else {
        console.error(error);
        alert("Помилка реєстрації");
      }
    }
  };

  // Функція для реєстрації через Google
  const handleGoogleRegister = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const db = getDatabase(app);
      const usersRef = ref(db, "users/" + user.uid);

      set(usersRef, {
        firstName: "Реєстрація через Google",
        lastName: "",
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      })
        .then(() => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          console.error("Помилка оновлення даних користувача: ", error);
        });
    } catch (error) {
      console.error(error);
      alert("Помилка реєстрації через Google");
    }
  };

  // Функція для входу через Facebook
  const handleFacebookRegister = async () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const db = getDatabase(app);
      const usersRef = ref(db, "users/" + user.uid);

      set(usersRef, {
        firstName: "Реєстрація через Facebook",
        lastName: "",
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      })
        .then(() => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          console.error("Помилка оновлення даних користувача: ", error);
        });
    } catch (error) {
      console.error(error);
      alert("Помилка реєстрації через Facebook");
    }
  };

  // Функція для входу через Github
  const handleGithubRegister = async () => {
    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const db = getDatabase(app);
      const usersRef = ref(db, "users/" + user.uid);

      set(usersRef, {
        firstName: "Реєстрація через GitHub",
        lastName: "",
        email: user.email,
        id: user.uid,
        token: user.accessToken,
      })
        .then(() => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          console.error("Помилка оновлення даних користувача: ", error);
        });
    } catch (error) {
      console.error(error);
      alert("Помилка реєстрації через GitHub");
    }
  };

  //Перевірка через Firebase
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const firstNameValid = useInput("", { isEmpty: true, minLength: 3 });
  const lastNameValid = useInput("", { isEmpty: true, minLength: 2 });
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
    <>
      <Header />
      <div className="form">
        <div className="inputForm">
          <AccountCircleOutlinedIcon alt="google" width="20" height="20" />
          <input
            placeholder="Введіть своє ім'я:"
            className="input-input"
            type="text"
            value={firstNameValid.value}
            onChange={(e) => {
              firstNameValid.onChange(e);
              setLastName(e.target.value);
            }}
          />
          <div className="flex-column-error">
            {firstNameValid.isDirty && firstNameValid.minLengthError && (
              <div style={{ color: "red" }}>Замала довжина</div>
            )}
          </div>
        </div>

        <div className="inputForm">
          <AccountCircleRoundedIcon alt="google" width="20" height="20" />
          <input
            placeholder="Введіть своє прізвище:"
            className="input-input"
            type="text"
            value={lastNameValid.value}
            onChange={(e) => {
              lastNameValid.onChange(e);
              setFirstName(e.target.value);
            }}
          />
          <div className="flex-column-error">
            {lastNameValid.isDirty && lastNameValid.minLengthError && (
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
            className="input-input"
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
            className="input-input"
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
            confirmPassword.isDirty && !confirmPassword.matches
              ? "hasError"
              : ""
          }`}
        >
          <LockOpenRoundedIcon width="20" height="20" />
          <input
            placeholder="Повторіть ваш пароль:"
            className="input-input"
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
            !firstNameValid.inputValid ||
            !lastNameValid.inputValid ||
            !emailValid.inputValid ||
            !passwordValid.inputValid ||
            !confirmPassword.inputValid ||
            !confirmPassword.matches
          }
          className="button-submit"
          onClick={() => {
            handleRegister(email, pass, firstName, lastName);
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
    </>
  );
}

export default Register;
