import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('contains a Connected Wallet component', () => {
    expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
  });
  it('contains a connected Loot component', () => {
    expect(wrapper.find('Connect(Loot)').exists()).toBe(true);
  });
  it('contains a link to the Coindesk price page', () => {
    expect(wrapper.find('a').props().href).toBe(
      'https://www.coindesk.com/price'
    );
  });
});
