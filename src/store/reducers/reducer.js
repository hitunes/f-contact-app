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
      phoneNo: +2348065976613
    },
    {
      id: 1,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976614
    },
    {
      id: 2,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976615
    },
    {
      id: 3,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976616
    },
    {
      id: 4,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976617
    },
    {
      id: 5,
      starred: false,
      firstName: "Itunu",
      lastName: "Samuel",
      email: "Itunu@gmail.com",
      phoneNo: +2348065976618
    }
  ],
  starredList: []
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
    default:
      return state;
  }
};
