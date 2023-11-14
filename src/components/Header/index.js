import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

import "./styles.css";
import logo from "../../assets/img/logotip.png";
import SearchRoundedIcon from "../../assets/img/search.svg";
import LanguageIcon from "../../assets/img/Langues.svg";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";

function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcom</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Fragment>
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="search-bar">
          <div className="search-bar-text">Будь-куди</div>
          <div className="search-bar-text">Будь-який тиждень</div>
          <div className="search-bar-text2">Додайте гостей</div>
          <div className="search-icon-div">
            <img src={SearchRoundedIcon} alt="icon" className="search-icon" />
          </div>
        </div>
        <div className="profile-container">
          <div
            className="airbnb-your-home"
            onClick={() => {
              navigate("/premises");
            }}
          >
            Запропонувати помешкання на Airbnb
          </div>
          <div className="global-div">
            <img
              src={LanguageIcon}
              alt="laeng"
              className="language-icon"
              sx={{ fontSize: "1.3rem" }}
            />
          </div>
          <div className="profile-div">
            <BasicMenu />
          </div>
        </div>
        <MobileSearchBar />
        <SimpleBottomNavigation />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Header;
