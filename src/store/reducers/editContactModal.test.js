import { EditContactModalReducer } from "./editContactModal";
import * as actionTypes from "../actions/types";

describe("edit contact reducer", () => {
  it("should return the initial state", () => {
    expect(EditContactModalReducer(undefined, {})).toEqual({
      showEditContactModal: false,
      contactInfo: []
    });
  });
  it("should store contact to be edited", () => {
    expect(
      EditContactModalReducer(
        { showEditContactModal: false, contactInfo: [] },
        { type: actionTypes.SHOW_EDIT_MODAL, payload: {} }
      )
    ).toEqual({
      showEditContactModal: true,
      contactInfo: {}
    });
  });
});
