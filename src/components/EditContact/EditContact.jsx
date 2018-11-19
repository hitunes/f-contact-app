import React from "react";
import { connect } from "react-redux";
import { Button } from "../Button/Button";
import EditContactForm from "./EditContactForm";
import ModalLauncher from "./../Modal/ModalLauncher";
import * as ContactActions from "../../store/actions/actions";

const EditContact = props => {
  // hide modal on click
  const hideModal = payload => {
    props.hideEditContactModal(payload);
  };
  // gets the value of edited input fields
  const handleEditInputChange = e => {
    props.handleEditInputChange(
      Object.assign(
        { [e.target.name]: e.target.value },
        { id: props.editContact.contactInfo.id }
      )
    );
  };
  // fires when user submit edited form and close modal
  const handleEditContactSubmit = value => {
    props.handleEditContactSubmit(value);
    props.hideEditContactModal(value);
  };
  const contact = props.editContact.contactInfo;
  return (
    <React.Fragment>
      <ModalLauncher show={props.editContact.showEditContactModal}>
        <div className="modal-title">
          <div>Edit Contact</div>
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
          <EditContactForm
            contact={contact}
            handleEditInputChange={handleEditInputChange}
          />
        </div>
        <div className="modal-footer">
          <Button onClick={hideModal}>Cancel</Button>
          <Button onClick={handleEditContactSubmit}>Save</Button>
        </div>
      </ModalLauncher>
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  hideEditContactModal: payload => {
    dispatch(ContactActions.hideEditContactModal(payload));
  },
  handleEditInputChange: payload => {
    dispatch(ContactActions.handleEditInputChange(payload));
  },
  handleEditContactSubmit: payload => {
    dispatch(ContactActions.handleEditContactSubmit(payload));
  }
});
const mapStateToProps = state => ({
  editContact: state.editContact
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);
