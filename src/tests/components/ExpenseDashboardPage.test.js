import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import toJson from 'enzyme-to-json';
import '../setupTests';


test('should render component', () => {
    
    const wrapper = shallow(<ExpenseDashboardPage />);

    expect(toJson(wrapper)).toMatchSnapshot()
})