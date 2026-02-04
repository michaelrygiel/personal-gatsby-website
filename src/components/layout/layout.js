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
        <title>{pageTitle} | Michael Rygiel</title>
        <h2 className={heading}>{pageTitle}</h2>
        {children}
      </main>
      <footer style={{ 
        marginTop: '2rem', 
        paddingTop: '1rem', 
        borderTop: '1px solid #e0e0e0',
        textAlign: 'center',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        © Michael Rygiel {(new Date().getFullYear())}
      </footer>
    </div>
  )
}

export default Layout
