import React from "react";
import Card from "./card";
import { list } from "../../assets/cards-list";

import "./styles.css";

function Cards() {
  return (
    <div className="cards-flex">
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Cards;
