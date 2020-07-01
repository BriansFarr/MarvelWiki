import React from 'react'
import { Link } from 'react-router-dom'
import Comics from './Comics'
function Nav() {
  return (
    <nav>
      <h1>logo</h1>
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