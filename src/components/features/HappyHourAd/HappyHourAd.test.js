import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';
//import { processNodes } from 'react-html-parser';

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  }); 
});