/*jshint esversion: 6 */
import * as ContactTypes from "../actions";
const rand = Math.random(0) * 10;

const initialState = {
  contactInfo: [],
  contactList: [
    {
      id: 0,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: "+234806597613",
      checked: false,
      active: false,
      image: `https://robohash.org/${rand + 1}.png?bgset=bg1`
    },
    {
      id: 1,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      phoneNo: +2348065976614,
      checked: false,
      active: false,
      image: `https://robohash.org/${rand + 2}.png?bgset=bg1`
    },
    {
      id: 2,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976615,
      checked: false,
      active: false,
      image: `https://robohash.org/${rand + 3}.png?bgset=bg1`
    },
    {
      id: 3,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976616,
      checked: false,
      active: false,
      image: `https://robohash.org/${rand + 4}.png?bgset=bg1`
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

    case ContactTypes.HANDLE_INPUT_CHANGE:
      const contactInfoCopy = [...state.contactInfo];
      return { ...state, contactInfo: [...contactInfoCopy, action.payload] };

    case ContactTypes.HANDLE_NEW_CONTACT_SUBMIT:
      const cloneContactList = [...state.contactList];
      const submittedContact = [...state.contactInfo];
      const mergeContactList = submittedContact.reduce(
        (r, c) => Object.assign(r, c),
        {
          id: cloneContactList.length,
          image: `https://robohash.org/${
            cloneContactList.length
          }.png?bgset=bg1`,
          starred: false,
          checked: false,
          active: false
        },
        {}
      );
      cloneContactList.push(mergeContactList);
      cloneContactList.sort((a, b) => {
        let nameA = a.firstName.toLowerCase();
        let nameB = b.firstName.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { ...state, contactList: cloneContactList };
    default:
      return state;
  }
};
