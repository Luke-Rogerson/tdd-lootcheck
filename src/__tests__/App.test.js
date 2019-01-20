import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('contains a Connected Wallet component', () => {
    expect(wrapper.find('Connect(Wallet)').exists()).toBe(true);
  });
});
