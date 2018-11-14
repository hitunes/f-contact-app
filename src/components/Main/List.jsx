import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const List = props => {
  const starContact = value => {
    props.starContact(value);
  };
  const markToDelete = value => {
    console.log(value);
    props.markToDelete(value);
  };
  return (
    <div className="list__table">
      <table>
        <tbody>
          {props.list.map((item, index) => (
            <tr key={index}>
              <td
                onClick={() => markToDelete(item)}
                className="list__table-td-icon contact-select"
              >
                <i className="far fa-square" />
              </td>
              <td className="list__table-td-image">
                <img src="images/profile-img.png" alt="profile" />
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
                <i className="fas fa-pen" />
                <i className="fas fa-ellipsis-v" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  starContact: payload => {
    dispatch(ContactActions.starContact(payload));
  },
  markToDelete: payload => {
    dispatch(ContactActions.markToDelete(payload));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(List);
