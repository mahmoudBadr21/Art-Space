import './navbar.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 900) {
      return {right: !menuOpen && "-100%"}
    }
  }

  return (
    <nav>
      <div className='navbar flexCenterSpace'>
        <i className="fas fa-bars-staggered toggleIcon" onClick={() => setMenuOpen((prev) => !prev)}></i>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="links" style={getMenuStyle(menuOpen)} onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-close closeMenu"></i>
          <ul className='flexCenterSpace'>
            <li><Link to={'/categories'}>الفئات</Link></li>
            <li><Link to={'/raise'}>المزادات</Link></li>
            <li><Link to={'/market'}>السوق الفني</Link></li>
            <li><Link to={'/gallery'}>المعرض الفني</Link></li>
            <li><Link to={'/artists'}>الفنانين</Link></li>
            <li><Link to={'/forum'}>المنتدي</Link></li>
          </ul>
        </div>

        <div className="icons flexCenterSpace">
          <i className="fa-regular fa-user"></i>
          <i className="far fa-bell"></i>
        </div>
      </div>
    </nav>
  )
}

export default Navbar