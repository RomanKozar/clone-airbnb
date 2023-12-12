import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import PremisesAirbnb from "./components/Pages/PremisesAirbnb";
import Help from "./components/Pages/Help";
import Search from "./components/Pages/search";
import Basis from "./components/Header/Basis";
import ShowMap from "./components/Header/ShowMap";
import MyBookings from "./components/Pages/MyBookings";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Basis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/premises" element={<PremisesAirbnb />} />
        <Route path="/search/:searchInput" element={<Search />} />
        <Route path="/showmap" element={<ShowMap />} />
        <Route path="/help" element={<Help />} />
        <Route path="/booking" element={<MyBookings />} />
      </Routes>
    </div>
  );
}

export default App;
