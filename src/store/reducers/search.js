import * as ContactTypes from "../actions";

const initialState = {
  activeSuggestion: 0,
  filteredSuggestions: [],
  showSuggestions: false,
  userInput: "",
  searchInput: false
};

export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.HANDLE_SEARCH_CHANGE:
      const filteredSuggestions = action.payload.suggestions.filter(
        suggestion =>
          `${suggestion.firstName}${suggestion.lastName}${suggestion.phoneNo}${
            suggestion.company
          }${suggestion.jobTitle}`
            .toLowerCase()
            .indexOf(action.payload.userInput.toLowerCase()) > -1
      );
      return {
        ...state,
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: action.payload.userInput
      };
    case ContactTypes.HANDLE_SEARCH_ONCLICK:
      return {
        ...state,
        userInput: action.payload,
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false
      };
    default:
      return state;
  }
};
