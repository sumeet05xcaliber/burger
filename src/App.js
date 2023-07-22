import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from './Components/HomePage'
import CustomizeBurger from './Components/CutsomizeBurger'
import Bill from './Components/Bill'
import Cart from './Components/Cart'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={HomePage}></Route>
        <Route path='/CustomizeBurger' Component={CustomizeBurger}></Route>
        <Route path='/bill' Component={Bill}></Route>
        <Route path='/cart' Component={Cart}></Route>

      </Routes>
    </Router>
  )
}

export default App