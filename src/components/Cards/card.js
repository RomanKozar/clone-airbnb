import React from "react";
import hotel from "../../assets/hotel/Фото 1.webp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import "./styles.css";

function Card() {
  return (
    <div className="card-box">
      <img src={hotel} alt="hotel" className="card-img" />
      <div className="card-info-flex">
        <h3 className="card-title">Makarska, Хорватія</h3>
        <div className="card-rating">
          <StarRateRoundedIcon style={{ color: "#FFC810" }} />
          <h4>4.88</h4>
        </div>
      </div>
      <p className="card-info-div">На відстані 902 кілометра</p>
      <p className="card-info-div">18-23 жовт.</p>
      <p className="card-info-div">
        <span style={{ color: "var(--black)", fontWeight: "600" }}>
          $949 ніч
        </span>
      </p>
    </div>
  );
}

export default Card;
