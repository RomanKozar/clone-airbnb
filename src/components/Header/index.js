import React from "react";

import "./styles.css";
import logo from "../../assets/img/logotip.png";
import SearchRoundedIcon from "../../assets/img/search.svg";
import LanguageIcon from "../../assets/img/Langues.svg";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";


function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Будь-куди</div>
        <div className="search-bar-text">Будь-який тиждень</div>
        <div className="search-bar-text2">Додайте гостей</div>
        <div className="search-icon-div">
          <img src={SearchRoundedIcon} alt="icon" className="search-icon" />
        </div>
      </div>
      <div className="profile-container">
        <div className="airbnb-your-home">
          {/* <Link to="/premises">Запропонувати помешкання на Airbnb</Link> */}
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
  );
}

export default Header;
