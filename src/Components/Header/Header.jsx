import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__logo'></div>

        <div className='header__links'>
            <div className='header__nav'>
                <ul>
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