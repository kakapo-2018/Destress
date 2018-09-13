import React from 'react'
// import {connect} from 'react-redux'

let testArray = ["kittens", "puppies", "baby animals", "landscapes", "rain"]
// this to be changed to call Topic with data from each array/API

class Circle extends React.Component {
  constructor(props){
    super(props)
  }

render() {
  return (
    <div id="circles">
      <p>Circles component</p>
      {
        testArray.map(topic => {
          return <div className="circle" id={`circle${topic}`} key={`circle${topic}`}>{topic}</div>
          // <Topic />
        })
      }
    </div>
  )
}
}

export default Circle

// const mapStateToProps = (state) => {
//   return {
//     topics: state.topics
//   }
// }
// export default connect(mapStateToProps)(topics)

