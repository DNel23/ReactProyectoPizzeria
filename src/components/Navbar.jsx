import { Link } from "react-router-dom";

const Navbar = () => {
  const total = 25000;
  const token = true;

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

          <Link to="/cart" className="btn btn-outline-light mx-2">🛒 Total: ${total.toLocaleString()}</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
