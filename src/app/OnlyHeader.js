"use client"

import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'

const OnlyHeader = () => {
    const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };


  return (
    <div>
      <header className="header">
        <div className="companyName">GlobalTech</div>
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
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default OnlyHeader
