import React from "react";
import { connect } from "react-redux";
import NewContactForm from "./NewContactForm";
import ModalLauncher from "./../Modal/ModalLauncher";
import * as ContactActions from "../../store/actions/actions";
import { Button } from "../Button/Button";

const NewContact = props => {
  const showModal = payload => {
    props.showNewContactModal(payload);
  };
  const hideModal = payload => {
    props.hideNewContactModal(payload);
  };
  const handleInputChange = e => {
    props.handleInputChange({ [e.target.name]: e.target.value });
  };
  const handleNewContactSubmit = value => {
    props.handleNewContactSubmit(value);
    props.hideNewContactModal(value);
  };
  return (
    <React.Fragment>
      <ModalLauncher show={props.newContact.showNewContactModal}>
        <div className="modal-title">
          <div>Create Contact</div>
          <div onClick={hideModal}>
            <i className="fas fa-times" />
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-body--icon-row">
            <i className="far fa-grin-tongue contact-avatar" />
            <i className="fas fa-folder-plus" />
            <i className="fas fa-envelope" />
            <i className="fas fa-phone" />
            <i className="fas fa-file-alt" />
          </div>
          <NewContactForm
            handleNewContactSubmit={handleNewContactSubmit}
            handleInputChange={handleInputChange}
          />
        </div>
        <div className="modal-footer">
          <Button onClick={hideModal}>Cancel</Button>
          <Button onClick={handleNewContactSubmit}>Save</Button>
        </div>
      </ModalLauncher>
      {props.contacts.contactList.length === 0 ? (
        <span />
      ) : (
        <div onClick={showModal} className="App-new-contact-icon">
          <i className="fas fa-plus" />
        </div>
      )}
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  showNewContactModal: payload => {
    dispatch(ContactActions.showNewContactModal(payload));
  },
  hideNewContactModal: payload => {
    dispatch(ContactActions.hideNewContactModal(payload));
  },
  handleInputChange: payload => {
    dispatch(ContactActions.handleInputChange(payload));
  },
  handleNewContactSubmit: payload => {
    dispatch(ContactActions.handleNewContactSubmit(payload));
  }
});
const mapStateToProps = state => ({
  newContact: state.newContact,
  contacts: state.contacts
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewContact);
