import "./Nav.css";
import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const Nav = props => {
  const toggleSidebar = payload => {
    props.toggleSidebar(payload);
  };
  return (
    <div className="nav__wrapper">
      <div className="nav__wrapper-left-item">
        <span>
          <i className="fas fa-bars" onClick={toggleSidebar} />
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
const mapDispatchToProps = dispatch => ({
  toggleSidebar: payload => {
    dispatch(ContactActions.toggleSidebar(payload));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(Nav);
