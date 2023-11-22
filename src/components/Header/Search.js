import React, { useState } from "react";
import SearchRoundedIcon from "../../assets/img/search.svg";
import "./styles.css";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="search-bar">
      <div className="search-text">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-text-2"
          type="text"
          placeholder="Start your search"
        />
      </div>
      <div className="search-icon-div">
        <img src={SearchRoundedIcon} alt="icon" className="search-icon" />
      </div>
      
    </div>
  );
}

export default Search;
