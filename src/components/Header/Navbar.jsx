/* eslint-disable no-lone-blocks */
import React, { useState } from 'react'
import "./Style.css"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import logo from "./Logo.png"
const Navbar = () => {
  const state = useSelector(state => state.Cart.cartItems)
  const [mobile, setMobile] = useState(false)
  const ShowMobile = () => {
    setMobile(!mobile)
  }
  return (
    <nav>
      <div className="container">
        <NavLink className="logo d-flex" to="/">
          <img src={logo} alt="logo-img" />
          <h2>Everybody</h2>
        </NavLink>
        <ul className={mobile ? "links-mobile" : "Links"} onClick={() => setMobile(false)}>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#work'>Work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href='#category'>Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About us</a>
          </li>
        </ul>
        <button onClick={ShowMobile}>
          {mobile ? <i className="fa fa-times close home-btn"></i> : <i className="fa fa-bars open"></i>}
        </button>
        <NavLink to="/cart" className="cart">
          <div className='d-flex'>
            <i className='fa fa-shopping-cart'></i>
            <span className='bag-quntity'>
              <span>{state.length}</span>
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
