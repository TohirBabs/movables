import React from 'react'
import logo from './logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header flex'>
        <div className='header__logo flex'>
          <img src={logo} />
          <h1>MOVABLES</h1>
        </div>

        <div className='header__links flex'>
            <div className='header__nav'>
                <ul className='flex'>
                  <li><a href='#' className='header__link'>Home</a></li>
                  <li><a href='#' className='header__link'>Partners</a></li>
                  <li><a href='#' className='header__link'>Join Moveables</a></li>
                  <li><a href='#' className='header__link'>Contact Us</a></li>
                </ul>
            </div>

            <button className='header__cta'>Request Access</button>
        </div> 
    </div>
  )
}

export default Header