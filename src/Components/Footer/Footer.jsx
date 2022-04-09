import React from 'react'

import './Footer.css'

import logo from './logop.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__links'>
            <div className='footer__left'>
                <a href='#'><img src={logo}/>MOVABLES</a>
                <a href='#'><img src={logo}/>MOVABLES</a>
                <a href='#'><img src={logo}/>MOVABLES</a>
                <a href='#'><img src={logo}/>MOVABLES</a>
            </div>
            <div className='footer__center'></div>
            <div className='footer__right'></div>
        </div>
        <p>
            2022 Moveables. All Rights Reserved
        </p>
        
    </div>
  )
}

export default Footer