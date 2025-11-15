import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar content_placement">
      <div>
        <Link to="/">
          <img className="logoframe" src="/vimis22.png" alt="logo" />
        </Link>
      </div>
      <div className="navbarbutton_frame">
        <Link to="/quiz" className="navbar_buttons custom-button">QUIZ</Link>
        <Link to="/about" className="navbar_buttons custom-button">About & Contact</Link>
      </div>
    </nav>
  )
}
