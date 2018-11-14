import "./SideBar.css";
import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const Sidebar = props => {
  let sidebarClass = props.sidebar.sidebarOpen ? "sidebar open" : "sidebar";
  const activeSidebarLink = payload => {
    props.activeSidebarLink(payload);
  };
  return (
    <div className={sidebarClass}>
      <ul className="sidebar__ul">
        <li
          onClick={() => activeSidebarLink(0)}
          className={props.sidebar.active === 0 ? "link-selected" : ""}
        >
          <i className="far fa-address-book" />
          Contacts ({props.contacts.length})
        </li>
        <div className="divider" />
        <li
          onClick={() => activeSidebarLink(1)}
          className={props.sidebar.active === 1 ? "link-selected" : ""}
        >
          <i className="far fa-question-circle" />
          Settings
        </li>
        <li
          onClick={() => activeSidebarLink(2)}
          className={props.sidebar.active === 2 ? "link-selected" : ""}
        >
          <i className="fas fa-cog" />
          Help
        </li>
      </ul>
    </div>
  );
};
const mapStateToProps = state => ({
  sidebar: state.sidebar,
  contacts: state.contacts.contactList
});
const mapDispatchToProps = dispatch => ({
  activeSidebarLink: payload => {
    dispatch(ContactActions.activeSidebarLink(payload));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
