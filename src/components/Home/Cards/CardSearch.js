import React, { useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Payment from "components/Pages/Payment";

function CardSearch({ itemcard }) {
  const [showPopup, setShowPopup] = useState(false); // Стан для відображення вспливаючого вікна

  const handleBooking = () => {
    setShowPopup(true); // Показати вспливаюче вікно після бронювання
  };

  const closePopup = () => {
    setShowPopup(false); // Закрити вспливаюче вікно
  };
  return (
    <div className="searchResult">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="searchResult__swiperheart"
      >
        {itemcard.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} alt="Error" className="searchResult__heart" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="searchResult__info">
        <div className="searchResult_infoTop">
          <p>{itemcard.title}</p>
          <h3>{itemcard.desc}</h3>
          <p>_____</p>
          <p>{itemcard.data}</p>
          <p
            className="search-cerds-bron"
            onClick={() => {
              handleBooking();
            }}
          >
            Забронювати
          </p>
          {showPopup && <Payment onClose={closePopup} />}
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarRateRoundedIcon className="searchResult__star" />
            <p>
              <strong>{itemcard.rating}</strong>
            </p>
          </div>

          <div className="searchResult__price">
            <h2>{itemcard.price}$</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSearch;
