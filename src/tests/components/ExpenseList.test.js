
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { ExpenseList } from '../../components/ExpenseList';
import '../setupTests';

import toJson from "enzyme-to-json";

test('should render expense list with expense', () => {
    
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    
    expect(toJson(wrapper)).toMatchSnapshot();
})


test("should render expense list with render message", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);

  expect(toJson(wrapper)).toMatchSnapshot();
});