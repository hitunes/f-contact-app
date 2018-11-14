import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const StarredList = props => {
  const unStarContact = value => {
    props.unStarContact(value);
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
              <td>{item.phoneNo}</td>
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
  }
});
export default connect(
  null,
  mapDispatchToProps
)(StarredList);
