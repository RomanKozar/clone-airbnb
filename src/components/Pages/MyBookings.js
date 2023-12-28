import Header from "components/Header/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "../Pages/mybookings.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/bookings")
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Помилка отримання даних бронювань:", error);
      });
  }, []);

  const handleDeleteBooking = (id) => {
    axios
      .delete(`http://localhost:3001/bookings/${id}`)
      .then((response) => {
        // Об'єкт успішно видалено з бази даних
        // Оновити стан компоненту, щоб відобразити зміни
        const updatedBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(updatedBookings);
      })
      .catch((error) => {
        console.error("Помилка видалення об'єкта з сервера:", error);
      });
  };

  return (
    <div>
      <Header />
      <div className="cards-flex-boo">
        {bookings.map((booking, index) => (
          <div key={index} className="card-box">
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
              {booking.imgSrc.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt="Error" className="card-img" />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="card-info-flex">
              <h3 className="card-title">{booking.title}</h3>
              <div className="card-rating">
                <StarRateRoundedIcon style={{ color: "#FFC810" }} />
                <h4>{booking.rating}</h4>
              </div>
            </div>
            <p className="card-info-div">{booking.desc}</p>
            <p className="card-info-div">{booking.data}</p>
            <p className="card-info-div">
              <span style={{ color: "var(--black)", fontWeight: "700" }}>
                ${booking.price} ніч
              </span>
            </p>
            <p className="card-info-div">
              <span style={{ color: "var(--black)", fontWeight: "600" }}>
                {booking.firstName} {booking.lastName}
              </span>
            </p>
            <p className="card-info-div">
              <span style={{ color: "var(--black)", fontWeight: "600" }}>
                Гості {booking.noOfGuests}
              </span>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="card-info-bron-boo"
                onClick={() => {
                  handleDeleteBooking(booking.id);
                }}
              >
                Видалити
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;
