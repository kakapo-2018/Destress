import Captions from './Captions'
import AddCaption from './AddCaption'


class Topic extends React.Component {
  constructor(props){
    super(props)
  }
render() {
  return (
    <div>
    <Words />
    <AddWord />
    </div>
  )
}
}


export default Topic