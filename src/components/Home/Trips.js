import React from "react";
import "./styles.css";

function Trips() {
  return (
    <div>
      <div>
        <h3 className="trips-div">Ідеї для майбутніх поїздок</h3>
        <div className="trips-categor">
          <p>Популярні</p>
          <p>Мистецтво і культура</p>
          <p>Відпочинок на відкритому повітрі</p>
          <p>Гори</p>
          <p>Пляж</p>
          <p>Категорії</p>
          <p>Чим зайнятися</p>
        </div>
        <div>
          <h5>Canmore</h5>
          <p>Оренда помешкань</p>
        </div>
      </div>
    </div>
  );
}

export default Trips;
