import React from "react";

import logo from "../../assets/img/logotip.png";
import "./styles.css";

function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar-logo" />
      <div className="search-bar">
        <div className="search-bar-text">Будь-куди</div>
        <div className="search-bar-text">Будь-який тиждень</div>
        <div className="search-bar-text2">Додайте гостей</div>
      </div>
      <div className="profile-container"></div>
    </div>
  );
}

export default Header;
