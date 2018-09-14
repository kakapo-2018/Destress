import React from 'react'
import Cuties from "./Cuties"
import arrayList from "../../data/topics.js"

let testArray = ["kittens", "puppies", "baby animals", "landscapes", "rain"]
// // this to be changed to call data from each array

console.log(arrayList)
console.log(testArray)

class ListCuties extends React.Component {
  constructor(props){
    super(props)
  }

render() {
  return (
    <div id="circles">
      {
      testArray.map((cuteThing, i) => {
        return (
          <div className="circle" id={`circle${i}`} key={`circle${i}`}>
          <Cuties cutie={cuteThing} />
            {cuteThing}
          <p>------------------</p>
          </div>
        )
         })
       }

    </div>
  )
}
}

export default ListCuties