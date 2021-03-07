import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate a link to the correct address', () => {
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' />);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render correct prop name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '100';
    const expectedDays = '7';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays}/>);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(
      component
        .find('.details span')
        .at(0)
        .text()
    ).toEqual(`${expectedDays} days`);
    expect(
      component
        .find('.details span')
        .at(1)
        .text()
    ).toEqual(`from ${expectedCost}`);
  });

  it('does <img> have the correct src and alt', () => {
    const expectedAlt = 'text';
    const expectedSrc = 'image';
    const component = shallow(<TripSummary src={expectedSrc} alt={expectedAlt}/>);

    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
  });

  it('should render correct tags array', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(
      component
        .find('.tags span')
        .at(0)
        .text()
    ).toEqual(expectedTags[0]);
    expect(
      component
        .find('.tags span')
        .at(1)
        .text()
    ).toEqual(expectedTags[1]);
    expect(
      component
        .find('.tags span')
        .at(2)
        .text()
    ).toEqual(expectedTags[2]);
  });

});