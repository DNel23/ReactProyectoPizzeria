import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";
import { formattedPrice } from '../assets/js/formatedPrice'
import { UserContext } from "../context/userContext";

const Navbar = () => {
  const { getTotalPrice, cartItems } = useContext(CartContext)
  const isActiveClass = ({ isActive }) => (isActive ? "btn btn-outline-light mx-2 active" : "btn btn-outline-light mx-2")
  const noActive = ({ isActive }) => (isActive ? "btn btn-outline-light mx-2" : "btn btn-outline-light mx-2")
  const TotalPrice = getTotalPrice()
  const {token,logout} = useContext(UserContext)
  //const token = true;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link to="/" className="navbar-brand" >🍕 Pizzería Mamma Mia!</Link>
        <div className="ms-auto">
          <NavLink to="/" className={isActiveClass}>🏠 Home </NavLink>
          {token ? (
            <>
              <NavLink to="/profile" className={isActiveClass}>🔓 Profile</NavLink>
              <NavLink className={noActive} onClick={logout}>🔒 Logout</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login" className={isActiveClass}>🔐 Login</NavLink>
              <NavLink to="/register" className={isActiveClass}>🔐 Register</NavLink>
            </>
          )}
          <Badge bg="light" text="dark" className="me-2">{cartItems.length}</Badge>
          <NavLink to="/cart" className={isActiveClass}>🛒Total: ${formattedPrice(TotalPrice)}</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
