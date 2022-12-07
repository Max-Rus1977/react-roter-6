import React from 'react'
import { NavLink, Link } from "react-router-dom";
import cl from './NavBAr.module.css';

const NavBAr = () => {

  const navLinkActive = [cl.activeLink, cl.navLink]

  const addActiveLink = ({ isActive }) => {
    return isActive ? navLinkActive.join(' ') : cl.navLink
  }

  return (
    <nav className={cl.boxNav}>
      <h4>Navigation</h4>
      <ul>
        <li><NavLink className={addActiveLink} to={`/`}>Hom page</NavLink></li>
        <li><NavLink className={addActiveLink} to={`posts`}>Posts</NavLink></li>
        <li><NavLink className={addActiveLink} to={`about`}>About</NavLink></li>
        <li><Link className={cl.loginLink} to={`/registration`}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default NavBAr