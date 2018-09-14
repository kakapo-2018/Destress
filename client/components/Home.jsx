import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
return (
  <div id="circles">
    <h2>Pick a Cutie</h2>
      <Link to="/kittens">
          <div className="circle" id="circle1">Kittens</div>
      </Link>
      <Link to="/puppies">
        <div className="circle" id="circle2">Puppies</div>
      </Link>
      <div className="circle" id="circle3"></div>
      <div className="circle" id="circle4"></div>
      <div className="circle" id="circle5"></div>
  </div>
)
}


export default Home