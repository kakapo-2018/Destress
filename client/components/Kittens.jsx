import React from "react"
import cutiesData from "../../data/cuties.js"

const kittyData = cutiesData.kittens

const Kittens = () => {
  return (
    <React.Fragment>
      <p>KITTENS</p>
      {kittyData.map((cat, key) => {
        return <img key={key} src={cat}/>
      })
      }

      <a href="/">Back</a>
    </React.Fragment>
  )
}

export default Kittens