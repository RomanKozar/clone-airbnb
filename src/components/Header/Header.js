import React, { Fragment } from "react";
import logo from "../../assets/img/logotip.png";
import LanguageIcon from "../../assets/img/Langues.svg";
import BasicMenu from "./ProfileMenu";
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from "../MobileSearchBar";
import SearchRoundedIcon from "../../assets/img/search.svg";

import { Outlet, useNavigate } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import { useSearch } from "./SearchContext";

import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";

import "./styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Header({ placeholder }) {
  const navigate = useNavigate();

  //Реалізація пошуку
  const {
    searchInput,
    setSearchInput,
    noOfGuests,
    setNoOfGuests,
    handleSelect,
    resetInput,
    search,
    selectionRange,
    handleClose,
  } = useSearch();

  // const [searchInput, setSearchInput] = useState("");
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  // const [noOfGuests, setNoOfGuests] = useState(1);

  // const handleSelect = (ranges) => {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // };

  // const resetInput = () => {
  //   setSearchInput("");
  // };

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: "selection",
  // };

  // const search = () => {
  //   navigate(
  //     `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&noOfGuests=${noOfGuests}`
  //   );
  // };

  return (
    <Fragment>
      <div className="navbar">
        <img
          src={logo}
          alt="logo"
          className="navbar-logo"
          onClick={() => {
            navigate("/");
            resetInput();
          }}
        />
        <div className="search-bar">
          <div className="search-text">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="search-text-2"
              type="text"
              placeholder={placeholder || "Почніть пошук"}
            />
          </div>
          <div className="search-icon-div">
            <img
              src={SearchRoundedIcon}
              alt="icon"
              className="search-icon"
              onClick={() => {
                search();
                handleClose();
              }}
            />
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
          <div
            className="airbnb-your-home"
            onClick={() => {
              navigate("/booking");
            }}
          >
            Мої бронювання
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
      <div className="data-search-bar">
        {searchInput && (
          <div className="date-range">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#F9C94F"]}
              onChange={handleSelect}
            />
            <div className="date-number-div">
              <h2 className="date-number">Кількість гостей</h2>
              <GroupAddRoundedIcon />

              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                className="date-number-input"
              />
            </div>
            <span className="underline"></span>
            <div className="data-range-div">
              <div onClick={resetInput} className="data-range-knop">
                Скасувати
              </div>
              <div
                onClick={() => {
                  search();
                  handleClose();
                }}
                className="data-range-knop"
              >
                Пошук
              </div>
            </div>
          </div>
        )}
      </div>

      <Outlet />
    </Fragment>
  );
}

export default Header;
