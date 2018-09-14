import React from 'react'

class Cuties extends React.Component {
  constructor(props){
    super(props)
    // console.log("------------in cuties")
    // console.log(props)
    // console.log(arrayList)
  }

render() {
  return (
    <div>
      <div id="return">
        <button>Back</button>
      </div>

      <h1>I am Cuties </h1>

      <div id="image">
        <img src={this.props.image}/>
      </div>
      
    </div>
  )
}
}


export default Cuties