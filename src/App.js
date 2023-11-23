import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Home from "./components/Home/home";
import PremisesAirbnb from "./components/Pages/PremisesAirbnb";
import Help from "./components/Pages/Help";
import Search from "components/Pages/search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/premises" element={<PremisesAirbnb />} />
          <Route path="/search" element={<Search />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
