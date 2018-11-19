import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import List from "./List";
configure({ adapter: new Adapter() });

describe("<MainContact/>", () => {
  it("should render <List/> contacts if it recieves props", () => {
    expect(<List list />);
  });
});
