import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="header-logo" src="/vimis22.png" alt="VIMIS logo" />
        </Link>
      </div>
      <div className="navbarbutton_frame">
        <Link to="/about" className="navbar_buttons">About & Contact</Link>
      </div>
    </nav>
  )
}
