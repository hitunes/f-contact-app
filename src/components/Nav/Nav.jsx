import "./Nav.css";
import React from "react";

const Nav = props => {
  return (
    <div className="nav__wrapper">
      <div className="nav__wrapper-left-item">
        <span>
          <i class="fas fa-bars" />
        </span>
        <h2>fluid Contact</h2>
      </div>
      <div className="nav__wrapper-right-item">
        <input type="text" placeholder="Seach" />
        <div className="nav__wrapper-right-item--image">
          <img src="/images/profile-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
