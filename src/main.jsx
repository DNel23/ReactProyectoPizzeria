import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './context/CartContext.jsx';
import { PizzasProvider } from './context/PizzasContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzasProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </PizzasProvider>
  </React.StrictMode>
)
