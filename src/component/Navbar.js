import React, {useState} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa'
// import { click } from '@testing-library/user-event/dist/click';
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const [color, setColor] = useState(false)

    const colorChange = () =>{
      if(window.scrollY >= 100){
        setColor(true)
      }else{
        setColor(false)
      }
    }

    window.addEventListener('scroll', colorChange)
  return (
    <div className={color ? 'header heafer-bg' : 'header'}>
      <Link to='/'><h1>GLX TRVL</h1></Link>
      <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
        <div className='link'>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
            <Link to='/training'>Training</Link>
        </li>
        <li>
            <Link to='/contact'>Contact</Link>
        </li>
        </div>
      </ul>
      <div className='humburger' onClick={handleClick}>
        {click ? (<FaTimes  size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}}/>) }
        
      </div>
    </div>
  )
}

export default Navbar;
