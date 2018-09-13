import React from 'react'
import {connect} from 'react-redux'
import {addCaption} from '../actions'

function submitCaption (e, dispatch) {
  if (e.keyCode === 13) {
    dispatch(addCaption(e.currentTarget.value))
    e.currentTarget.value = ''
  }
}

const AddCaption = (props) => (
  <input
    placeholder='Enter a Caption or phrase'
    onKeyUp={e => {
      // the connect() call below puts
      // dispatch directly on props
      submitCaption(e, props.dispatch)
    }}
  />
)

export default connect()(AddCaption)
