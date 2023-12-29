import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer";
import Cards from "../Home/Cards";
import Header from "./Header";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import axios from "axios"; 
import "./styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Basis() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, email, id } = useAuth();
  const [cardsFromServer, setCardsFromServer] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cards")
      .then((response) => {
        setCardsFromServer(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання даних з сервера: ", error);
      });
  }, []);

  return isAuth && id ? (
    <>
      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
      <Header />
      <Cards list={cardsFromServer} /> 
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
  ) : (
    <>
      <Header />
      <Cards list={cardsFromServer} /> 
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
