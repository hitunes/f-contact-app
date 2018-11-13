import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

const List = props => {
  const starContact = value => {
    props.starContact(value);
  };
  return (
    <div className="list__table">
      <table>
        <tbody>
          {props.list.map((item, index) => (
            <tr key={index}>
              <td onClick={() => starContact(item)}>
                <i className="far fa-star" />
              </td>
              <td>image</td>
              <td>
                <span>
                  <strong>{item.firstName}</strong>
                </span>
                <span>
                  <strong>{item.lastName}</strong>
                </span>
              </td>
              <td>{item.email}</td>
              <td>{item.phoneNo}</td>
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
  }
});
export default connect(
  null,
  mapDispatchToProps
)(List);
