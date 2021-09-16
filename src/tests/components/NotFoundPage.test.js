import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import '../setupTests';
import NotFoundPage from "../../components/NotFoundPage";

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />)

    expect(toJson(wrapper)).toMatchSnapshot();
})