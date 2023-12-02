import React, { useState, useCallback } from "react";
import Header from "./Header";
// import Filter from "components/Home/Filter";
import Map from "components/Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Autocomplete from "components/Autocomplete/Autocomplete";
import "./styles.css";

const MAPBOX_API_KEY = "AIzaSyC1WyifFfxQRJFTHCGeyKndlCWLHIKmpLo";

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092,
};

const MODES = {
  
}

const libraries = ["places"];

function ShowMap() {
  const [center, setCenter] = useState(defaultCenter);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPBOX_API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);
  return (
    <div>
      <Header />
      {/* <Filter /> */}
      <div className="addressSearchContainer">
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <button className="modeToggle">Set markers</button>
      </div>
      {isLoaded ? <Map center={center} /> : <h2>Loading</h2>}
    </div>
  );
}

export default ShowMap;
