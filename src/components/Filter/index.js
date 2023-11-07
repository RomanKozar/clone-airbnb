import "./styles.css";
import { links } from "../../assets/images-links";

function Filter() {
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className="links-box"
          onClick={() => {
            console.log("select", i);
            // Ось тут можна використовувати i, якщо потрібно індекс вибраного елемента
          }}
        >
          <img alt="Cat" src={item.imgSrc} className="links-img" />
          <p className="links-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
