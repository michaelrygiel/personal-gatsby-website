import * as React from 'react'
import { Link } from 'gatsby'
import {
  navContainer,
  navLinks,
  navLinkItem,
  navLinkText
} from './navigation.module.css'

const Nav = () => {
  return (
    <nav className={navContainer}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
              Home
              </Link>
          </li>
          <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
              Projects
              </Link>
          </li>
          <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>
              About
              </Link>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
