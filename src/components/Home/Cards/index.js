import React, { useState, useEffect } from "react";
import Card from "./card";
import { links } from "../../../assets/images-links";
import "./styles.css";
import Filtration from "../Filter/Filtration";
import axios from "axios";

function Cards() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const fetchData = (category) => {
    let url = "http://localhost:3001/cards";

    if (category !== 0) {
      url = `http://localhost:3001/cards?category=${category - 1}`;
    }

    axios
      .get(url)
      .then((response) => {
        setSortedList(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання даних з сервера: ", error);
      });
  };

  const handleCategoryClick = (index) => {
    if (selectedCategory === index) {
      setSelectedCategory(0); // Додаємо 0 для скидання категорії
    } else {
      setSelectedCategory(index);
    }
  };

  return (
    <div className="cards-container">
      <div className="filter-div">
        {links.map((dataFrom, i) => (
          <div
            key={i}
            className={`links-box ${
              selectedCategory === i ? "selected-box" : ""
            }`}
            onClick={() => handleCategoryClick(i)}
          >
            <img alt="Cat" src={dataFrom.imgSrc} className="links-img" />
            <p className="links-label">{dataFrom.label}</p>
          </div>
        ))}
      </div>
      <div className="filter-cards-flex">
        <Filtration />
      </div>
      <div className="cards-flex">
        {sortedList.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
