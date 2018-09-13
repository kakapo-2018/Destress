import React from 'react'
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
