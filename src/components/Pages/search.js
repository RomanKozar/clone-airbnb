import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardsSearch from "../Home/Cards/indexSearch";
import Footer from "../Home/Footer";

import { useSearch } from "../Header/SearchContext";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { list } from "../../assets/cards-list";

import "./search.css";

function Search() {
  const { startDate, endDate, noOfGuests } = useSearch();
  const { searchInput } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(true);

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} до ${formattedEndDate}`;

  useEffect(() => {
    const searchByTitle = () => {
      const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredData(filteredList);
      setSearched(true);
    };

    searchByTitle();
  }, [searchInput]);

  return searched && filteredData.length > 0 ? (
    <div>
      <Header
        placeholder={`${searchInput} | ${range} | ${noOfGuests} гостей`}
      />
      <div className="searchPage">
        <div className="searchPage__info">
          <p>
            Перебування з - {range} - для {noOfGuests} гостей
          </p>
          <h1 className="search-trips">Ви знаходитеся в {searchInput}</h1>

          <div className="search-categor">
            <p>Гнучкість скасування</p>
            <p>Тип місця</p>
            <p>Ціна</p>
            <p>Кімнати та ліжка</p>
            <p>Більше фільтрів</p>
            <p>Рейтинг та відгуки</p>
            <p>Зручності</p>
            <p>Розташування</p>
            <p>Додаткові сервіси</p>
          </div>
          <div>
            <CardsSearch list={filteredData} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  ) : (
    <div>
      <Header />
      <h1 style={{ color: "red" }}>Нічого не знайдено</h1>
      <p>або</p>
      <h2>ви неправильно ввели назву</h2>
    </div>
  );
}

export default Search;
