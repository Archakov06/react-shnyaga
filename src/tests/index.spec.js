import React from 'react';
import { shallow } from 'enzyme';
import Shnayga from '../index';

test('Checkbox in default state', () => {

  const checkbox = shallow(
    <Shnayga />
  );

  expect(checkbox.find('div').hasClass('shnyaga--checked')).toEqual(false);
});

test('Checkbox checked after click', () => {

  const checkbox = shallow(
    <Shnayga />
  );

  checkbox.simulate('click', {
    preventDefault: () => ({}),
  });

  expect(checkbox.find('div').hasClass('shnyaga--checked')).toEqual(true);
});

test('Checkbox disabled', () => {

  const checkbox = shallow(
    <Shnayga disabled={true} />
  );

  expect(checkbox.find('div').hasClass('shnyaga--disabled')).toEqual(true);
});

test('Checkbox disabled', () => {

  const checkbox = shallow(
    <Shnayga disabled={true} />
  );

  expect(checkbox.find('div').hasClass('shnyaga--disabled')).toEqual(true);
});
