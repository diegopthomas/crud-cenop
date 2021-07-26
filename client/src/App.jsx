import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './paginas/Home'
import Erro404 from './paginas/Erro404'
import './assets/base.css'

function App() {
  return (

  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route>
        <Erro404 />
      </Route>
    </Switch>
  </Router>
  
  )
}

export default App
