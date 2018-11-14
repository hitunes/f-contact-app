import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";
import Nav from "./Nav/Nav";
import SideBar from "./Aside/SideBar";
import ContactView from "./Main/ContactView";
import NewContact from "./NewContact/NewContact";
import * as ContactActions from "../store/actions/actions";

class App extends Component {
  deleteMultiple = contacts => {
    this.props.deleteMultiple(contacts);
  };
  render() {
    return (
      <div className="App">
        <NewContact />
        {this.props.contacts.selectedRows.length > 0 ? (
          <div
            onClick={this.deleteMultiple}
            className="App-delete-contact-icon"
          >
            <i className="fas fa-trash" />
          </div>
        ) : (
          <div />
        )}
        <Nav />
        <div className="App__body">
          <SideBar />
          <ContactView />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  deleteMultiple: payload => {
    dispatch(ContactActions.deleteMultiple(payload));
  }
});
const mapStateToProps = state => ({
  contacts: state.contacts
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
