import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";

import "./styles.css";
import logo from "../../assets/img/logotip.png";

import LanguageIcon from "../../assets/img/Langues.svg";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import Search from "./Search";

function Header() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { isAuth, email, id } = useAuth();

  return isAuth && id ? (
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
        <Search />
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
