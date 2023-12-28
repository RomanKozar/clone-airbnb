import React, { useState, useEffect } from "react";
import Card from "./card";
import { links } from "../../../assets/images-links";
import "./styles.css";
import Filtration from "../Filter/Filtration";
import axios from "axios";

function Cards() {
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sortedList, setSortedList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cards")
      .then((response) => {
        setDataFromAPI(response.data);
        setSortedList(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання даних з сервера: ", error);
      });
  }, []);

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

  const sortByPrice = (order) => {
    axios
      .get(`http://localhost:3001/cards?_sort=price&_order=${order}`)
      .then((response) => {
        setSortedList(response.data);
      })
      .catch((error) => {
        console.error("Помилка сортування за ціною: ", error);
      });
  };

  const sortByAlphabet = (order) => {
    axios
      .get(`http://localhost:3001/cards?_sort=title&_order=${order}`)
      .then((response) => {
        setSortedList(response.data);
      })
      .catch((error) => {
        console.error("Помилка сортування за алфавітом: ", error);
      });
  };

  const sortByRating = (order) => {
    axios
      .get(`http://localhost:3001/cards?_sort=rating&_order=${order}`)
      .then((response) => {
        setSortedList(response.data);
      })
      .catch((error) => {
        console.error("Помилка сортування за рейтингом: ", error);
      });
  };

  return (
    <div className="cards-container">
      <div className="filter-div">
        {links.map((dataFromAPI, i) => (
          <div
            key={i}
            className={`links-box ${
              selectedCategory === i ? "selected-box" : ""
            }`}
            onClick={() => (i === 0 ? resetCategory() : handleCategoryClick(i))}
          >
            <img alt="Cat" src={dataFromAPI.imgSrc} className="links-img" />
            <p className="links-label">{dataFromAPI.label}</p>
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
