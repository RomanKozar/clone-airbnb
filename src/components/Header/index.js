import React from "react";

import "./styles.css";
import logo from "../../assets/img/logotip.png";
import SearchRoundedIcon from "../../assets/img/search.svg";
import LanguageIcon from "../../assets/img/Langues.svg";

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
          Запропонувати помешкання на Airbnb
        </div>
        <div className="global-div">
          <img
            src={LanguageIcon}
            alt="laeng"
            className="language-icon"
            sx={{ fontSize: "1.5rem" }}
          />
        </div>
        <div className="profile-div">
          {/* <img src={LanguageIcon} alt="laeng" /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
