import React from 'react'

import Words from './Words'
import AddWord from './AddWord'
import Circle from './Circles'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <div className='app-container'>
          <div classname ="Circle">
            <Route exact path="/" component={ListofCirles}/>
          </div>
          <div classname ="Circle">
            <Route exact path="/" component={ListofCirles}/>
          </div>
          <div classname ="Circle">
            <Route exact path="/" component={ListofCirles}/>
          </div>
          <div classname ="Circle">
            <Route exact path="/" component={ListofCirles}/>
          </div>
          <div classname ="Circle">
            <Route exact path="/" component={ListofCirles}/>
          </div>
            <Route path="/circle/:id" component={}/>
        </div>
      </React.Fragment>
    </Router>    
  )
}

export default App
