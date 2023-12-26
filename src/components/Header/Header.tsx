import React from "react";
import "./Header.css";
import icon from "../../image/icon.svg";

const Header = () => {
  return (
    <div>
      <div className="header_container">
        <hr className="divider" /> <h1 className="header_text">TO-DO LIST</h1>{" "}
        <hr className="divider" />
      </div>
      <div className="header_container">
        <hr className="divider_down" />{" "}
        <img className="icon" src={icon} alt="Icon" />{" "}
        <hr className="divider_down" />
      </div>
    </div>
  );
};

export default Header;
