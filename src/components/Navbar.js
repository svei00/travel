import './navbar.css'
import { RiHotelLine } from 'react-icons/ri'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='items'>
        <h1 className='logo'>La Estancia de Lupita</h1>
        <ul className='menu'>
            <li>
                <RiHotelLine/>Home
            </li>
        </ul>
    </nav>
  )
}

export default Navbar