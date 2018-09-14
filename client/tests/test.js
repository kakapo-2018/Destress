configure({adapter: new Adapter()})
import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Circle from '../components/Circle'
import Topic from '../components/Topic'

test('<Circle /> has div', () => {
  const expected = "Circles component"
  const wrapper = shallow(<Circle />)
 
  expect(wrapper.text()).toMatch(expected)
})

test('<topic /> does this have an h1 tag', () => {

//Arrange  
const expected = "I am Topic"

//Act
const wrapper = shallow(<Topic />)
const actual = wrapper.text()


//Assert
  expect(actual).toMatch(expected) 
})

test('topic has image tag', () => {

//Arrange
  const expected = true

//Act
const wrapper = shallow(<Topic />)
const actual = wrapper.find("img").length > 0

//Assert
expect(actual).toBe(expected)

})

test('topic has button tag', () => {

  //Arrange
    const expected = true
  
  //Act
  const wrapper = shallow(<Topic />)
  const actual = wrapper.find("button").length > 0
  
  //Assert
  expect(actual).toBe(expected)
})

test('<Circle /> creates one item for each topic', () => {
  // Arrange
  const topic = ['herschel', 'gertrude', 'jemima']
  const expected = 3

  // Act
  const wrapper = shallow(<Circle testArray={topic} />)
  const actual = wrapper.find('li').length

  // Assert
  expect(actual).toBe(expected)
})