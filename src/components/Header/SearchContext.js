import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const setSearchData = (data) => {
    setSearchInput(data.searchInput);
    setStartDate(data.startDate);
    setEndDate(data.endDate);
    setNoOfGuests(data.noOfGuests);
  };

  const searchParams = {
    searchInput,
    startDate,
    endDate,
    noOfGuests,
    setSearchData,
  };

  return (
    <SearchContext.Provider value={searchParams}>
      {children}
    </SearchContext.Provider>
  );
}