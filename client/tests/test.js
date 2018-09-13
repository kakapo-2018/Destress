
import React from 'react'
import {shallow} from 'enzyme'

import Circle from '../components/Circle'

test('<Circle /> has div', () => {
  const expected = "circles"
  const wrapper = shallow(<Circle />)
  expect(wrapper.find("circles")).toBe(expected)
})