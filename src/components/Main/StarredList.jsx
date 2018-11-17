import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const StarredList = props => {
  const unStarContact = value => {
    props.unStarContact(value);
  };
  const showViewModal = payload => {
    props.showViewContactModal(payload);
  };
  return (
    <div className="list__table">
      <table>
        <tbody>
          {props.list.map((item, index) => (
            <tr key={index}>
              <td
                className="list__table-td-icon"
                onClick={() => unStarContact(item)}
              >
                <i className="fas fa-star star-orange" />
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
              <td onClick={() => showViewModal(item)}>{item.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  unStarContact: payload => {
    dispatch(ContactActions.unStarContact(payload));
  },
  showViewContactModal: payload => {
    dispatch(ContactActions.showViewContactModal(payload));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(StarredList);
