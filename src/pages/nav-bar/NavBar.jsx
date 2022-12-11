import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../hook/useAuth';
import CustomLink from '../../UI/custom-link/CustomLink';
import cl from './NavBAr.module.css';

const NavBAr = () => {

  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const btnClasses = [cl.loginLink, cl.btnLoginLink].join(' ')

  const extByClick = () => {
    return signOut(() => navigate('/', { replace: true }))
  }

  return (
    <nav className={cl.boxNav}>
      <h4>Navigation</h4>
      <ul>
        <li><CustomLink to={`/`}>Hom page</CustomLink></li>
        <li><CustomLink to={`/posts`}>Posts</CustomLink></li>
        <li><CustomLink to={`/about`}>About</CustomLink></li>
        {
          user
            ? <li><button onClick={extByClick} className={btnClasses}>Sign Out</button></li>
            : <li><Link className={cl.loginLink} to={`/registration`}>Login</Link></li>
        }
      </ul>
    </nav>
  )
}

export default NavBAr