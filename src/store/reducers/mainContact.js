/*jshint esversion: 6 */
import * as ContactTypes from "../actions";
const rand = Math.random(0) * 10;

const initialState = {
  contactInfo: [],
  editContactInfo: [],
  // prefilled contact list
  contactList: [
    {
      id: 0,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: "+234806597613",
      jobTitle: "Frontend Deveolper",
      company: "",
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
      jobTitle: "Frontend Deveolper",
      company: "Fluid Angle",
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
      jobTitle: "Frontend Deveolper",
      company: "",
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
      jobTitle: "Frontend Deveolper",
      company: "Fluid Angle",
      phoneNo: +2348065976616,
      checked: false,
      active: false,
      image: `https://robohash.org/${rand + 4}.png?bgset=bg1`
    }
  ],
  // holds favourite contacts
  starredList: [],
  // holds multiple contacts to be deleted
  multipleDelete: [],
  // holds selected row values
  selectedRows: []
};
export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    //add starred contact to starredList
    case ContactTypes.STAR_CONTACT:
      //clones state.starredList to avoid mutating state
      const starredItem = [...state.starredList];
      starContact(starredItem, action);
      return { ...state, starredList: starredItem };
    // remove starred contact for starredList
    case ContactTypes.UNSTAR_CONTACT:
      const unstarred = [...state.starredList];
      const unStarredContactList = [...state.contactList];
      // remove contact if id is found in array
      return unStarContact(unstarred, action, unStarredContactList, state);

    case ContactTypes.MARK_TO_DELETE:
      let selectedRows = [...state.selectedRows];
      let copyContactList = [...state.contactList];
      let __return;
      ({ __return, selectedRows } = markToDelete(
        selectedRows,
        action,
        copyContactList,
        state
      ));
      return __return;
    // delete single or multiple contacts
    case ContactTypes.DELETE_MULTIPLE_CONTACT:
      const multipleContacts = [...state.contactList];
      const removeSelected = multipleContacts.filter(
        item => !state.selectedRows.map(j => j.id).includes(item.id)
      );
      return { ...state, contactList: removeSelected, selectedRows: [] };
    // deletes a single contact information
    case ContactTypes.DELETE_SINGLE_CONTACT:
      let updateDeleteContact = [...state.contactList];
      let updateStarredContact = [...state.starredList];
      return deleteSingleContact(
        updateDeleteContact,
        action,
        updateStarredContact,
        state
      );

    case ContactTypes.HANDLE_INPUT_CHANGE:
      const contactInfoCopy = [...state.contactInfo];
      return { ...state, contactInfo: [...contactInfoCopy, action.payload] };

    case ContactTypes.HANDLE_NEW_CONTACT_SUBMIT:
      const cloneContactList = [...state.contactList];
      const submittedContact = [...state.contactInfo];
      // merge field object and push data info not set on creating new contact
      return handleNewContactSubmit(submittedContact, cloneContactList, state);

    // gets the values of edit modal
    case ContactTypes.HANDLE_EDIT_INPUT_CHANGE:
      console.log(action.payload);
      const editContactInfoCopy = [...state.editContactInfo];
      return {
        ...state,
        editContactInfo: [...editContactInfoCopy, action.payload]
      };
    // merge the values of edit modal
    case ContactTypes.HANDLE_EDIT_CONTACT_SUBMIT:
      const cloneEditedContactList = [...state.contactList];
      const submittedEditedContact = [...state.editContactInfo];
      return handleEditContactSubmit(
        submittedEditedContact,
        cloneEditedContactList,
        state
      );
    default:
      return state;
  }
};
function handleEditContactSubmit(
  submittedEditedContact,
  cloneEditedContactList,
  state
) {
  const mergeEditedContact = submittedEditedContact.reduce(
    (r, c) => Object.assign(r, c),
    {}
  );
  let k = cloneEditedContactList.filter(
    item => item.id === mergeEditedContact.id
  );
  let j = Object.assign({}, k[0], mergeEditedContact);
  cloneEditedContactList.forEach((contact, index) =>
    contact.id === j.id ? (cloneEditedContactList[index] = j) : contact
  );
  return {
    ...state,
    contactList: cloneEditedContactList,
    editcontactInfo: []
  };
}
//
//
// // helper Functions
function handleNewContactSubmit(submittedContact, cloneContactList, state) {
  const mergeContactList = submittedContact.reduce(
    (r, c) => Object.assign(r, c),
    {
      id: cloneContactList.length,
      image: `https://robohash.org/${cloneContactList.length}.png?bgset=bg1`,
      starred: false,
      checked: false,
      active: false
    },
    {}
  );
  cloneContactList.push(mergeContactList);
  // sorts the array alphabetically
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
  return { ...state, contactList: cloneContactList, contactInfo: [] };
}

function deleteSingleContact(
  updateDeleteContact,
  action,
  updateStarredContact,
  state
) {
  let updatedContactList = updateDeleteContact.filter(
    contact => contact.id !== action.payload.id
  );
  let updatedStarredList = updateStarredContact.filter(
    contact => contact.id !== action.payload.id
  );
  return {
    ...state,
    contactList: updatedContactList,
    starredList: updatedStarredList
  };
}

function markToDelete(selectedRows, action, copyContactList, state) {
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
    __return: {
      ...state,
      selectedRows: selectedRows,
      contactList: copyContactList
    },
    selectedRows
  };
}

function unStarContact(unstarred, action, unStarredContactList, state) {
  const removeStarred = unstarred.filter(
    unstar => unstar.id !== action.payload.id
  );
  unStarredContactList.forEach(item => {
    if (item.id === action.payload.id && item.starred === true) {
      item.starred = !item.starred;
    }
  });
  return {
    ...state,
    starredList: removeStarred,
    contactList: unStarredContactList
  };
}

function starContact(starredItem, action) {
  if (starredItem.length === 0) {
    starredItem.push(action.payload);
  } else {
    let contactChecker = starredItem.filter((item, index) => {
      return item.id === action.payload.id;
    });
    if (contactChecker.length === 0) {
      starredItem.push(action.payload);
    }
  }
  // changes contact to favourite if not favourite at initial state
  starredItem.forEach(item => {
    if (item.id === action.payload.id && item.starred === false) {
      item.starred = !item.starred;
    }
  });
}
