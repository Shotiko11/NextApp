"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import './header.css';
import GeneralPage from './GeneralPage';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <header className="header">
        <div className="companyName">GlobalTech</div>
        <div className={`burgerIcon ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
          {menuActive ? '✕' : '☰'}
        </div>
        <ul className={`navList ${menuActive ? 'active' : ''}`}>
          <li className="navItem">
            <Link href="/home">Home</Link>
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
      <GeneralPage />
    </div>
  );
};

export default Header;
