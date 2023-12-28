import React, { useState, useRef, useEffect } from "react";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { DateRangePicker } from "react-date-range";

import "./payment.css";

import axios from "axios";

export const sendBookingData = async (bookingData) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/bookings",
      bookingData
    );
    return response.data;
  } catch (error) {
    console.error(
      "Помилка при відправленні даних бронювання на сервер: ",
      error
    );
    throw new Error("Помилка при відправленні даних бронювання на сервер");
  }
};

function Payment({ onClose, cardData }) {
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const modalRef = useRef(null);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleBookingConfirmation = () => {
    const bookingData = {
      startDate: startDate,
      endDate: endDate,
      noOfGuests: noOfGuests,
      title: cardData.title,
      imgSrc: cardData.imgSrc,
      rating: cardData.rating,
      category: cardData.category,
      desc: cardData.desc,
      price: cardData.price,
      data: cardData.data,
      firstName: firstName,
      lastName: lastName,
    };

    sendBookingData(bookingData)
      .then((response) => {
        console.log("Дані успішно відправлено на сервер:", response);
        onClose();
      })
      .catch((error) => {
        console.error("Помилка відправлення даних на сервер:", error);
      });
  };

  return (
    <div
      className="modul"
      // onClick={() => {
      //   onClose();
      // }}
    >
      <div ref={modalRef} className="form-pay">
        <div className="popup-content">
          <div className="popup-close" onClick={onClose}>
            <CloseRoundedIcon />
          </div>
          <div className="inputForm-pay">
            <input
              placeholder="Введіть своє ім'я"
              className="input-input-pay"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputForm-pay">
            <input
              placeholder="Введіть своє прізвище"
              className="input-input-pay"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputForm-pay">
            <input
              placeholder="Введіть свою електронну адресу:"
              className="input-input-pay"
              type="text"
            />
          </div>
          <div className="date-range-pay">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#F9C94F"]}
              onChange={handleSelect}
            />
            <div className="date-number-div-pay">
              <h2 className="date-number-pay">Кількість гостей</h2>
              <GroupAddRoundedIcon />

              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                className="date-number-input-pay"
              />
            </div>
            <span className="underline"></span>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="card-info-bron-pay"
              onClick={() => {
                onClose();
                handleBookingConfirmation();
              }}
            >
              Забронювати
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
