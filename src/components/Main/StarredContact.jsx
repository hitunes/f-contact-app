import React from "react";
import StarredList from "./StarredList";
import { connect } from "react-redux";

const StarredContact = props => {
  return (
    <div className="contact-view__wrapper">
      <h3>Starred Contacts ({props.contacts.length})</h3>
      <StarredList list={props.contacts} />
    </div>
  );
};
const mapStateToProps = state => ({
  contacts: state.contacts.starredList
});

export default connect(
  mapStateToProps,
  null
)(StarredContact);
