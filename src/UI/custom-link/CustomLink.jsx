import { Link, useMatch } from 'react-router-dom'
import cl from './CustomLink.module.css'

const CustomLink = ({ children, to, ...props }) => {

  const match = useMatch(to)
  const arrLinkClasses = [cl.commonClasses, cl.activeLink].join(' ')

  const linkClasses = match ? arrLinkClasses : cl.commonClasses

  return (
    <Link
      to={to}
      className={linkClasses}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink