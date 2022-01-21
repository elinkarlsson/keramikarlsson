import './Header.css'
import {
  NavLink
} from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <a href="/" className="header-link">
          <h1 className="header-logo">
            <span className="color-1">K</span>
            <span className="color-2">e</span>
            <span className="color-3">r</span>
            <span className="color-4">a</span>
            <span className="color-5">m</span>
            <span className="color-6">i</span>
            <span className='color-7'>Karlsson</span>
          </h1>
        </a>
        <div className="nav">
          <NavLink className="nav-link nav-link--left" to="/shop" activeClassName='is-active'>Shop</NavLink>
          <NavLink className="nav-link nav-link--left" to="/kontakt" activeClassName='is-active'>Kontakt</NavLink>
          <a className="nav-link nav-link--right" href="https://www.instagram.com/keramikarlsson/" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  )
}