import React from "react";
import { connect } from "react-redux";
import * as ContactActions from "../../store/actions/actions";

class List extends React.Component {
  starContact = value => {
    this.props.starContact(value);
  };
  render() {
    return (
      <div className="list__table">
        <table>
          <tbody>
            {this.props.list.map((item, index) => (
              <tr key={index}>
                <td onClick={() => this.starContact(item)}>
                  <i className="far fa-star" />
                </td>
                <td>image</td>
                <td>
                  <span>
                    <strong>{item.firstName}</strong>
                  </span>
                  {"  "}
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
  }
}
const mapDispatchToProps = dispatch => ({
  starContact: payload => {
    dispatch(ContactActions.starContact(payload));
  }
});
export default connect(
  null,
  mapDispatchToProps
)(List);
