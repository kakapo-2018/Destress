import React from 'react'
import {HashRouter as Router, Route} from "react-router-dom"
import Home from './Home'
import Kittens from './Kittens'
import Puppies from './Puppies'

const App = () => {
  return (
    <Router>
      <div id="app">
        <h1>deStress</h1>
        <Route exact path="/" component={Home} />
        <Route path="/kittens" component={Kittens} />
        <Route path="/puppies" component={Puppies} />
    </div>
    </Router>
  )
}

export default App


