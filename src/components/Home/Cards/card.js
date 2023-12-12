import React, { useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// import { useNavigate } from "react-router-dom";

import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Payment from "./components/Pages/Payment";

function Card({ card }) {
  // const navigate = useNavigate();
  // const [isBooked, setIsBooked] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // Стан для відображення вспливаючого вікна

  // const handleBooking = () => {
  //   if (!isBooked) {
  //     console.log(`Заброньовано: ${card.title}`);
  //     setIsBooked(true);
  //     setShowPopup(true); // Показати вспливаюче вікно після бронювання
  //   }
  // };
  const handleBooking = () => {
    setShowPopup(true); // Показати вспливаюче вікно після бронювання
  };

  const closePopup = () => {
    setShowPopup(false); // Закрити вспливаюче вікно
  };

  return (
    <div className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="Error" className="card-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon style={{ color: "#FFC810" }} />
          <h4>{card.rating}</h4>
        </div>
      </div>
      <p className="card-info-div">{card.desc}</p>
      <p className="card-info-div">{card.data}</p>
      <p className="card-info-div">
        <span style={{ color: "var(--black)", fontWeight: "600" }}>
          ${card.price} ніч
        </span>
        <p
          className="card-info-bron"
          onClick={() => {
            handleBooking();
          }}
        >
          Забронювати
        </p>
      </p>

      {/* Відображення Popup, якщо showPopup === true */}
      {showPopup && <Payment onClose={closePopup} />}
    </div>
  );
}

export default Card;
