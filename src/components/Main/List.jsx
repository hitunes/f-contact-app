import React from "react";
import { connect } from "react-redux";
import EditContact from "../EditContact/EditContact";
import * as ContactActions from "../../store/actions/actions";

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
  console.log(props);
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
                  <td className="list__table-td-image">
                    <img src={item.image} alt="profile" />
                  </td>
                  <td className="list__table-td-name">
                    <span>
                      <strong>{item.firstName} </strong>
                    </span>
                    <span>
                      <strong> {item.lastName}</strong>
                    </span>
                  </td>
                  <td className="list__table-td-email">{item.email}</td>
                  <td className="list__table-td-phone">{item.phoneNo}</td>
                  <td className="list__table-td-icon-group">
                    <i
                      onClick={() => starContact(item)}
                      className="far fa-star main-contact-icon"
                    />
                    <EditContact contact={item} />
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
  }
});
export default connect(
  null,
  mapDispatchToProps
)(List);
