import React from "react";
import List from "./List";
import { connect } from "react-redux";

const MainContact = props => {
  return (
    <div className="contact-view__wrapper">
      <h3>Contacts ({props.contacts.length})</h3>
      <List list={props.contacts} />
    </div>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.contactList
});

export default connect(
  mapStateToProps,
  null
)(MainContact);
