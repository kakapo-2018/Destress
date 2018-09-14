import React from 'react'


class Topic extends React.Component {
  constructor(props){
    super(props)
  }
render() {
  return (
    <div>
      <div id="return">
        <button><a href ="#">Back</a></button>
      </div>
      <h1>I am Topic </h1>
      <div id ="image">
        <img src = {this.props.image}/>
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