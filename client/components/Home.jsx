import React from 'react'
import {Link} from "react-router-dom"


const Home = () => {
return (
  <div id="circles">

      <Link to="/puppies">
          <div className="circle" id="circle1">
            <img id="image1" src="icon-dog.svg" alt="dog"/>
          </div>
      </Link>

      <Link to="/kittens">
          <div className="circle" id="circle2">
            <img id="image2" src="icon-cat.svg" alt="cat"/>
          </div>
      </Link>

      <div className="circle" id="circle3"></div>

      <div className="circle" id="circle4"></div>

      <div className="circle" id="circle5"></div>

  </div>
)
}


export default Home