import './navbar.css'
import { Component, React } from 'react'
import { MenuItems } from './MenuItems'
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

// interface Props {
//   title: string;
//   url: string;
//   cName: string
//   icon: string
// }

class Navbar extends Component {

  state = { clicked: false};

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {

    return (
      <nav className='items'>
          <h1 className='logo'>La Estancia de Lupita</h1>

          <div className='icons' onClick={this.handleClick}>
            {this.state.clicked  ? <GrClose /> : <GiHamburgerMenu />}
          </div>

          <ul className={this.state.clicked ? 'menu active' : 'menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                <a href={item.url} className={item.cName}>
                  {item.icon}{item.title}
                </a>
              </li>
              )
            })}
            <div className='container'>
              <div className='center'>
                <Button
                  title='Sign Up '
                />
              </div>
            </div>
          </ul>
      </nav>
    )
  }
}
export default Navbar