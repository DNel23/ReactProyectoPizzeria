import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext.jsx';
import { PizzasProvider } from './context/PizzasContext.jsx';
import UserProvider, { UserContext } from './context/userContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <PizzasProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </PizzasProvider>
    </UserProvider>
  </React.StrictMode>
)
