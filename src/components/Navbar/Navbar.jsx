
import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div id="first">
        
      <h1>Navbar</h1>

      <ul>
        
        <li> <Link to="/"> Home</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>

      </ul>

      </div>
    </div>
    
  )
}

export default Navbar

