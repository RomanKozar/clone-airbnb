import React from "react";
import "./search.css";
import Footer from "../Home/Footer";
import { useSearch } from "../Header/SearchContext"

function Search() {
  const { searchInput, startDate, endDate, noOfGuests } = useSearch();

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {/* <div class="bg-red-500 text-white p-4">Hello, Tailwind!</div> */}
          <p className="text-xs">300 + Stays for 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {searchInput}</h1>

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
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
