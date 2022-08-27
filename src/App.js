import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './components/Cart/Cart'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'
import NotFound from './components/Home/NotFound'
const App = () => {

  return (
    <Router>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  )
}

export default App