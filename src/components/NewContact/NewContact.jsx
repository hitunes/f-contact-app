import React from "react";
import { connect } from "react-redux";
import { Button } from "../Button/Button";
import NewContactForm from "./NewContactForm";
import ModalLauncher from "./../Modal/ModalLauncher";
import * as ContactActions from "../../store/actions/actions";

class NewContact extends React.Component {
  // shows New contact modal Onclick
  showModal = payload => {
    this.props.showNewContactModal(payload);
  };
  // hides New Contact modal Onclick
  hideModal = payload => {
    this.props.hideNewContactModal(payload);
  };
  // listens to input value change in form and set as new field state
  handleInputChange = e => {
    this.props.handleInputChange({ [e.target.name]: e.target.value });
  };
  // collects form input value on submit and close modal
  handleNewContactSubmit = value => {
    document.getElementById("new-contact-form").reset();
    setTimeout(() => {
      this.props.hideNewContactModal(value);
    }, 600);
    this.props.handleNewContactSubmit(value);
  };
  render() {
    return (
      <React.Fragment>
        <ModalLauncher show={this.props.newContact.showNewContactModal}>
          <div className="modal-title">
            <div>Create Contact</div>
            <div onClick={this.hideModal}>
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
              handleNewContactSubmit={this.handleNewContactSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="modal-footer">
            <Button onClick={this.hideModal}>Cancel</Button>
            <Button onClick={this.handleNewContactSubmit}>Save</Button>
          </div>
        </ModalLauncher>
        {this.props.contacts.contactList.length === 0 ? (
          <span />
        ) : (
          <div onClick={this.showModal} className="App-new-contact-icon">
            <i className="fas fa-plus" />
          </div>
        )}
      </React.Fragment>
    );
  }
}
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
