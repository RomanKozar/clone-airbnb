import React from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import { list } from "../../assets/cards-list";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Filter />
      <Cards list={list} />
      <Footer />
    </div>
  );
}

export default Home;
