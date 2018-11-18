import "./ViewContact.css";
import React from "react";
import { connect } from "react-redux";
import ModalLauncher from "../Modal/ModalLauncher";
import * as ContactActions from "../../store/actions/actions";

const ViewContact = props => {
  const showEditModal = payload => {
    props.showEditContactModal(payload);
  };
  const hideViewModal = payload => {
    props.hideViewContactModal(payload);
  };
  const showDelete = payload => {
    props.showDeleteSingleContact(payload);
  };
  const deleteContact = payload => {
    props.deleteSingleContact(payload);
    props.hideViewContactModal(false);
  };
  const starContact = payload => {
    props.starContact(payload);
  };
  const jobRender = contact => {
    if (contact.jobTitle === "") {
      return <div>{contact.company}</div>;
    } else if (contact.company === "") {
      return <div>{contact.jobTitle}</div>;
    } else if (contact.company !== "" && contact.title !== "") {
      return (
        <div>
          {contact.jobTitle}, {contact.company}
        </div>
      );
    } else {
      return null;
    }
  };
  const contact = props.viewContact.contactInfo;
  const toggleDeleteState = props.viewContact.showDelete;
  const starred =
    contact.starred === true ? "fas fa-star star-orange" : "far fa-star ";
  const toggleDelete = toggleDeleteState === true ? "d-flex" : "d-none";
  return (
    <React.Fragment>
      <ModalLauncher show={props.viewContact.showViewContactModal}>
        <div className="modal-title view-contact">
          <div className="view-contact__title-wrapper">
            <div className="view-contact__image-wrapper">
              <img src={contact.image} alt="profile" />
            </div>
            <div className="view-contact__title-wrapper">
              <span>{contact.firstName}</span>
              <span>{contact.lastName}</span>
            </div>
          </div>
          <DeleteSingleContact
            contact={contact}
            deleteContact={deleteContact}
            showDelete={toggleDelete}
          />
          <div className="view-contact__icon-group">
            <div>
              <i onClick={() => starContact(contact)} className={starred} />
            </div>
            <div onClick={() => showEditModal(contact)}>
              <i className="fas fa-pen" />
            </div>
            <div onClick={showDelete}>
              <i className="fas fa-ellipsis-v" />
            </div>
            <div onClick={() => hideViewModal(false)}>
              <i className="fas fa-times" />
            </div>
          </div>
        </div>
        <div className="modal-body view-contact-body">
          <div className="view-contact-body--title">
            <b>Contact Details</b>
          </div>
          <div className="view-contact-body--description">
            <div>
              <div>
                <i className="fas fa-folder-plus" />
              </div>
              {jobRender(contact)}
            </div>
            <div>
              <div>
                <i className="fas fa-envelope" />
              </div>
              <div className="view-contact-body--description-email">
                {contact.email}
              </div>
            </div>
            <div>
              <div>
                <i className="fas fa-phone" />
              </div>
              <div className="view-contact-body--description-tel">
                {contact.phoneNo}
              </div>
            </div>
          </div>
        </div>
      </ModalLauncher>
    </React.Fragment>
  );
};
export const DeleteSingleContact = props => {
  return (
    <div
      onClick={() => props.deleteContact(props.contact)}
      className={`delete-single-contact ${props.showDelete}`}
    >
      <i className="fas fa-trash" />
      <span>Delete</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  starContact: payload => {
    dispatch(ContactActions.starContact(payload));
  },
  showEditContactModal: payload => {
    dispatch(ContactActions.showEditContactModal(payload));
  },
  hideViewContactModal: payload => {
    dispatch(ContactActions.hideViewContactModal(payload));
  },
  showDeleteSingleContact: payload => {
    dispatch(ContactActions.showDeleteSingleContact(payload));
  },
  deleteSingleContact: payload => {
    dispatch(ContactActions.deleteSingleContact(payload));
  }
});
const mapStateToProps = state => ({
  viewContact: state.viewContact
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewContact);
