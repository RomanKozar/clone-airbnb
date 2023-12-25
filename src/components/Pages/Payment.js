import React, { useState, useRef, useEffect } from "react";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { DateRangePicker } from "react-date-range";

import "./payment.css";

function Payment({ onClose }) {
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
              placeholder="Введіть своє ім'я:"
              className="input-input-pay"
              type="text"
            />
          </div>
          <div className="inputForm-pay">
            <input
              placeholder="Введіть своє прізвище:"
              className="input-input-pay"
              type="text"
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
