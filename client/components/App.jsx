import React from 'react'
<<<<<<< HEAD

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
=======
import Circle from './Circle'

const App = () => (
  <div id="app">
    <Circle />
  </div>
)
export default App
>>>>>>> 1731d039a8b3dd13f7571b27ada71adf587fe2d8
