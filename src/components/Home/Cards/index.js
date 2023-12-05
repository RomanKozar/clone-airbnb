import React, { useState } from "react";
import Card from "./card";
import { links } from "../../../assets/images-links";

import "./styles.css";

function Cards({ list }) {
  const [selectedCategory, setSelectedCategory] = useState(0); 

  const handleCategoryClick = (index) => {
    if (selectedCategory === index) {
      setSelectedCategory(null); 
    } else {
      setSelectedCategory(index); 
    }
  };

  const resetCategory = () => {
    setSelectedCategory(0); 
  };

  return (
    <div className="cards-container">
      <div className="filter-div">
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${
              selectedCategory === i ? "selected-box" : ""
            }`}
            onClick={() => (i === 0 ? resetCategory() : handleCategoryClick(i))}
          >
            <img alt="Cat" src={item.imgSrc} className="links-img" />
            <p className="links-label">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="cards-flex">
        {/* Тут відображення карток за вибраною категорією */}
        {selectedCategory !== null
          ? list
              .filter((card) =>
                selectedCategory === 0
                  ? true
                  : card.category === (selectedCategory - 1).toString()
              )
              .map((card, i) => <Card card={card} key={i} />)
          : list.map((card, i) => <Card card={card} key={i} />)}
      </div>
    </div>
  );
}

export default Cards;
