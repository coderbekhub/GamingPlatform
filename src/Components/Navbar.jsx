import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')

  const navToggle = () => {
    active === 'nav-list'
      ? setActive('nav-list nav__active')
      : setActive('nav-list')

    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")
  }

  const[navbar, setNavbar] = useState(false)

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  useEffect(() => {
  }, [])
  return (
    <section className='navSection'>
      <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
        <div className="navBody container">
          <div className='nav-logo'>
            <Link to='/'>
              <img src={navBrand} alt="..." />
            </Link>
          </div>

          <ul className={active}>
            <li>
              <Link onClick={navToggle}  className='nav-link' to='/'> Home </Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/xizmatlar'>About us</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/aloqa'>Portfolio</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/aloqa'>News</Link>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </section>
  )
}
