import React, { useState } from 'react'
import "./Header.css"
import logo from "./logop.png"

const Header = () => {

    // toggle menu
    const [Mobile, setMobile] = useState(false);

  return ( 
    
    <>
        <header className='header' id='header'>
            <div className='container d_flex'>
                <div className='logo f_flex'>
                    <img src={logo} alt='' />
                    <h1 className='name'>MOVEABLES</h1>
                </div>

                <div className='navlink d_flex'>
                    <ul className={Mobile ? "link f_flex show" : "link f_flex hide"} onClick={() => setMobile(false)}>
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#partners'>partners</a></li>
                        <li><a href='#join'>Join Moveables</a></li>
                        <li><a href='#contact'>Contact us</a></li>
                        <li><a href='#'><button className='home-btn'>Request Access</button></a></li>
                    </ul>
                    
                    <button className='toggle home-btn' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fas fa-times close '></i> : <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header