import React from "react";
import Card from "./card";

import "./styles.css";

function Cards(props) {
    const { list } = props; // Деструктуризація з props
    return (
      <div className="cards-flex">
        {list.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
    );
  }
  

export default Cards;
