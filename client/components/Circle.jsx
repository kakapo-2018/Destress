import React from 'react'
<<<<<<< HEAD
import {connect} from 'react-redux'

const Circles = ({circles}) => (
  <div>
    {circles.map(circle =>
      <Circle key={circle.id}
        {...circle}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    circles: state.circles
  }
}

export default connect(mapStateToProps)(Circles)
=======
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
          return <div className="circle" id={`circle${topic}`} key={`circle${topic}`}>{topic}</div>
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

>>>>>>> 1731d039a8b3dd13f7571b27ada71adf587fe2d8
