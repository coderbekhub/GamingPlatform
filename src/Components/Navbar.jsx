import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [active, setActive] = useState('nav-list')
  const [toggleIcon, setToggleIcon] = useState('navToggle')

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
        <div className="navContainer">
          <nav className='nav'>
            <div className='navLogo'>
              <a href="/"><h1>Logo</h1></a>
            </div>
            <ul className='navList'>
              <li><a className='navLink' href="#">Home</a></li>
              <li><a className='navLink' href="#">About us</a></li>
              <li><a className='navLink' href="#">Portfolio</a></li>
              <li><a className='navLink' href="#">News</a></li>
              <li><a className='navLink navBtn' href="tel:+998500105610">Contact us</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon} id='navToggle'>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </div>

      {/* <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
        <div className="navBody container">
          <div className='nav-logo'>
            <Link to='/'>
              <h1>Logo</h1>
            </Link>
          </div>

          <ul className={active}>
            <li>
              <Link onClick={navToggle}  className='nav-link' to='/'> Home</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/haqida'>About us</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/news'>News</Link>
            </li>
            <li>
              <Link onClick={navToggle} className='nav-link' to='/contact'>Contact us</Link>
            </li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav> */}
    </section>
  )
}
