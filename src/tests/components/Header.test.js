import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import "../setupTests";
import toJson from "enzyme-to-json";

test("should render Header correctly", () => {
  const wrapper = shallow(<Header />);
//   expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(toJson(wrapper)).toMatchSnapshot();
});
