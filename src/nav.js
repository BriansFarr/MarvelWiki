import React from 'react'
import { Link } from 'react-router-dom'
import MarvelNav from "./MarvelNav.png"

function Nav() {
  return (
    <nav>
      <img src={MarvelNav}/>
      <ul className="nav-Links">
        <Link to="/">
          <li>Home</li>
        </Link>
        < Link to="/about">
          <li>About</li>
        </Link>
        <Link to ="/comics">
          <li>Comics</li>
        </Link>
        <Link to="/App">
          <li>Search</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav