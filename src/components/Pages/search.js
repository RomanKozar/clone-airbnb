import React from "react";
import "./search.css";
import Footer from "../Home/Footer";
import { useSearch } from "../Header/SearchContext";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import Header from "../Header/Header";
import CardsSearch from "../Home/Cards/indexSearch";
import Map from "../Map/Map";
import { list } from "../../assets/cards-list";

function Search() {
  const { startDate, endDate, noOfGuests } = useSearch();
  const { searchInput } = useParams();

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${searchInput} | ${range} | ${noOfGuests} guests`}
      />
      <div className="searchPage">
        <div className="searchPage__info">
          {/* <div class="bg-red-500 text-white p-4">Hello, Tailwind!</div> */}
          <p className="text-xs">
            300 + Stays -{range}- for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {searchInput}
          </h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3
          text-gray-800 whitespace-nowrap"
          >
            <p
              className="px-4 py-2 border rounded-full cursor-pointer 
            hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
            >
              Cancellation Flexibility
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer 
            hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
            >
              Type of Place
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer 
            hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
            >
              Price
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer 
            hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
            >
              Rooms and Beds
            </p>
            <p
              className="px-4 py-2 border rounded-full cursor-pointer 
            hover:shadow-lg active:scale-95 active:bg-gray-100
            transition transform duration-100 ease-out"
            >
              More filters
            </p>
          </div>
          <div>
            <CardsSearch list={list} />
          </div>
        </div>
        <div>
          <Map />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Search;
