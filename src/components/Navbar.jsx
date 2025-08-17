import { useContext } from "react";
import { Link} from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";
import {formattedPrice} from '../assets/js/formatedPrice'

const Navbar = () => {
  const {getTotalPrice, cartItems} = useContext(CartContext)
  const TotalPrice=getTotalPrice()
  const token = false;

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link to="/" className="navbar-brand" >🍕 Pizzería Mamma Mia!</Link>
        <div className="ms-auto">
          <Link to="/"  className="btn btn-outline-light mx-2">🏠 Home </Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light mx-2">🔓 Profile</Link>
              <Link to="/login" className="btn btn-outline-light mx-2">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light mx-2">🔐 Login</Link>
              <Link to="/register" className="btn btn-outline-light mx-2">🔐 Register</Link>
            </>
          )}
          <Badge bg="light" text="dark" className="me-2">{cartItems.length}</Badge>
          <Link to="/cart" className="btn btn-outline-light mx-2">🛒Total: ${formattedPrice(TotalPrice)}</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
