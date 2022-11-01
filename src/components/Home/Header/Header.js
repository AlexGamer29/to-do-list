import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-info">
        <div className="header__title">
          <div className="header__title-primary">
            <p>
              Utilize to do list to plan your life and oversee the work of your team
            </p>
          </div>
          <div className="header__title-secondary">
            <p>
              People organize their tasks, lists and manage their team’s
              projects with todoList
            </p>
          </div>
        </div>
        <div className="app__header-img">
          <img
            src={"https://www.any.do/v5/images/home/hero-image.webp"}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
