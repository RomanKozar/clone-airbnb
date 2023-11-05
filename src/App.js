import "./App.css";
import { list, list2 } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";

function App() {
  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Filter />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
}

export default App;
