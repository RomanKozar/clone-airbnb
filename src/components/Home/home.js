import React from "react";
import Cards from "./Cards"; // Переконайтеся, що правильно вказали шлях до компонента Cards
import Filter from "./Filter"; // Переконайтеся, що правильно вказали шлях до компонента Filter
import { list } from "../../assets/cards-list";

function Home() {
  return (
    <div>
      <Filter />
      <Cards list={list} />
    </div>
  );
}

export default Home;
