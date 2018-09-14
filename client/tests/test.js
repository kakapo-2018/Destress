configure({adapter: new Adapter()})
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Circle from '../components/Circle'

test('<Circle /> has div', () => {
  const expected = "Circles component"
  const wrapper = shallow(<Circle />)
  console.log(wrapper)
  expect(wrapper.text()).toMatch(expected)
})