import './navbar.css';
import { Component, React } from 'react';
import { MenuItems } from './MenuItems';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { GiPalmTree } from 'react-icons/gi'
import Modal from './Modal';

// interface Props {
//   title: string;
//   url: string;
//   cName: string
//   icon: string
// }

class Navbar extends Component {

  // const [openModal, setOpenModal] = useState(false); As a functional Component
 state = { clicked: false, openModal: false}; // As Class Componet
  
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleModal = () => {
    this.setState({ openModal: !this.state.openModal });
  };

  render() {
    
    return (
      <nav className='items'>
          <h1 className='logo'>La Estancia de Lupita <GiPalmTree style={{color: 'aquamarine'}}/> </h1>

          <div className='icons' onClick={this.handleClick}>
            {this.state.clicked  ? <GrClose /> : <GiHamburgerMenu />}
          </div>

          <ul className={this.state.clicked ? 'menu active' : 'menu'}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                {/*
                // Was:
                <a href={item.url} className={item.cName}>
                  {item.icon}{item.title}
                </a> */}
                <Link className={item.cName} to={item.url}>
                  {item.icon}{item.title}                
                </Link>
              </li>
              )
            })}
            <div className='container'>
              <div className='center'>
                <Modal />
              </div>
            </div>
          </ul>
      </nav>
    )
  }
}
export default Navbar