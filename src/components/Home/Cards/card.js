import React, { useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Payment from "components/Pages/Payment";

function Card({ card }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleBooking = (index) => {
    setSelectedImageIndex(index);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
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
            <img
              src={src}
              alt="Error"
              className="card-img"
              onClick={() => handleBooking(i)} // Додати onClick, який передає індекс картинки
            />
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
            handleBooking(null); 
          }}
        >
          Забронювати
        </p>
      </p>

      {/* Відображення Popup, якщо showPopup === true */}
      {showPopup && (
        <Payment
          onClose={closePopup}
          selectedImageIndex={selectedImageIndex}
          cardData={card} // Передача об'єкта з даними картки
        />
      )}
    </div>
  );
}

export default Card;
