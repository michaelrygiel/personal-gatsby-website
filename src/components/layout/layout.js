import * as React from 'react'
import Header from '../header/header'
import Navigation from '../navigation/navigation'
import {
  container,
  heading
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Header/>
      <Navigation/>
      <main>
        <title>{pageTitle}</title>
        <h2 className={heading}>{pageTitle}</h2>
        {children}
      </main>
      <footer>
        © Michael Rygiel {(new Date().getFullYear())}
      </footer>
    </div>
  )
}

export default Layout