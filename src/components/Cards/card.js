import React from "react";
import hotel from "../../assets/hotel/Фото 1.webp";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation } from "swiper";

import "./styles.css";

function Card() {
  return (
    <div className="card-box">
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        style={{ height: "300px", width: "300px", color: "#fff" }}
        bulletClass="background-color:#fff;"
      >
        <SwiperSlide>
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lpibo-ew-1656015868.jpg"
            alt="Error"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "300px",
              borderRadius: "1rem",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.travelandleisure.com/thmb/BJupPeakYV7RY_vQQnmvrKA17LU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/soneva-jani-suns"
            alt="Error"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "300px",
              borderRadius: "1rem",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2020/04/The-Muraka-Undersea-Bedroom-scaled.jpg"
            alt="Error"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "300px",
              borderRadius: "1rem",
            }}
          />
        </SwiperSlide>
      </Swiper> */}

      <img src={hotel} alt="hotel" className="card-img" />
      <div className="card-info-flex">
        <h3 className="card-title">Сасово (Циганське поселення)</h3>
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
