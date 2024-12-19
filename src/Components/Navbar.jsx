import React from 'react'

export default function Navbar() {
    
   return (
  <>
        <div className='nav'>
            <div className="logo">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Testmonials</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
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
