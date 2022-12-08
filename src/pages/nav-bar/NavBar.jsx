import React from 'react'
import { Link } from "react-router-dom";
import CustomLink from '../../UI/custom-link/CustomLink';
import cl from './NavBAr.module.css';

const NavBAr = () => {

  return (
    <nav className={cl.boxNav}>
      <h4>Navigation</h4>
      <ul>
        <li><CustomLink to={`/`}>Hom page</CustomLink></li>
        <li><CustomLink to={`/posts`}>Posts</CustomLink></li>
        <li><CustomLink to={`/about`}>About</CustomLink></li>
        <li><Link className={cl.loginLink} to={`/registration`}>Login</Link></li>
      </ul>
    </nav>
  )
}

export default NavBAr