import { NewContactModalReducer } from "./newContactModal";
import * as actionTypes from "../actions/types";

describe("edit contact reducer", () => {
  it("should return the initial state", () => {
    expect(NewContactModalReducer(undefined, {})).toEqual({
      showNewContactModal: false
    });
  });
});
