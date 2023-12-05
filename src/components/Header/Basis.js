import React from "react";
import Footer from "../Home/Footer";
import Cards from "../Home/Cards";
import Header from "./Header";
// import Filter from "../Home/Filter";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import { list } from "../../assets/cards-list";

import "./styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Basis() {
  const dispatch = useDispatch();

  const { isAuth, email, id } = useAuth();

  const navigate = useNavigate();

  return isAuth && id ? (
    <div>
      <h1>Welcom</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <>
      <Header />
      {/* <Filter /> */}
      <Cards list={list} />
      <div className="showmap-div">
        <button
          className="showmap-but"
          onClick={() => {
            navigate("/showmap");
          }}
        >
          Показати карту
          <MapTwoToneIcon />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Basis;
