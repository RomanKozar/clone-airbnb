import "./App.css";
import { list } from "./assets/cards-list";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Cards list={list} />} />
          <Route index element={<Filter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
