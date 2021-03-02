import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to the correct address', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedLink} />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('does <img> have the correct src and alt', () => {
    const expectedAlt = 'text';
    const expectedSrc = 'image';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt}/>);

    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });

  it('should render correct prop name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = 'cost';
    const expectedDuration = 'days';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDuration}/>);

    expect(component.find('.title').prop('name')).toEqual(expectedName);
    expect(component.find('.details').prop('cost')).toEqual(expectedCost);
    expect(component.find('.details').prop('days')).toEqual(expectedDuration);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  //should render correct tags array

});