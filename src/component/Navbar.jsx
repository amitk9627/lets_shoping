import React from 'react'
import {NavLink} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div style={{background:"#999"}}>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/cart" >cart</NavLink>
      
    </div>
  )
}