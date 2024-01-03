import React, {useState} from 'react'
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

  // useEffect(() => {
  // }, [])
  return (
    <section className='navSection'>
      <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
        <div className="navBody container">
          <div className='nav-logo'>
            <a href='/'>
              <h1>Logo</h1>
            </a>
          </div>

          <ul className={active}>
            <li>
              <a onClick={navToggle}  className='nav-link' href='#'> Home</a>
            </li>
            <li>
              <a onClick={navToggle} className='nav-link' href='#haqida'>About us</a>
            </li>
            <li>
              <a onClick={navToggle} className='nav-link' href='#portfolio'>Portfolio</a>
            </li>
            <li>
              <a onClick={navToggle} className='nav-link' href='#news'>News</a>
            </li>
            <li>
              <a onClick={navToggle} className='nav-link' href='#contact'>Contact us</a>
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
