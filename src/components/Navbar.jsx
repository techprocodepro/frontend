import React from 'react'
import CartLogo from './CartLogo'
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
   <nav className='navbar'>
    <center>   
        <ul>
            <li><Link to="/" style={{ textDecoration: 'none', color:'black' }}>Home</Link></li>
            <li><img className="logo" src={require('../assets/foodlogo.png')} alt="" /></li>
            <li>contact</li>
            <CartLogo/>
        </ul>
    </center>
   </nav>
  )
}

export default Navbar