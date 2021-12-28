import './Header.css'
import {
  NavLink
} from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <a href="/" className="header-link"><h1 className="header-logo">KeramiKarlsson</h1></a>
        <div className="nav">
          <NavLink className="nav-link nav-link--left" to="/shop" activeClassName='is-active'>Shop</NavLink>
          <NavLink className="nav-link nav-link--left" to="/kontakt" activeClassName='is-active'>Kontakt</NavLink>
          <a className="nav-link nav-link--right" href="https://www.instagram.com/keramikarlsson/" target="_blank">Instagram</a>
        </div>
      </div>
    </div>
  )
}