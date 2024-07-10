import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <>
    
      <div className='navbar'>

        <div className='logo_container'>
              <img src={logo} alt="logo" className='logo' />
        </div>

        <div className='navbar_flexbox'>
          <Link className="navbar_links" to='/'> Home </Link>
          <Link className="navbar_links" to='/work'> Work </Link>
          <Link className="navbar_links" to='/contact'> Contact </Link>
        </div>

      </div>

    </>
  )
}

export default Navbar