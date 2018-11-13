import React from "react";
import List from "./List";
import { connect } from "react-redux";

const MainContact = props => {
  return (
    <div className="contact-view__wrapper">
      <h4>Contacts ({props.contacts.length})</h4>
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
