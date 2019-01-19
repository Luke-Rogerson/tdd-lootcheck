import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
