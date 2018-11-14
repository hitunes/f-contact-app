import "./ContactView.css";
import React from "react";
import { connect } from "react-redux";
import MainContact from "./MainContact";
import StarredContact from "./StarredContact";

const ContactView = props => {
  let contactViewMain = props.sidebar ? "display-fw" : "display-hw";
  return (
    <div className={`contact-view ${contactViewMain}`}>
      <StarredContact />
      <MainContact />
    </div>
  );
};
const mapStateToProps = state => ({
  sidebar: state.sidebar.sidebarOpen
});
export default connect(
  mapStateToProps,
  null
)(ContactView);
