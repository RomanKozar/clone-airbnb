import * as React from "react";
import MenuRoundedIcon from "../../assets/img/menu.svg";
import AccountCircleRoundedIcon from "../../assets/img/user_icon.png";

import { useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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

  const navigate = useNavigate();

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
        sx={{
          ".MuiPaper-root": {
            borderRadius: "1rem",
            marginTop: "0.5rem",
            border: "2px solid var(--theme)",
            boxShadow: "3px -2px 6px 0px rgba(0, 0, 0, 0.25) inset",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
          },
        }}
      >
        <MenuItem
          className="menu-items"
          onClick={() => {
            navigate("/register");
            handleClose();
          }}
        >
          Зареєструватися
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            navigate("/login");
            handleClose();
          }}
        >
          Увійти
        </MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100",
          }}
        />
        <MenuItem
          className="menu-items"
          onClick={() => {
            navigate("/premises");
            handleClose();
          }}
        >
          Запропонувати помешкання на Airbnb
        </MenuItem>
        <MenuItem
          className="menu-items"
          onClick={() => {
            navigate("/help");
            handleClose();
          }}
        >
          Довідковий центр
        </MenuItem>
      </Menu>
    </div>
  );
}
