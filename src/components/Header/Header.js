import React from "react";

import Form from "./Form";
import BgDarkImg from "../../images/bg-desktop-dark.jpg";
import BgLightImg from "../../images/bg-desktop-light.jpg";
import SunImg from "../../images/icon-sun.svg";
import MoonImg from "../../images/icon-moon.svg";
import "./Header.css";

const Header = ({ theme, toggler }) => {
  return (
    <div className="app__header">
      <img
        src={theme === "light" ? BgLightImg : BgDarkImg}
        alt=""
        className="app__header-img"
      />
      <div className="app__header-title">
        <div className="app__title">
          <h1 className="title">TODO</h1>
          <img
            src={theme === "light" ? MoonImg : SunImg}
            alt=""
            onClick={toggler}
            className="image"
          />
        </div>
      </div>
      <Form theme={theme} />
    </div>
  );
};

export default Header;
