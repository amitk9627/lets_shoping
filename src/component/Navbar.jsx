import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import InputBox from './InputBox'
import { ContextState } from '../context/Context'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useUserAuth } from '../context/UserAuthContext'


export const Navbar = () => {
  const {user}=useUserAuth();

  const { state } = useContext(ContextState);
  return (
    <div className='navbar'>
      <div className='logo'>Lets Shop</div>
      <nav>
        <div className='navlink'><NavLink to="/home" className="link">Home</NavLink></div>
        {/* <div className='navlink'><NavLink to="/contact" className="link">Contact</NavLink></div> */}
        <div className='navlink'><InputBox /></div>
        <div className='navlink' >
          <NavLink to="/cart" className="link cartLogo" style={{ position: "relative" }}>
            <AiOutlineShoppingCart />
            {state.length !== 0 && <span
              style={{ fontSize: "1rem", fontWeight: "700", position: "absolute", top: "1px", right: "10px", background: "orange", borderRadius: "50%", padding: "5px", color: "black" }}>
              {state.length}
            </span>
            }
          </NavLink></div>
        <div>
          <NavLink to="/profile">
            <div className='profile'>
              <img src={user?.photoURL} alt=""  className='profileImage' />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
