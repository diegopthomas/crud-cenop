import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './paginas/Home'
import Agencias from './paginas/Agencias'
import Erro404 from './paginas/Erro404'
import Cabecalho from './components/Cabecalho'

function App() {
  return (

  <Router>
    <Cabecalho />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/agencias'>
        <Agencias />
      </Route>
      <Route>
        <Erro404 />
      </Route>
    </Switch>
  </Router>
  
  )
}

export default App
