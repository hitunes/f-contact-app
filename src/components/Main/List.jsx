import React from "react";
import { connect } from "react-redux";
import EditContact from "../EditContact/EditContact";
import * as ContactActions from "../../store/actions/actions";
import ViewContact from "../ViewContact/ViewContact";

const List = props => {
  const starContact = value => {
    props.starContact(value);
  };
  const markToDelete = value => {
    props.markToDelete(value);
  };
  const showModal = payload => {
    props.showNewContactModal(payload);
  };
  const showEditModal = payload => {
    props.showEditContactModal(payload);
  };
  const showViewModal = payload => {
    props.showViewContactModal(payload);
  };
  const hideViewModal = payload => {
    props.hideViewContactModal(payload);
  };
  return (
    <div className="list__table">
      {props.list.length === 0 ? (
        <div className="intro-text">
          <i onClick={showModal} className="fas fa-plus add-new-contact-icon" />
          <div>Your Contact list is Empty, click to add New Contact</div>
        </div>
      ) : (
        <table>
          <tbody>
            <ViewContact hideViewModal={hideViewModal} />
            <EditContact />
            {props.list.map((item, index) => {
              const activeRow = item.checked === !false ? "row-active" : "row";
              const checker =
                item.checked === !false
                  ? "fas fa-check-square"
                  : "far fa-square";
              return (
                <tr key={index} className={activeRow}>
                  <td
                    onClick={() => markToDelete(item)}
                    className="list__table-td-icon contact-select"
                  >
                    <i className={`${checker}`} />
                  </td>
                  <td
                    onClick={() => showViewModal(item)}
                    className="list__table-td-image"
                  >
                    <img src={item.image} alt="profile" />
                  </td>
                  <td
                    onClick={() => showViewModal(item)}
                    className="list__table-td-name"
                  >
                    <span>
                      <strong>{item.firstName} </strong>
                    </span>
                    <span>
                      <strong> {item.lastName}</strong>
                    </span>
                  </td>
                  <td
                    onClick={() => showViewModal(item)}
                    className="list__table-td-email"
                  >
                    {item.email}
                  </td>
                  <td
                    onClick={() => showViewModal(item)}
                    className="list__table-td-phone"
                  >
                    {item.phoneNo}
                  </td>
                  <td className="list__table-td-icon-group">
                    <i
                      onClick={() => starContact(item)}
                      className="far fa-star main-contact-icon"
                    />
                    <div
                      className="modal-icon-launcher"
                      onClick={() => showEditModal(item)}
                    >
                      <i className="fas fa-pen" />
                    </div>
                    <i className="fas fa-ellipsis-v" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  starContact: payload => {
    dispatch(ContactActions.starContact(payload));
  },
  markToDelete: payload => {
    dispatch(ContactActions.markToDelete(payload));
  },
  showNewContactModal: payload => {
    dispatch(ContactActions.showNewContactModal(payload));
  },
  showEditContactModal: payload => {
    dispatch(ContactActions.showEditContactModal(payload));
  },
  showViewContactModal: payload => {
    dispatch(ContactActions.showViewContactModal(payload));
  },
  hideViewContactModal: payload => {
    dispatch(ContactActions.hideViewContactModal(payload));
  }
});
const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
