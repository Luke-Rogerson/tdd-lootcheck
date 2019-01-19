import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wrapper = shallow(<Wallet {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('displays the balance from props', () => {
    expect(wrapper.find('.balance').text()).toEqual('Wallet balance: 20u');
  });
});
