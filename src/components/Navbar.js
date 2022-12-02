import './navbar.css'
import React from 'react'
import { MenuItems } from './MenuItems'

// interface navbar {
//   Home: String;
// }

const Navbar = () => {
  return (
    <nav className='items'>
        <h1 className='logo'>La Estancia de Lupita</h1>
        <ul className='menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
              <a href={item.url}>
                {item.icon}{item.title}
              </a>
            </li>
            )
          })}
        </ul>
    </nav>
  )
}

export default Navbar