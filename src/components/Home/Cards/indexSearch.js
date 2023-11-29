import React from "react";
import CardSearch from "./CardSearch";

import "./styles.css";

function CardsSearch({ list }) {
  return (
    <div className="searchflex__itemcard">
      {list.map((itemcard, i) => (
        <CardSearch itemcard={itemcard} key={i} />
      ))}
    </div>
  );
}

export default CardsSearch;
