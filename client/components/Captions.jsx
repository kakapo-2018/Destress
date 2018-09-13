import React from 'react'
import {connect} from 'react-redux'

import Caption from './Caption'

const Captions = ({captions}) => (
  <div>
    {captions.map(caption =>
      <Caption key={caption.id}
        {...caption}
      />
    )}
  </div>
)

const mapStateToProps = (state) => {
  return {
    captions: state.captions
  }
}

export default connect(mapStateToProps)(Captions)
