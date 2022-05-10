import React from 'react'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <nav>
            <Navbar />
        </nav>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout