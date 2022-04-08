import React from 'react'

import lego from './lego.png'
import './Together.css'


const Together = () => {
  return (
    <div className='together'>
        <h2>Lets Work together</h2>
        <p>
        Join our waitlist to get more info about our product and infrastructure.
        </p>
        <button>Get Started</button>
        <img src={lego} />
    </div>
  )
}

export default Together