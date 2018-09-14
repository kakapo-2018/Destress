configure({adapter: new Adapter()})
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Circle from '../components/Circle'

test('<Circle /> has div', () => {
  const expected = "Circles component"
  const wrapper = shallow(<Circle />)
 
  expect(wrapper.text()).toMatch(expected)
})

test('<Circle /> creates one item for each topic', () => {
  // Arrange
  const topics = ['kitten', 'Puppies', 'Pandas']
  const expected = 3

  // Act
  const wrapper = shallow(<Circle thing={topics} />)
  const actual = wrapper.find('div')
console.log(topics)
  // Assert
  expect(actual).toEqual(expected)
})