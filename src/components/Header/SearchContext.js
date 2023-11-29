import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };
  const handleClose = () => {
    setSearchInput(null);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = () => {
    navigate(`/search/${searchInput}`);
  };

  const contextValue = {
    searchInput,
    setSearchInput,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    noOfGuests,
    setNoOfGuests,
    handleSelect,
    resetInput,
    search,
    selectionRange,
    handleClose,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
