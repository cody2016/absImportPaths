import React from 'react';
import { shallow } from 'enzyme';

describe('<Home/>', () => {
  let Home;

  beforeEach(() => {
    Home = require('absImportPaths/app/home/Home').Home;
    // Home = require('./Home').default;  // WORKS
  });
  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.length).to.equal(1);
  });
});
