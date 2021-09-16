
import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import toJson from 'enzyme-to-json';
import '../setupTests';

import { ExpenseListItem } from '../../components/ExpenseListItem';


test('should render expenser list item expense', () => {
    
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
    
    expect(toJson(wrapper)).toMatchSnapshot();
})