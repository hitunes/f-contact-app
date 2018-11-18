import "./Search.css";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import * as ContactActions from "../../store/actions/actions";

class Search extends Component {
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    this.props.handleSearchChange(
      Object.assign({ userInput }, { suggestions: suggestions })
    );
  };
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.props.handleSearchOnclick(e.currentTarget.innerText);
  };

  render() {
    const {
      activeSuggestion,
      filteredSuggestions,
      showSuggestions,
      userInput
    } = this.props.search;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <div className="suggestions-list-wrapper">
            <ul className="suggestions">
              {filteredSuggestions.map((suggestion, index) => {
                let className;
                if (index === activeSuggestion) {
                  className = "suggestion-active";
                }
                return (
                  <li
                    className={className}
                    key={suggestion.id}
                    onClick={this.onClick}
                  >
                    <div className="list__table-td-image suggestion-image">
                      <img src={suggestion.image} alt="profile" />
                    </div>
                    <div className="suggestion-firstname">
                      {suggestion.firstName}
                    </div>
                    <div className="suggestion-lastname">
                      {suggestion.lastName}
                    </div>
                    <div>-</div>
                    <div className="suggestion-email">{suggestion.email}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      } else {
        suggestionsListComponent = (
          <div>
            <em>No suggestions!</em>
          </div>
        );
      }
    }
    let inputClassName =
      userInput.length > 0 ? "search-input--active" : "search-input";
    return (
      <Fragment>
        <div className="search-input__wrapper">
          <i className={`fas fa-search ${inputClassName}`} />
          <input
            type="text"
            onChange={this.onChange}
            value={userInput}
            placeholder="Search"
            className={inputClassName}
          />
          <div>{suggestionsListComponent}</div>
        </div>
      </Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  handleSearchChange: payload => {
    dispatch(ContactActions.handleSearchChange(payload));
  },
  handleSearchOnclick: payload => {
    dispatch(ContactActions.handleSearchOnclick(payload));
  }
});
const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
