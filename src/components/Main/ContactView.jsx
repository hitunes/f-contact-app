import "./ContactView.css";
import React from "react";
import { connect } from "react-redux";
import SideBar from "../Aside/SideBar";
import MainContact from "./MainContact";
import StarredContact from "./StarredContact";

const ContactView = props => {
  let contactViewMain = props.sidebar ? "display-fw" : "display-hw";
  return (
    <div className="contact-view">
      <SideBar />
      <div className={contactViewMain}>
        <StarredContact />
        <MainContact />
      </div>
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
