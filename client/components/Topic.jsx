import React from 'react'
import Circle from './Circle'


class Topic extends React.Component {
  constructor(props){
    super(props)
  }
render() {
  return (
    <div>
      <div id="return">
      <button>Back</button>
      </div>
      <div id ="image">
      <h1>I am Topic </h1>
      </div>
      {/* <div id="captions">
      <div id ="captions-read">
      <Caption />
      </div>
      <div id ="captions-add">
      <AddCaption />
      </div> */}
      {/* <div id ="add-image">
      
      </div> */}
      
    </div>
  )
}
}


export default Topic