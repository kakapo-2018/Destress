import React from 'react'
import Circle from './Circle'


class Topic extends React.Component {
  constructor(props){
    super(props)
  }
render() {
  return (
    <div>
      <h1>  circles here </h1>
<Circle />
</div>
  )
}
}


export default Topic