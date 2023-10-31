import "./Header.css";

import cartEmptyImg from "../../img/air.svg";

function Header() {
  return (
    <div>
      <div>
        <div className="Name">
          <img src={cartEmptyImg} alt="Error" />
          <h2>airbnb</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
