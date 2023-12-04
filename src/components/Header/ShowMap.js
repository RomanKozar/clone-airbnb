import React, { useState, useCallback, useEffect } from "react";
import Header from "./Header";
// import Filter from "components/Home/Filter";
import Map from "components/Map/Map";
import { MODES } from "../Map/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import Autocomplete from "components/Autocomplete/Autocomplete";
import { getBrowserLocation } from "../../utils/geo";
import "./styles.css";

const MAPBOX_API_KEY = "AIzaSyC1WyifFfxQRJFTHCGeyKndlCWLHIKmpLo";

const defaultCenter = {
  lat: 51.509865,
  lng: -0.118092,
};

const libraries = ["places"];

function ShowMap() {
  const [center, setCenter] = useState(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: MAPBOX_API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
    console.log(mode);
  }, [mode]);

  const onMarkerAdd = useCallback(
    (coordinates) => {
      setMarkers([...markers, coordinates]);
    },
    [markers]
  );

  const clear = useCallback(() => {
    setMarkers([]);
  }, []);

  useEffect(() => {
    getBrowserLocation()
      .then((curLoc) => {
        setCenter(curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
  }, []);

  return (
    <div>
      <Header />
      {/* <Filter /> */}
      <div className="addressSearchContainer">
        <Autocomplete isLoaded={isLoaded} onSelect={onPlaceSelect} />
        <button className="modeToggle" onClick={toggleMode}>
          Set markers
        </button>
        <button className="modeToggle" onClick={clear}>
          Clear
        </button>
      </div>
      {isLoaded ? (
        <Map
          center={center}
          mode={mode}
          markers={markers}
          onMarkerAdd={onMarkerAdd}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default ShowMap;
