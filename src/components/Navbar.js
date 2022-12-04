import './navbar.css'
import React from 'react'
import { MenuItems } from './MenuItems'
import Button from './Button'


// interface Props {
//   title: string;
//   url: string;
//   cName: string
//   icon: string
// }

const Navbar = () => {
  return (
    <nav className='items'>
        <h1 className='logo'>La Estancia de Lupita</h1>
        <ul className='menu'>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.icon}{item.title}
              </a>
            </li>
            )
          })}
          <Button
            title='Sign Up'
          />
        </ul>
    </nav>
  )
}

export default Navbar