import React from "react";
import { Marker  } from "@react-google-maps/api";
import "./CurrentLocationMarker.css";

export const CurrentLocationMarker = ({ position }) => {
  return (
    <Marker
      position={position}
      label={{
        text: "255$",
        fontSize: "25px",
        color: "red",
      }}
    />
  );
};
