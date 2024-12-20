import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    
   return (
  <>
        <div className='nav'>
            <div className="logo">
                <Link to='/'>
                    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
                </Link>
            </div>
            <div className="links">
                <ul>
                   <li><NavLink to="/">Home</NavLink></li>
                   <li><NavLink to="/about">About Us</NavLink></li>
                   <li><NavLink to="/services">Services</NavLink></li>
                   <li><NavLink to="/faculty">Experts</NavLink></li>
                   <li><NavLink to="/products">Products</NavLink></li>
                </ul>
            </div>
            <div className="btns">
                <button>Profile</button>
                <button>Dashboard</button>
            </div>
        </div>
       
  </>
  )
}
