import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "../../assets/img/menu.svg";
import AccountCircleRoundedIcon from "../../assets/img/user_icon.png";
import "./styles.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <img src={MenuRoundedIcon} alt="icon" className="profile-menu-icon" />
        <img
          src={AccountCircleRoundedIcon}
          alt="icon"
          className="profile-menu-user"
        />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Зареєструватися</MenuItem>
        <MenuItem onClick={handleClose}>Увійти</MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100",
          }}
        />
        <MenuItem onClick={handleClose}>
          Запропонувати помешкання на Airbnb
        </MenuItem>
        <MenuItem onClick={handleClose}>Довідковий центр</MenuItem>
      </Menu>
    </div>
  );
}
