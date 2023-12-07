import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";

import "./styles.css";

export default function Filtration({
  sortByPrice,
  sortByAlphabet,
  sortByRating,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortBy = (sortType, order) => {
    handleClose();
    switch (sortType) {
      case "alphabet":
        sortByAlphabet(order);
        break;
      case "price":
        sortByPrice(order);
        break;
      case "rating":
        sortByRating(order);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="button"
      >
        <FilterAltRoundedIcon style={{ width: "17px", height: "17px" }} />
        Фільтрація
      </button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          onClick={() => handleSortBy("alphabet", "DESC")}
          className="button"
        >
          За алфавітом(DESC)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortBy("alphabet", "ASC")}
          className="button"
        >
          За алфавітом(ASC)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortBy("price", "DESC")}
          className="button"
        >
          За ціною(DESC)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortBy("price", "ASC")}
          className="button"
        >
          За ціною(ASC)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortBy("rating", "DESC")}
          className="button"
        >
          За рейтингом(DESC)
        </MenuItem>
        <MenuItem
          onClick={() => handleSortBy("rating", "ASC")}
          className="button"
        >
          За рейтингом(ASC)
        </MenuItem>
      </Menu>
    </div>
  );
}
