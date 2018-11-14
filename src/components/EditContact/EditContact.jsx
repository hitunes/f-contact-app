import React from "react";
import { connect } from "react-redux";
import ModalLauncher from "./../Modal/ModalLauncher";
import * as ContactActions from "../../store/actions/actions";

const EditContact = props => {
  const showModal = payload => {
    props.showEditContactModal(payload);
  };
  const hideModal = payload => {
    props.hideEditContactModal(payload);
  };
  const contact = props.editContact.contactInfo;
  return (
    <React.Fragment>
      <ModalLauncher show={props.editContact.showEditContactModal}>
        <div className="modal-title">Edit Contact</div>
        <div className="modal-body">
          <div className="modal-body--icon-row">
            <i className="far fa-grin-tongue contact-avatar" />
            <i className="fas fa-folder-plus" />
            <i className="fas fa-envelope" />
            <i className="fas fa-phone" />
            <i className="fas fa-file-alt" />
          </div>
          <div className="modal-body__input">
            <div className="modal-body__input--name">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={contact.firstName}
              />
              <input
                type="text"
                name="LastName"
                placeholder="Last Name"
                value={contact.lastName}
              />
            </div>
            <div className="modal-body__input--job">
              <input
                type="text"
                name="Company"
                placeholder="Company"
                value={contact.company}
              />
              <input
                type="text"
                name="JobTitle"
                placeholder="Job Title"
                value={contact.jobTitle}
              />
            </div>
            <div className="modal-body__input--email">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                value={contact.email}
              />
            </div>
            <div className="modal-body__input--phone">
              <input
                type="tel"
                name="Phone"
                placeholder="Phone"
                value={contact.phoneNo}
              />
            </div>
            <div className="modal-body__input--phone">
              <input
                type="textarea"
                name="notes"
                placeholder="Notes"
                value={contact.notes}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div onClick={hideModal}>Cancel</div>
          <div>Save</div>
        </div>
      </ModalLauncher>
      <div onClick={() => showModal(props.contact)}>
        <i className="fas fa-pen" />
      </div>
    </React.Fragment>
  );
};
const mapDispatchToProps = dispatch => ({
  showEditContactModal: payload => {
    dispatch(ContactActions.showEditContactModal(payload));
  },
  hideEditContactModal: payload => {
    dispatch(ContactActions.hideEditContactModal(payload));
  }
});
const mapStateToProps = state => ({
  editContact: state.editContact
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);
