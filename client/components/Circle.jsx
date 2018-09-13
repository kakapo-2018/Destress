import React from 'react'
import Words from './Words'
import AddWord from './AddWord'


class Circle extends React.Component {
  constructor(props){
    super(props)
  }
render() {
  return (
    <div>
    <div id="comments">
    <div id="read">  
    <Words />
    <div id="add">
    <AddWord />
    </div>
    </div>
    </div>
    </div>
  )
}
}


export default Circle