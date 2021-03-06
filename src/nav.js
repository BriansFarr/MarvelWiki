import React from 'react'
import { Link } from 'react-router-dom'
import MarvelNav from "./MarvelNav.png"

function Nav() {
  return (
    <nav>
       <Link to="/">
         <li><img src={MarvelNav} alt= "logo"/></li>
        </Link>
      <ul className="nav-Links">
       
       
        <Link to ="/comics">
          <li>Comics</li>
        </Link>
        <Link to="/App">
          <li>Search</li>
        </Link>
        < Link to="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav