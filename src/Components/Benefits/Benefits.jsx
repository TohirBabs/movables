import React from 'react'
import'./Benefits.css'

import benefits from './benefits.png'

const Benefits = () => {
  return (
    <section className="benefits flex" >
        <div className='benefits__img'>
            <img src={benefits}></img>
        </div>
        <div className='benefits__text'>
        <h2>what will you get?</h2>
        <div className='benefits__list flex'>
          <div className='benefit'>
             <h3>More Clients</h3>
            <p>We aim to be able to connect customer and service provider seamlessly.</p>
          </div>

          <div className='benefit'>
             <h3>Integration</h3>
            <p>We aim to be able to connect customer and service provider seamlessly.</p>
          </div>

          <div className='benefit'>
             <h3>Efficient Customer Service</h3>
            <p>We aim to be able to connect customer and service provider seamlessly.</p>
          </div>

          <div className='benefit'>
             <h3>Efficient Customer Service</h3>
            <p>We aim to be able to connect customer and service provider seamlessly.</p>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Benefits