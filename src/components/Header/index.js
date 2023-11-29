import React from "react";

import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { removeUser } from "../store/slices/userSlice";
import Filter from "../Home/Filter";
import { list } from "../../assets/cards-list";
import Footer from "../Home/Footer";
import Cards from "../Home/Cards";

import "./styles.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import Header from "./Header";

function Basis() {
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
    <>
      <Header />
      <Filter />
      <Cards list={list} />
      <Footer />
    </>
  );
}

export default Basis;
