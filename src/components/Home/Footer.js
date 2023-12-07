import React from "react";
import Trips from "./Trips";
import LanguageIcon from "../../assets/img/Langues.svg";
import FacebookIcon from "../../assets/img/facebook.svg";
import InstagramIcon from "../../assets/img/instagram.png";
import TelegramIcon from "../../assets/img/telegram.png";

import "./styles.css";

function Footer() {
  return (
    <div>
      <Trips />
      <div className="footer-div">
        <div className="name-div">
          <h5 className="name-h">Підтримка</h5>
          <p className="name-p">Довідковий центр</p>
          <p className="name-p">AirCover</p>
          <p className="name-p">Протидія дискримінації</p>
          <p className="name-p">Підтримка людей з інвалідністю</p>
          <p className="name-p">Варіанти скасування бронювань</p>
          <p className="name-p">Надіслати скаргу від сусідів</p>
        </div>

        <div className="name-div">
          <h5 className="name-h">Прийом гостей</h5>
          <p className="name-p">Перетворити помешкання на Airbnb</p>
          <p className="name-p">AirCover для господарів</p>
          <p className="name-p">Ресурси про прийом гостей</p>
          <p className="name-p">Форум спільноти</p>
          <p className="name-p">Відповідальний прийом гостей</p>
        </div>

        <div className="name-div">
          <h5 className="name-h">Airbnb</h5>
          <p className="name-p">Новини</p>
          <p className="name-p">Нові функції</p>
          <p className="name-p">Вакансії</p>
          <p className="name-p">Інвестори</p>
          <p className="name-p">Тимчасове житло від Airbnb.org</p>
        </div>

        <div className="name-div">
          <h5 className="name-h">Компанія</h5>
          <p className="name-p">Про Clone-Airbnb</p>
          <p className="name-p">Партнерська мережа</p>
          <p className="name-p">Реферальна програма</p>
          <p className="name-p">Код купона</p>
          <p className="name-p">Стати дописувачем</p>
          <p className="name-p">Запитати цінову пропозицію</p>
        </div>
      </div>
      <div className="footer-bottom">
        <h6 className="icon-container">
          © 2023 Airbnb, Inc. | Конфіденційність | Умови | Мапа сайту
        </h6>
        <div className="icon-container">
          <img
            src={LanguageIcon}
            alt="laeng"
            className="language-icon-footer"
          />
          <h6 className="name-p">Українська(UA) </h6>
          <h6 className="name-p">| $USD</h6>
          <img
            src={FacebookIcon}
            alt="laeng"
            className="language-icon-footer"
          />
          <img
            src={InstagramIcon}
            alt="laeng"
            className="language-icon-footer"
          />
          <img
            src={TelegramIcon}
            alt="laeng"
            className="language-icon-footer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
