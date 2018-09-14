import React from 'react'
// import {connect} from 'react-redux'

let testArray = ["kittens", "puppies", "baby animals", "landscapes", "rain"]

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
          return <ul><li className="circle" id={`circle${topic}`} key={`circle${topic}`}>{topic}</li></ul>
        })
      }
    </div>
  )
}
}

export default Circle

// const mapStateToProps = (state) => {
//   return {
//     circles: state.circles
//   }
// }
// export default connect(mapStateToProps)(Circles)

