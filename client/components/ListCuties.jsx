import React from 'react'
import Cuties from "./Cuties"
import arrayList from "../../data/topics.js"

let testArray = ["kittens", "puppies", "baby animals", "landscapes", "rain"]
// // this to be changed to call data from each array


// console.log(arrayList[0].type)


class ListCuties extends React.Component {
  constructor(props){
    super(props)
  }

// getTypes(array) {
// let typesArray = []
//   for (let i = 0; i < array.length; i++) {
//     const type = array[i];
//     console.log(type)
//     return typesArray.push(type)
//   }
// console.log(typesArray)
// }

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