import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

const showButton = () =>{
  if(window.innerWidth <= 960){
    setButton(false)
  }
  else{
    setButton(true)
  }
}

useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className='navbar-container'>
        <Link to="/" className='navbar-logo' onClick={closeMobileMenu}><i className="fa fa-shopping-cart"></i>
            KYN 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/stores' className='nav-links' onClick={closeMobileMenu}>
              Stores
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/connect' className='nav-links' onClick={closeMobileMenu}>
             Connect
            </Link>
          </li>
          
        </ul>
        {button && <Button btnAction='sign-up' type='button' class="btn btn-light ml-2" buttonStyle='btn--outline '>Sign Up</Button>} &nbsp; &nbsp; &nbsp; &nbsp;
        {button && <Button btnAction='sign-in' type='button' class="btn btn-light " buttonStyle='btn--outline '>Sign In</Button>}
        
        </div>
    </nav>
    </>
  )
}

export default Navbar