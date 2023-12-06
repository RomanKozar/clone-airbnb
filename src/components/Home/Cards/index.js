import React, { useState, useEffect } from "react";
import Card from "./card";
import { links } from "../../../assets/images-links";
import "./styles.css";
import Filtration from "../Filter/Filtration";

function Cards({ list }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortedList, setSortedList] = useState(list);

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

  useEffect(() => {
    setSortedList(list);
  }, [list]);

  const sortByPrice = (order) => {
    const sorted = [...sortedList].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setSortedList(order === "ASC" ? sorted : sorted.reverse());
  };

  const sortByAlphabet = (order) => {
    const sorted = [...sortedList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedList(order === "ASC" ? sorted : sorted.reverse());
  };

  const sortByRating = (order) => {
    const sorted = [...sortedList].sort(
      (a, b) => parseFloat(a.rating.replace(",", ".")) - parseFloat(b.rating.replace(",", "."))
    );
    setSortedList(order === "ASC" ? sorted : sorted.reverse());
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
      <div className="filter-cards-flex">
        <Filtration
          sortByPrice={sortByPrice}
          sortByAlphabet={sortByAlphabet}
          sortByRating={sortByRating}
        />
      </div>
      <div className="cards-flex">
        {selectedCategory !== null
          ? sortedList
              .filter((card) =>
                selectedCategory === 0
                  ? true
                  : card.category === (selectedCategory - 1).toString()
              )
              .map((card, i) => <Card card={card} key={i} />)
          : sortedList.map((card, i) => <Card card={card} key={i} />)}
      </div>
    </div>
  );
}

export default Cards;
