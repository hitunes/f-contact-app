/*jshint esversion: 6 */
import * as ContactTypes from "../actions";

const initialState = {
  contactList: [
    {
      id: 0,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976613,
      checked: false,
      active: false
    },
    {
      id: 1,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      phoneNo: +2348065976614,
      checked: false,
      active: false
    },
    {
      id: 2,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976615,
      checked: false,
      active: false
    },
    {
      id: 3,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976616,
      checked: false,
      active: false
    },
    {
      id: 4,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      phoneNo: +2348065976617,
      checked: false,
      active: false
    },
    {
      id: 5,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976618,
      checked: false,
      active: false
    }
  ],
  starredList: [],
  multipleDelete: [],
  selectedRows: []
};
export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContactTypes.STAR_CONTACT:
      const contacts = [...state.contactList];
      const starred = [...state.starredList];
      const contactFilter = contacts.filter(contact => {
        return contact.id === action.payload.id;
      });
      const starredContact = contactFilter.filter(contact => {
        return (contact.starred = !contact.starred);
      });
      starred.push(...starredContact);
      return { ...state, starredList: starred };

    case ContactTypes.UNSTAR_CONTACT:
      const unstarred = [...state.starredList];
      const removeStarred = unstarred.filter(
        unstar => unstar.id !== action.payload.id
      );
      return { ...state, starredList: removeStarred };

    case ContactTypes.MARK_TO_DELETE:
      let selectedRows = [...state.selectedRows];
      let copyContactList = [...state.contactList];
      const selectedRowIndex = selectedRows.find(
        item => item.id === action.payload.id
      );
      if (selectedRowIndex) {
        selectedRows.forEach(item => (item.checked = !true));
        selectedRows = selectedRows.filter(item => {
          if (!(item.id === action.payload.id)) {
            item.checked = !false;
            return item;
          }
          return null;
        });
      } else {
        selectedRows.push(action.payload);
        selectedRows.forEach(item => (item.checked = !false));
      }
      copyContactList.forEach(row => {
        const rowId = action.payload.id;
        if (row.id === rowId && row.checked === !row.checked) {
          row.checked = !row.checked;
        }
      });
      return {
        ...state,
        selectedRows: selectedRows,
        contactList: copyContactList
      };

    case ContactTypes.DELETE_MULTIPLE_CONTACT:
      const multipleContacts = [...state.contactList];
      const removeSelected = multipleContacts.filter(
        item => !state.selectedRows.map(j => j.id).includes(item.id)
      );
      return { ...state, contactList: removeSelected, selectedRows: [] };
    default:
      return state;
  }
};
