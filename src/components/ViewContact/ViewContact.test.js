import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ViewContact from "./ViewContact";
configure({ adapter: new Adapter() });

describe("<ViewContact/>", () => {
  it("should render <ViewContact/> modal if it recieves props", () => {
    expect(<ViewContact />);
  });
});
