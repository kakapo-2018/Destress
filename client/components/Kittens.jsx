import React from "react"
import cutiesData from "../../data/cuties.js"

const kittyData = cutiesData.kittens

const Kittens = () => {
  return (
    <React.Fragment>
     <div id="topic">

      <div id="return">
        <a href="/">Back</a>
      </div>

      {/* <p>KITTENS</p>
      {kittyData.map((cat, key) => {
        return <img key={key} src={cat}/>
      })
      } */}

      <div id="image">
        <img className="img" src="https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg" />
      </div>

      <div id="captions">
        <p>
          Awwwww!
        </p>
      </div>

    </div>
    </React.Fragment>
  )
}

export default Kittens