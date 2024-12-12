import './footer.css'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="footer container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="links">
          <ul className='flexCenterSpace'>
            <li><Link to={'/categories'}>الفئات</Link></li>
            <li><Link to={'/raise'}>المزادات</Link></li>
            <li><Link to={'/market'}>السوق الفني</Link></li>
            <li><Link to={'/artists'}>الفنانين</Link></li>
            <li><Link to={'/'}>الرئيسيه</Link></li>
            <li><Link to={'/aboutUs'}>من نحن</Link></li>
          </ul>
        </div>

        <div className="copyRight flexCenterSpace">
          <div className="cyRight flexCenterSpace">
            <span>سياسه الخدمه</span>
            <span>سياسه الخصوصيه</span>
          </div>

          <div className="cyLeft">
            <span>جميع الحقوق محفوظة لدي منصة فضاء الفن </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer