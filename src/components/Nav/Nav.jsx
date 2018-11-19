import "./Nav.css";
import React from "react";
import Search from "../Search/Search";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const Nav = props => {
  // Onclick toggles sidebar on/off
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
        <Search suggestions={[...props.contacts]} />
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
const mapStateToProps = state => ({
  contacts: state.contacts.contactList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
