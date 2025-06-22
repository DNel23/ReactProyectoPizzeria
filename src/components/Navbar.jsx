const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="#">🍕 Pizzería Mamma Mia!</a>
        <div className="ml-auto">
          <button className="btn btn-outline-light mx-2">🏠 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light mx-2">🔓 Profile</button>
              <button className="btn btn-outline-light mx-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light mx-2">🔐 Login</button>
              <button className="btn btn-outline-light mx-2">🔐 Register</button>
            </>
          )}
          <button className="btn btn-outline-light mx-2">🛒 Total: ${total.toLocaleString()}</button>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
