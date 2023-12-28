import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardsSearch from "../Home/Cards/indexSearch";
import Footer from "../Home/Footer";
import { useSearch } from "../Header/SearchContext";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios"; // Імпорт axios для виконання запитів

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
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/cards?title_like=${searchInput}`
        );
        setFilteredData(response.data);
        setSearched(true);
      } catch (error) {
        console.error("Помилка отримання даних з сервера: ", error);
        setSearched(false);
        setFilteredData([]);
      }
    };

    fetchData();
  }, [searchInput]);

  return searched && filteredData.length > 0 ? (
    <div>
      <Header
        placeholder={`${searchInput} | ${range} | ${noOfGuests} гостей`}
      />
      <div className="searchPage">
        <CardsSearch list={filteredData} />
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
