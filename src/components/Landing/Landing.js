import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
  <div>
    <h1 className='title'>
      <span className='f-large'>Beer</span>
      <br/>
      <span className='f-med'>Finder</span>
    </h1>
    <div className='wrapper'>
    <p>Welcome to Beer Finder! <br /> Search for your favorite drinks</p>
    <Link className='landing-btn' to='/main'>Let's Get Started</Link>
    </div>
  </div>
  )
}



export default Landing
