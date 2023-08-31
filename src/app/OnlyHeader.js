import Link from 'next/link'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import '../cssfiles/OnlyHeader.css'

const OnlyHeader = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);e
    };

    const stil = {
      color:"white",
      textDecoration:"none"
    }


  return (
    <div>
      <header className="header">
        <Link style={stil} className="companyName" href="/">SLTeach</Link>
        <SearchBar />
        <div className={`burgerIcon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          {menuActive ? '✕' : '☰'}
        </div>
        <ul className={`navList ${menuActive ? 'active' : ''}`}>
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about">About</Link>
          </li>
          <li className="navItem">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="navItem">
            <Link href="/jobs">Jobs</Link>
          </li>
          <li className="navItem">
            <Link href="/products">Products</Link>
          </li>
          <li className="navItem">
            <Link href="/">Projects</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default OnlyHeader
