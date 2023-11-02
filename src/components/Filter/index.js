import React from "react";
import "./styles.css";

import { ReactComponent as svg1 } from "../../assets/img/city.svg";

const links = [svg1];

function Filter() {
  return (
    <div className="filter-div">
      {links.map((SvgComponent, i) => (
        <SvgComponent key={i} />
      ))}
    </div>
  );
}

export default Filter;
