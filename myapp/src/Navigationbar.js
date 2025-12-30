import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigationbar.css'
const Navigationbar = () => {
  return (
    <div style={{paddingLeft:'20px',paddingRight:'20px'}}>
    <div className='navbar'>
        <h1 id='hello'>Hello!</h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact us</NavLink>
    </div>
    <hr style={{borderColor:'yellow'}}/>
    </div>
  )
}

export default Navigationbar